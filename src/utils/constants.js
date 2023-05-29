const TABLES = {
  BEST_PRACTICE: "ts_best_practice",
  BEST_PRACTICE_IMAGE: "ts_best_practice_image",
  CODE_SPECIFICATION: "ts_code_specification",
  DEVICE: "ts_device",
  DIAGNOSIS_REPORT: "ts_simple_level_diagnosis_report",
  DIAGNOSIS_REPORT_CATEGORIES: "ts_simple_level_diagnosis_report_categories",
  DIAGNOSIS_REPORT_CATEGORIES_ITEMS: "ts_simple_level_diagnosis_report_items",
  DIAGNOSIS_RESULT: "ts_simple_level_diagnosis_result",
  DIAGNOSIS_RESULT_DETAILS: "ts_simple_level_diagnosis_result_details",
  FAQ: "ts_faq",
  GOVERNMENT_SUBSIDY: "ts_government_subsidy",
  MENTOR_ACTIVITY: "ts_mentor_activity",
  MENTOR_ASSIGNMENT: "ts_mentor_assignment",
  MENTORING: "ts_mentoring",
  MENTORING_PROGRESS: " ts_mentoring_progress",
  NOTICES: "ts_notices",
  NOTICES_FILE: "ts_notices_file",
  QNA: "ts_qna",
  REQUEST_DEVICE_QUOTE: "ts_request_device_quote",
  REQUEST_DEVICE_QUOTE_DETAIL: "ts_request_device_quote_detail",
  SIMPLE_LEVEL_DIAGNOSIS: "ts_simple_level_diagnosis",
  SIMPLE_LEVEL_DIAGNOSIS_OPTIONS: "ts_simple_level_diagnosis_options",
  SIMPLE_LEVEL_DIAGNOSIS_REPORT: "ts_simple_level_diagnosis_report",
  SMART_DEVICE: "ts_smart_device",
  SMART_FACTORY: "ts_smart_factory",
  SUBMIT_DEVICE_QUOTE: "ts_submit_device_quote",
  SUBMIT_DEVICE_QUOTE_DETAIL: "ts_submit_device_quote_detail",
  SUPPLIER_INTRODUCTION: "ts_supplier_introduction",
  TS_ALARM_LOG: "ts_alarm_log",
  TS_ALARM_VARIABLE: "ts_alarm_variable",
  TS_MAIL_RECEIVE_ADMIN: "ts_mail_receive_admin",
  TS_MAIL_SETTING: "ts_mail_setting",
  TS_MAIN_ACTIVITY_AREA: "ts_main_activity_area",
  TS_MAIN_APPLICATION_INDUSTRY: "ts_main_application_industry",
  MENTORING_RESULT_REPORT_FACILITY: "ts_mentoring_result_report_facility",
  MENTORING_RESULT_REPORT_FACILITY_DEVICE: "ts_mentoring_result_report_facility_device",
  TS_MAIN_SOLUTION: "ts_main_solution",
  ts_MENTOR_ACTIVITY_AREA: "ts_mentor_activity_area",
  TS_MENTOR_SPECIALIZATION: "ts_mentor_specialization",
  TS_MENTOR_SPECIALIZATION_AREA: "ts_mentor_specialization_area",
  TS_MESSAGE_RECEIVE_ADMIN: "ts_message_receive_admin",
  TS_MESSAGE_SETTING: "ts_message_setting",
  TS_SIMPLE_LEVEL_DIAGNOSIS_MAPPING: "ts_simple_level_diagnosis_mapping",
  TS_SIMPLE_LEVEL_DIAGNOSIS_REPORT_HISTORY: "ts_simple_level_diagnosis_report_history",
  TS_SIMPLE_LEVEL_DIAGNOSIS_REPORT_RESULT_HISTORY:
    "ts_simple_level_diagnosis_report_result_history",
  COMPANY_CODE: "ts_company_code",
  COMPANY_LIST: "ts_company_list",
  BUSINESS_PROGRESS: "ts_business_progress",
  SUPPLIER_RECOMENDATION_LIST: "ts_supplier_recommendation_list",
  SUPPLIER_RECOMENDATION_REQUEST: "ts_supplier_recommendation_request",
  USER_AGREEMENT: "ts_user_agreement",
  USER_COMPANY: "ts_company",
  USER_COMPANY_MAIN_ACTIVITY_AREA: "ts_main_activity_area",
  USER_COMPANY_MAIN_APPLICATION_INDUSTRY: "ts_main_application_industry",
  USER_COMPANY_MAIN_SOLUTION: "ts_main_solution",
  USER_IP_ADDRESS: "ts_admin_ip",
  USER_MENU: "ts_user_menu",
  USER_TABLE: "ts_users",
  USER_TABLE_NEW: "ts_users_new",
  MENTORING_RESULT_REPORT: "ts_mentoring_result_report",

  MENTORING_RESULT_REPORT_SUBMISSION: "ts_mentoring_result_report_submission",
  MENTORING_RESULT_REPORT_SAVE: "ts_mentoring_result_report_save",
  MENTORING_RESULT_REPORT_HISTORY: "ts_mentoring_result_report_history",
  MENTORING_RESULT_REPORT_PRODUCT: "ts_mentoring_result_report_product",
  MENTORING_RESULT_REPORT_PRODUCT_IMAGE: "ts_mentoring_result_report_product_image",
  MENTORING_RESULT_REPORT_CONTENTS: "ts_mentoring_result_report_contents",
  MENTORING_RESULT_REPORT_PROCESS: "ts_mentoring_result_report_process",
  MENTORING_RESULT_REPORT_SMARTFACTORY: "ts_mentoring_result_report_smartfactory",
  MENTORING_RESULT_REPORT_SMARTFACTORY_DETAIL: "ts_mentoring_result_report_smartfactory_detail",
  MENTORING_RESULT_REPORT_FIELD: "ts_mentoring_result_report_field",
  MENTORING_RESULT_REPORT_FIELD_ANALYSIS: "ts_mentoring_result_report_field_analysis",
  MENTORING_RESULT_REPORT_IMPROVEMENT: "ts_mentoring_result_report_improvement",
  MENTORING_RESULT_REPORT_KPI: "ts_mentoring_result_report_kpi",
  MENTORING_RESULT_REQUIRED_HW_LOCATION: "ts_mentoring_result_required_hw_location",
  MENTORING_RESULT_REQUIRED_REQUIRED_HW: "ts_mentoring_result_required_hw",
  MENTORING_RESULT_REQUIRED_LOCATION: "ts_mentoring_result_required_location",
  MENTORING_RESULT_REPORT_FIELD_DETAIL: "ts_mentoring_result_report_field_detail",
};

// Name of all the directories inside upload directories
const UPLOAD_DIRECTORIES = {
  DIAGNOSIS: "diagnosis",
  EDITOR: "editor",
  SUPPLIER_INTRODUCTION: "supplierIntroduction",
  DEMANDER_INTRODUCTION: "demanderIntroduction",
  BEST_PRACTICE: "bestPractice",
  COMPANY: "company",
  SMART_DEVICE: "smartDevice",
  SMART_FACTORY: "smartFactory",
  NOTICE: "notice",
  NOTIFICATION: "notification",
  MENTORING: "mentoring",
  MENTORING_PROGRESS: "mentoring_progress",
  MENTORING_APPLICATION: "mentoring-application",
  BUSINESS_PROGRESS: "business_progress",
  DEVICES: "devices",
  QUOTE_REQUEST: "quote_request",
  QUOTE_DELIVERY: "quoteDelivery",
  FORM: "form",
  REQUEST_QUOTITION: "request_quotation",
  DEVICE_QUOTE: "deviceQuotes",
};

const PAGINATION_LIMIT = 2;
const PAGINATION_LIMIT_GUIDE = 8;
const MENU = {
  CALCULATE_GOVT_SUBSIDY: "calculation_govt_subsidy",
  DIAGNOSE: "diagnose",
  GUIDE: "guide",
  INNER_BELL: "inner_bell",
  MY_BUSINESS: "my_business",
  MY_INFO: "my_info",
  SERVICE_CENTER: "service_center",
  SMART_DEVICE: "smart_devie",
};

const ROLES = {
  ADMIN: "admin",
  CURATOR: "curator",
  MENTOR: "mentor",
  DEMAND: "demand",
  SUPPLY: "supply",
};
const USER_TYPE = {
  USER_TYPE_01: "demand",
  USER_TYPE_02: "supplier",
  USER_TYPE_03: "curator",
  USER_TYPE_04: "mentor",
  USER_TYPE_05: "manager",
  non_member: "non_member",
};
const USER_TYPE_BY_NAME = {
  demand: "USER_TYPE_01",
  supplier: "USER_TYPE_02",
  curator: "USER_TYPE_03",
  mentor: "USER_TYPE_04",
  manager: "USER_TYPE_05",
};
const FAQ_TYPE = {
  FAQ_TYPE_01: "demand company",
  FAQ_TYPE_02: "supplier",
  FAQ_TYPE_03: "curator",
};

const USER_STATUS = {
  MMBRS_STTS_01: "Normal",
  MMBRS_STTS_02: "certification",
  MMBRS_STTS_03: "Companion",
  MMBRS_STTS_04: "secession",
  MMBRS_STTS_05: "dormancy",
};
const MENTORING_STATUS = {
  MENTORING_STATUS_10: "not applied",
  MENTORING_STATUS_20: "application",
  MENTORING_STATUS_30: "Curator Assignment",
  MENTORING_STATUS_40: "Mentor assignment",
  MENTORING_STATUS_50: "Proceeding",
  MENTORING_STATUS_60: "end",
  MENTORING_STATUS_70: "stop",
};
const MENTORING_STATUS_MAP = {
  notApplied: "MENTORING_STATUS_10",
  applied: "MENTORING_STATUS_20",
  curatorAssigned: "MENTORING_STATUS_30",
  mentorAssigned: "MENTORING_STATUS_40",
  inProgress: "MENTORING_STATUS_50",
  completed: "MENTORING_STATUS_60",
  stopped: "MENTORING_STATUS_70",
};
const USER_ROLE = {
  USER_TYPE_01: "demand",
  USER_TYPE_02: "supply",
  USER_TYPE_03: "curator",
  USER_TYPE_04: "mentor",
};

const USER_COMPANY_STATUS = {
  BSNS_CLSFC_01: "demand company",
  BSNS_CLSFC_02: "supplier",
  BSNS_CLSFC_03: "mentor",
};

const CERTIFICATION_STATUS = {
  BSNS_STTS_01: "Normal",
  BSNS_STTS_02: "certification",
};

const BUSINESS_CLASSFICATION = {
  BSNS_CLSFC_01: "Foundation",
  BSNS_CLSFC_02: "Basic horizontal development",
  BSNS_CLSFC_03: "Advancement 1",
  BSNS_CLSFC_04: "Advancement 1 horizontal deployment",
  BSNS_CLSFC_05: "Advancement 2",
  BSNS_CLSFC_06: "win-win with the masses",
  BSNS_CLSFC_07: "Smart Workshop",
  BSNS_CLSFC_08: "Medium vacuum follow-up management support",
};

const INFLOW_CLASSFICATION = {
  MMBRS_INFLW_01: "Banwolsihwa Digital Transformation (DX) Alliance",
  MMBRS_INFLW_02: "Incheon Techno Park",
  MMBRS_INFLW_03: "Gyeonggi Daejin Techno Park",
  MMBRS_INFLW_04: "Seoul Techno Park",
  MMBRS_INFLW_05: "Banwolsihwa Smart Industrial Complex",
  MMBRS_INFLW_06: "Incheon Nam-dong Smart Industrial Complex",
  MMBRS_INFLW_07: "win-win business",
};

const USER_CERTIFICATION_STATUS = {
  MMBRS_STTS_01: "Normal",
  MMBRS_STTS_02: "certification",
  MMBRS_STTS_03: "Companion",
  MMBRS_STTS_04: "secession",
  MMBRS_STTS_05: "dormancy",
};

const GROUP_INFOS = {
  USER_JOIN: "userHasArrived",
  USER_LEFT: "userHasLeft",
};

const NOTIFICATION_TYPES = {
  SEND_MESSAGE: "SEND_MESSAGE",
};

const professional_industry1 = {
  INDST_01: "machine parts assembly",
  INDST_02: "Electronic component assembly",
  INDST_03: "PCB",
  INDST_04: "root industry",
  INDST_05: "precision machining",
  INDST_06: "injection molding",
  INDST_07: "Restrictions",
  INDST_08: "chemistry",
  INDST_09: "cosmetics",
  INDST_10: "food",
  INDST_11: "clothing manufacturing",
  INDST_12: "Other manufacturing",
};

const specialization1 = {
  INDST_01: "machine parts assembly",
  INDST_02: "Electronic component assembly",
  INDST_03: "PCB",
  INDST_04: "root industry",
  INDST_05: "precision machining",
  INDST_06: "injection molding",
  INDST_07: "Restrictions",
  INDST_08: "chemistry",
  INDST_09: "cosmetics",
  INDST_10: "food",
  INDST_11: "clothing manufacturing",
  INDST_12: "Other manufacturing",
};

const sectors = {
  INDST_01: "machine parts assembly",
  INDST_02: "Electronic component assembly",
  INDST_03: "PCB",
  INDST_04: "root industry",
  INDST_05: "precision machining",
  INDST_06: "injection molding",
  INDST_07: "Restrictions",
  INDST_08: "chemistry",
  INDST_09: "cosmetics",
  INDST_10: "food",
  INDST_11: "clothing manufacturing",
  INDST_12: "Other manufacturing",
};

const main_application_industry1 = {
  INDST_01: "machine parts assembly",
  INDST_02: "Electronic component assembly",
  INDST_03: "PCB",
  INDST_04: "root industry",
  INDST_05: "precision machining",
  INDST_06: "injection molding",
  INDST_07: "Restrictions",
  INDST_08: "chemistry",
  INDST_09: "cosmetics",
  INDST_10: "food",
  INDST_11: "clothing manufacturing",
  INDST_12: "Other manufacturing",
};

const main_activity_area1 = {
  AREA_CODE_01: "Gangwon",
  AREA_CODE_02: "game",
  AREA_CODE_03: "Gyeongnam",
  AREA_CODE_04: "Gyeongbuk",
  AREA_CODE_05: "gwangju",
  AREA_CODE_06: "Dae-gu",
  AREA_CODE_07: "Daejeon",
  AREA_CODE_08: "Busan",
  AREA_CODE_09: "Seoul",
  AREA_CODE_10: "Sejong",
  AREA_CODE_11: "Ulsan",
  AREA_CODE_12: "Incheon",
  AREA_CODE_13: "Jeonnam",
  AREA_CODE_14: "Jeonbuk",
  AREA_CODE_15: "Jeju",
  AREA_CODE_16: "Chungnam",
  AREA_CODE_17: "Chungbuk",
};

const main_solution1 = {
  SLTN_01: "MES",
  SLTN_02: "ERP",
  SLTN_03: "PLM",
  SLTN_04: "SCM",
  SLTN_05: "FEMS",
  SLTN_06: "AI/Big Data",
  SLTN_07: "CPS",
  SLTN_08: "cloud",
  SLTN_09: "Facility automation",
  SLTN_10: "Equipment data collection",
  SLTN_11: "device",
  SLTN_12: "security",
};

// Government Subsidy Constant Variables [S]
const government_type = {
  CLSFC_SPFND_01: "central",
  CLSFC_SPFND_02: "muicipality",
};

const factory_scale = {
  GVRNM_SPRT_SF_LEVEL_01: "Foundation",
  GVRNM_SPRT_SF_LEVEL_02: "Advancement1",
  GVRNM_SPRT_SF_LEVEL_03: "Advancement2",
};

const government_location = {
  GVRNM_SPRT_AREA_CODE_01: "강원",
  GVRNM_SPRT_AREA_CODE_02: "경기",
  GVRNM_SPRT_AREA_CODE_03: "경기대진",
  GVRNM_SPRT_AREA_CODE_04: "경남",
  GVRNM_SPRT_AREA_CODE_05: "경북",
  GVRNM_SPRT_AREA_CODE_06: "경북포항",
  GVRNM_SPRT_AREA_CODE_07: "광주",
  GVRNM_SPRT_AREA_CODE_08: "대구",
  GVRNM_SPRT_AREA_CODE_09: "대전",
  GVRNM_SPRT_AREA_CODE_10: "부산",
  GVRNM_SPRT_AREA_CODE_11: "서울",
  GVRNM_SPRT_AREA_CODE_12: "세종",
  GVRNM_SPRT_AREA_CODE_13: "울산",
  GVRNM_SPRT_AREA_CODE_14: "인천",
  GVRNM_SPRT_AREA_CODE_15: "전남",
  GVRNM_SPRT_AREA_CODE_16: "전북",
  GVRNM_SPRT_AREA_CODE_17: "제주",
  GVRNM_SPRT_AREA_CODE_18: "충남",
  GVRNM_SPRT_AREA_CODE_19: "충북",
};

const subsidy_standard = {
  GVRNM_SPRT_PYMNT_STNDR_01: "전체비용",
  GVRNM_SPRT_PYMNT_STNDR_02: "자체비용",
};

const MENTOR_TYPES = {
  curator: "MNTR_TYPE_01",
  evaluator: "MNTR_TYPE_02",
  coordinator: "MNTR_TYPE_03",
  meister: "MNTR_TYPE_04",
};

const admin_company = {
  company_name: "ADMIN",
};
// Government Subsidy Constant Variables [E]

// RegExp[S]
const REGEXP = {
  decimalPattern: /^0+(\.\d{1,2})?$/, // ^0.xx$
  urlPattern:
    /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
};
///(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
// RegExp[E]

const STATUS = {
  Yes: "Y",
  No: "N",
};

const SMALL_STATUS = {
  yes: "Y",
  no: "N",
};

const SITUATION = {
  temporary: "N",
  upload: "Y",
};

const QUESTION_TYPE = {
  single: "QSTN_TYPE_01",
  multiple: "QSTN_TYPE_02",
};
const DIAGNOSIS_DIAPLAY_TYPE = {
  type1: "ANSWR_TYPE_02",
  type2: "ANSWR_TYPE_04",
  type3: "ANSWR_TYPE_01",
  type4: "ANSWR_TYPE_03",
};

const FILE_TYPES = {
  jpg: "image/jpg",
  jpeg: "image/jpeg",
  png: "image/png",
  pdf: "application/pdf",
  video: "video/mp4",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const SEPARATOR = {
  notoficationStartSeparator: "\\+\\+",
  notoficationEndSeparator: "\\+\\+",
};

const SET_DORMANT_DURATION = "DRMNT_TRCYC_01";
const WARN_DORMANT_DURATION = 7;

const DEVICE_LARGE_CATEGORY_CODE = {
  LARGE_CTGRY_DVC_01: {
    en: "computing device",
    ko: "전산기기",
  },
  LARGE_CTGRY_DVC_02: {
    en: "Peripherals",
    ko: "주변기기",
  },
  LARGE_CTGRY_DVC_03: {
    en: "Automation",
    ko: "자동화기기",
  },
  LARGE_CTGRY_DVC_04: {
    en: "Production Fascility",
    ko: "생산설비",
  },
  LARGE_CTGRY_DVC_05: {
    en: "Other",
    ko: "기타",
  },
};
const DEVICE_MIDDLE_CATEGORY_CODE = {
  MIDLE_CTGRY_DVC_01: { ko: "KVM" },
  MIDLE_CTGRY_DVC_02: { ko: "NAS" },
  MIDLE_CTGRY_DVC_03: { ko: "PC" },
  MIDLE_CTGRY_DVC_04: { ko: "PC부품" },
  MIDLE_CTGRY_DVC_05: { ko: "PDA" },
  MIDLE_CTGRY_DVC_06: { ko: "TV" },
  MIDLE_CTGRY_DVC_07: { ko: "UPS" },
  MIDLE_CTGRY_DVC_08: { ko: "네트워크" },
  MIDLE_CTGRY_DVC_09: { ko: "레이저프린터" },
  MIDLE_CTGRY_DVC_10: { ko: "모니터" },
  MIDLE_CTGRY_DVC_11: { ko: "바코드스캐너" },
  MIDLE_CTGRY_DVC_12: { ko: "바코드프린터" },
  MIDLE_CTGRY_DVC_13: { ko: "보안" },
  MIDLE_CTGRY_DVC_14: { ko: "서버" },
  MIDLE_CTGRY_DVC_15: { ko: "스토리지" },
  MIDLE_CTGRY_DVC_16: { ko: "키오스크" },
  MIDLE_CTGRY_DVC_17: { ko: "클라우드서버" },
  MIDLE_CTGRY_DVC_18: { ko: "모바일기기" },
  MIDLE_CTGRY_DVC_19: { ko: "거치대" },
  MIDLE_CTGRY_DVC_20: { ko: "기타" },
  MIDLE_CTGRY_DVC_21: { ko: "냉난방기" },
  MIDLE_CTGRY_DVC_22: { ko: "로드셀" },
  MIDLE_CTGRY_DVC_23: { ko: "마킹기" },
  MIDLE_CTGRY_DVC_24: { ko: "서버랙" },
  MIDLE_CTGRY_DVC_25: { ko: "저울" },
  MIDLE_CTGRY_DVC_26: { ko: "케이블" },
  MIDLE_CTGRY_DVC_27: { ko: "HMI" },
  MIDLE_CTGRY_DVC_28: { ko: "Inverter" },
  MIDLE_CTGRY_DVC_29: { ko: "IoT" },
  MIDLE_CTGRY_DVC_30: { ko: "PLC" },
  MIDLE_CTGRY_DVC_31: { ko: "감속기" },
  MIDLE_CTGRY_DVC_32: { ko: "계측기" },
  MIDLE_CTGRY_DVC_33: { ko: "기타" },
  MIDLE_CTGRY_DVC_34: { ko: "로봇" },
  MIDLE_CTGRY_DVC_35: { ko: "머신비전" },
  MIDLE_CTGRY_DVC_36: { ko: "물류기기" },
  MIDLE_CTGRY_DVC_37: { ko: "서보" },
  MIDLE_CTGRY_DVC_38: { ko: "센서" },
  MIDLE_CTGRY_DVC_39: { ko: "인디게이터" },
  MIDLE_CTGRY_DVC_40: { ko: "카메라" },
  MIDLE_CTGRY_DVC_41: { ko: "CNC" },
  MIDLE_CTGRY_DVC_42: { ko: "MC" },
  MIDLE_CTGRY_DVC_43: { ko: "NC" },
  MIDLE_CTGRY_DVC_44: { ko: "TOOL" },
  MIDLE_CTGRY_DVC_45: { ko: "검사장비" },
  MIDLE_CTGRY_DVC_46: { ko: "검출기" },
  MIDLE_CTGRY_DVC_47: { ko: "기타" },
  MIDLE_CTGRY_DVC_48: { ko: "분리기" },
  MIDLE_CTGRY_DVC_49: { ko: "사출기" },
  MIDLE_CTGRY_DVC_50: { ko: "연마기" },
  MIDLE_CTGRY_DVC_51: { ko: "오븐기" },
  MIDLE_CTGRY_DVC_52: { ko: "용접기" },
  MIDLE_CTGRY_DVC_53: { ko: "전용기" },
  MIDLE_CTGRY_DVC_54: { ko: "측정기" },
  MIDLE_CTGRY_DVC_55: { ko: "컷팅기" },
  MIDLE_CTGRY_DVC_56: { ko: "포장기" },
  MIDLE_CTGRY_DVC_57: { ko: "기타" },
  MIDLE_CTGRY_DVC_58: { ko: "인건비" },
};

const RECOMMEND_STATUS = {
  RECOMMEND_STATUS_01: "미추천",
  RECOMMEND_STATUS_02: "추천요청",
  RECOMMEND_STATUS_03: "추천중",
  RECOMMEND_STATUS_04: "추천완료",
};
const MMBRS_INFLW = {
  MMBRS_INFLW_01: "반월시화 디지털전환(DX) 얼라이언스",
  MMBRS_INFLW_02: "인천 테크노파크",
  MMBRS_INFLW_03: "경기대진 테크노파크",
  MMBRS_INFLW_04: "서울 테크노파크",
  MMBRS_INFLW_05: "반월시화 스마트산단",
  MMBRS_INFLW_06: "인천남동 스마트산단",
  MMBRS_INFLW_07: "상생사업",
};

const LEVEL_STAND_VALUE = {
  LARGE_EVAL_ITEM_01: 25, //Leadership and Strategy
  LARGE_EVAL_ITEM_02: 10, //Product Development
  LARGE_EVAL_ITEM_03: 15, //Production Plan
  LARGE_EVAL_ITEM_04: 19, //Process Control
  LARGE_EVAL_ITEM_05: 22, //Quality Control
  LARGE_EVAL_ITEM_06: 26, //Facility Management
  LARGE_EVAL_ITEM_07: 30, //Logistics
  LARGE_EVAL_ITEM_08: 33, //Information Systems
  LARGE_EVAL_ITEM_09: 39, //Equipment Automation
  LARGE_EVAL_ITEM_10: 46, //Performance
};

const IMPROVEMENT_TASKS = {
  REAL_TIME_COLLECTION_AND_MANAGEMENT_OF_PRODUCTION_PERFORMANCE: "생산실적 실시간 수집 관리",
  LOT_MANUFACTURING_HISTORY_MANAGEMENT_FROM_RAW_MATERIALS_TO_PRODUCTS:
    "원자재에서 제품까지 LOT제조 이력 관리",
  REAL_TIME_PROCESS_PROGRESS_MONITORING: "실시간 공정 진행 현황 모니터링",
  SMARTIZATION_OF_THE_COLOR_MIXING_PROCESS_IN_THE_MIXING_ROOM: "배합실 색상 배합 공정 스마트화",
  QUALITY_DATA_COLLECTION_AND_HISTORY_MANAGEMENT: "품질 데이터 수집 및 이력관리",
  REAL_TIME_FACILITY_OPERATION_RATE_MANAGEMENT: "실시간 설비 가동율 관리",
  FACILITY_INSPECTION_AND_HISTORY_MANAGEMENT: "설비 점검 및 이력관리",
  MOLD_HISTORY_MANAGEMENT: "금형 이력 관리",
  BUILDING_A_WAREHOUSE_MANAGEMENT_SYSTEM: "창고 관리 시스템 (WMS)구축",
  ESTABLISH_KEY_INDICATOR_MONITORING: "핵심 지표 모니터링 구축",
  VISION: "비전",
  MID_TO_LONG_TERM_ROADMAP: "중장기 로드맵",
  GOAL_KPI: "목표 KPI",
};

export {
  PAGINATION_LIMIT,
  PAGINATION_LIMIT_GUIDE,
  TABLES,
  ROLES,
  MENU,
  GROUP_INFOS,
  NOTIFICATION_TYPES,
  USER_STATUS,
  USER_COMPANY_STATUS,
  USER_CERTIFICATION_STATUS,
  MENTORING_STATUS,
  professional_industry1,
  specialization1,
  sectors,
  main_application_industry1,
  main_activity_area1,
  main_solution1,
  INFLOW_CLASSFICATION,
  UPLOAD_DIRECTORIES,
  government_type,
  factory_scale,
  government_location,
  subsidy_standard,
  REGEXP,
  STATUS,
  SMALL_STATUS,
  SITUATION,
  USER_TYPE,
  FAQ_TYPE,
  USER_ROLE,
  QUESTION_TYPE,
  DIAGNOSIS_DIAPLAY_TYPE,
  admin_company,
  FILE_TYPES,
  SET_DORMANT_DURATION,
  WARN_DORMANT_DURATION,
  MENTOR_TYPES,
  CERTIFICATION_STATUS,
  BUSINESS_CLASSFICATION,
  MENTORING_STATUS_MAP,
  SEPARATOR,
  DEVICE_LARGE_CATEGORY_CODE,
  DEVICE_MIDDLE_CATEGORY_CODE,
  USER_TYPE_BY_NAME,
  RECOMMEND_STATUS,
  MMBRS_INFLW,
  LEVEL_STAND_VALUE,
  IMPROVEMENT_TASKS,
};
