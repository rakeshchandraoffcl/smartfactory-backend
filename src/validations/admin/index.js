import {
  adminaddBestPracticeValidation,
  adminUpdateBestPracticeValidation,
} from "../admin/bestPractice/index.js";
import {
  adminSupplierCertificationValidation,
  supplyCompanyAddValidation,
} from "../admin/company/index.js";
import {
  adminDignosisCreateOptionImageValidation,
  adminDignosisCreateOptionsValidation,
  adminDignosisCreateQuestionValidation,
  adminDignosisCreateReportValidation,
  adminDignosisUpdateReportValidation,
} from "../admin/diagnosis/index.js";
import {
  adminaddMailValidation,
  adminUpdateMailValidation,
} from "../admin/mailManagement/index.js";
import {
  addMemberValidation,
  adminMemberChangePasswordValidation,
  editMemberValidation,
} from "../admin/member/index.js";
import { adminCreateMenuValidation, adminUpdateMenuValidation } from "../admin/menu/index.js";
import { saveSubsidyValidation, updateSubsidyValidation } from "../admin/subsidy/index.js";
import {
  adminaddTextValidation,
  adminSendBulkTextValidation,
  adminUpdateTextValidation,
} from "../admin/textManagement/index.js";

import { adminaddfaqValidation } from "../admin/faq/index.js";
import {
  searchQuoteValidation,
  appvalCancelhQuoteValidation,
  suspendQuoteValidation,
} from "../admin/quoteReqest/index.js";
import { adminReplyInquiryValidation } from "../admin/inquiry/index.js";
import { adminLoginValidate } from "../admin/login.js";
import { adminCreateMentor } from "../admin/mentor/index.js";
import { adminaddSupplierIntroductionValidation } from "../admin/supplier/index.js";

export {
  adminLoginValidate,
  adminSupplierCertificationValidation,
  adminDignosisCreateQuestionValidation,
  adminDignosisCreateOptionsValidation,
  adminUpdateBestPracticeValidation,
  adminDignosisCreateReportValidation,
  adminMemberChangePasswordValidation,
  adminaddBestPracticeValidation,
  adminaddSupplierIntroductionValidation,
  adminaddfaqValidation,
  addMemberValidation,
  editMemberValidation,
  supplyCompanyAddValidation,
  adminDignosisUpdateReportValidation,
  adminDignosisCreateOptionImageValidation,
  adminCreateMenuValidation,
  adminUpdateMenuValidation,
  saveSubsidyValidation,
  updateSubsidyValidation,
  adminCreateMentor,
  adminReplyInquiryValidation,
  adminaddTextValidation,
  adminUpdateTextValidation,
  adminUpdateMailValidation,
  adminaddMailValidation,
  adminSendBulkTextValidation,
  searchQuoteValidation,
  appvalCancelhQuoteValidation,
  suspendQuoteValidation,
};
