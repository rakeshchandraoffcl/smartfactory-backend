import { CustomDate } from "../date/customDate";

export const getHTML = (reports) => {
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
                    Diagnosis results
                </div>
                <h1 style="color: #ffffff">Increase your productivity by building a smart factory!</h1>
            </div>
        
        <div 
        style="
        padding-left: 56px;
        padding-right: 56px;
        "
        >`;

  reports.forEach((item, index) => {
    html += `
              <div>
                  <h2>${index + 1}. ${item.report_title}</h2>
              </div>
              <div>
                ${item.content}
              </div>
          `;
  });

  html += `
    
        </div>
         
            
        </body>
        </html>
        `;

  return html;
};
