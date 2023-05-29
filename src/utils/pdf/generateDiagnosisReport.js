import { CustomDate } from "../date/customDate.js";
import { SMALL_STATUS } from "../constants.js";
import { StatusError } from "../../config/index.js";
import { diagnosisReportService } from "../../services/index.js";
import puppeteer from "puppeteer";
import os from "os";

const MACHINE_TYPE = os.type();
const metaDataForPupPeteer = {
  Darwin: {
    executablePath: "/usr/bin/chromium-browser",
    args: ["--lang=ko"],
    env: { LANGUAGE: "ko" },
  },
  Linux: {
    executablePath: "/usr/bin/chromium-browser",
    args: ["--lang=ko"],
    env: { LANGUAGE: "ko" },
  },
  Windows_NT: {
    args: ["--lang=ko"],
    env: { LANGUAGE: "ko" },
  },
};

const getHTML = (reports, commonItem, summaries) => {
  const date = new CustomDate();
  const formatedDate = date.getCurrentDate().split("-").join(".");

  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
        html,body {
          font-family: 'Open Sans', sans-serif;
        }

        .header {
          background: #007989;
          padding-left: 56px;
          padding-right: 56px;
          padding-top: 40px;
          padding-bottom: 20px;
        }
        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: contain !important;
          
       }
        </style>
    </head>
    <body style="padding: 0;margin:0;">
    <div
    class="header"
    
    >
        <div style="text-align: right; color: #ffffff">${formatedDate}</div>
        <div
        style="
            background-color: #ffffff;
            display: inline;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 20px;
        "
        >
        진단 결과
        </div>
        <h1 style="color: #ffffff">스마트 공장 구축을 통해 생산성을 올려 보세요!</h1>
    </div>
           
        
        <div 
        style="
        padding-left: 56px;
        padding-right: 56px;
        max-width: 100%;
       
        "
       
        >`;
  if (summaries.length > 0) {
    html += `
          <h2>요약</h2>
          `;
    summaries.forEach((item) => {
      html += `
            <div>
            ${item.content}
          </div>
            `;
    });
    html += `<div style="page-break-after:always;"></div>`;
  }

  reports.forEach((item, index) => {
    html += `
              <div>
                  <h2>${index + 1}. ${item.report_title}</h2>
              </div>
              
              <div>
                ${item.content}
              </div>
              
          `;
    commonItem.forEach((commonItem) => {
      if (item.report_order === commonItem.report_order && item.is_common !== SMALL_STATUS.yes) {
        html += `
            
            <div>
              ${commonItem.content}
            </div>
        `;
      }
    });
    html += `<div style="page-break-after:always;"></div>`;
  });

  html += `
    
        </div>
         
            
        </body>
        </html>
        `;

  return html;
};

/**
 * Generate diagnosis PDF
 * @param resultId
 * @param filePath

 */

export const generateDiagnosisReportPDF = async (resultId, filePath) => {
  try {
    // Check for valid ID
    const isExists = await diagnosisReportService.getResultFromResultHistory(resultId);
    if (!isExists) {
      throw StatusError.badRequest("invalidAttempt");
    }

    const result = [];
    const summary_items = [];

    // Get respective questions and answers
    const resultItems = await diagnosisReportService.getUserSelectedOptions(resultId);

    // Get result without answers
    // const withoutAnswersData = await diagnosisReportService.getReportsWithoutAnswers();

    // Get common Items
    const commonItemResponse = await diagnosisReportService.getCommonReports();

    // Data to fetch reports
    const filterData = {
      answer_id1: resultItems
        .filter((item) => item.answer_id === "answer_id1")
        .map((item) => item.diagnosis_option_id),
      answer_id2: resultItems
        .filter((item) => item.answer_id === "answer_id2")
        .map((item) => item.diagnosis_option_id),
      answer_id3: resultItems
        .filter((item) => item.answer_id === "answer_id3")
        .map((item) => item.diagnosis_option_id),
      answer_id4: resultItems
        .filter((item) => item.answer_id === "answer_id4")
        .map((item) => item.diagnosis_option_id),
    };

    // Fetch reports
    const response = await diagnosisReportService.getMatchingReports(filterData);

    response.forEach((item) => {
      // Get summeries
      if (item.is_summary !== SMALL_STATUS.yes) {
        // Reports
        result.push(item);
      } else {
        summary_items.push(item);
      }
    });

    const sortedArray = result.sort((a, b) => a.report_order - b.report_order);
    const sortedSummaryItems = summary_items.sort((a, b) => a.report_order - b.report_order);
    let html = "";
    if (sortedArray.length === 0) {
      html = getHTML(commonItemResponse, [], sortedSummaryItems);
    } else {
      html = getHTML(sortedArray, commonItemResponse, sortedSummaryItems);
    }

    const browser = await puppeteer.launch(metaDataForPupPeteer[MACHINE_TYPE]);
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setExtraHTTPHeaders({
      "Accept-Language": "ko",
    });
    await page.addStyleTag({
      content: "@page { size: auto; }",
    });
    await page.setContent(html);
    const pdfBuffer = await page.pdf({
      scale: 0.7,
      printBackground: true,
      // format: "A4",

      path: filePath,
      displayHeaderFooter: true,
      headerTemplate: `<div></div>`,
      footerTemplate: `
      <div style=" width: 100%; font-size: 9px;
          padding: 0 56px; color: #bbb; position: relative;">
          <div style="position: absolute; right: 40px; top: 5px;"><span class="pageNumber"></span>/<span class="totalPages"></span></div>
      </div>
    `,
      // this is needed to prevent content from being placed over the footer
      margin: { bottom: "70px", top: "30px" },
    });

    await page.close();
    await browser.close();
    return pdfBuffer;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
