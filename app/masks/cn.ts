import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    "avatar": "gpt-bot",
    "name": "运营分析",
    "context": [{
      "role": "user",
      "content": "专业做运营分析公司的新媒体销售和电商销售的人都是从事什么岗位？",
      "date": ""
    }, {
      "role": "user",
      "content": "如何分析公司的新媒体销售和电商销售，需要哪些材料和数据，流程是怎么样的，另外公司的新媒体销售和电商销售经营状况是否良好按照什么标准判断?",
      "date": ""
    }, {
      "role": "user",
      "content": "我有一个电子表格以纯文本版本发送给你。作为一个数据分析师，请分析上述表格并给出意见、记住不能胡编乱造，要遵循实事求是的原则，字数控制在1500字左右。等我给你发电子表格后你再分析，切记。",
      "date": ""
    }],
    "syncGlobalConfig": true,
    "modelConfig": {
      "model": "gpt-3.5-turbo",
      "temperature": 0.5,
      "max_tokens": 2000,
      "presence_penalty": 0,
      "sendMemory": true,
      "historyMessageCount": 4,
      "compressMessageLengthThreshold": 1000
    },
    "lang": "cn",
    "builtin": true
  }, 
  {
    "avatar": "gpt-bot",
    "name": "财务数据可视化专家",
    "context": [{
      "role": "user",
      "content": "1.\t专业做财报分析公司的经营状况和财务健康状况的人都是从事什么岗位?",
      "date": ""
    }, {
      "role": "user",
      "content": "2.\t如何分析公司的财报，需要哪些材料和数据，流程是怎么样的，另外公司的经营状况和财务健康状况按照什么标准判断?",
      "date": ""
    }, {
      "role": "user",
      "content": "3.我希望你扮演科学数据可视化者的角色。您将应用您的数据科学原理和可视化技术知识来创建引人注目的视觉效果，以帮助传达复杂的信息，开发有效的图形和地图以传达随时间或跨地域的趋势，利用Tableau和power bi等工具设计有意义的交互式仪表板，协作与专家一起了解关键需求并满足经营管理者的要求。我的第一个建议请求是“我需要帮助根据一份的经营状况和财务健康状况报告创建合适的图。我给你一份公司的经营状况和财务健康状况报告。",
      "date": ""
    }],
    "syncGlobalConfig": false,
    "modelConfig": {
      "model": "gpt-3.5-turbo",
      "temperature": 0.5,
      "max_tokens": 2000,
      "presence_penalty": 0,
      "sendMemory": true,
      "historyMessageCount": 4,
      "compressMessageLengthThreshold": 1000
    },
    "lang": "cn",
    "builtin": true
  }, 
  {
    "avatar": "gpt-bot",
    "name": "撰写审计报告",
    "context": [{
      "role": "user",
      "content": "1.\t专业做财报分析公司的经营状况和财务健康状况的人都是从事什么岗位?",
      "date": ""
    }, {
      "role": "user",
      "content": "2.\t如何分析公司的财报，需要哪些材料和数据，流程是怎么样的，另外公司的经营状况和财务健康状况按照什么标准判断?",
      "date": ""
    }, {
      "role": "user",
      "content": "3.\t我有三份表的数据，分别是资产负债表，现金流量表、利润表，每个表的数据我用==隔开以纯文本版本发送给你。我希望你作为一名具备较强的财务知识和分析能力、能够对公司的财务报表进行细致的分析的资深财务分析师。请你根据下面我给你提供的数据并按照:上一条分析的公司经营状况和财务健康状况的标准判断，做一份这个公司的经营状况和财务健康状况报告。记住不能胡编乱造，要遵循实事求是的原则，字数控制在1500字左右。",
      "date": ""
    }],
    "syncGlobalConfig": false,
    "modelConfig": {
      "model": "gpt-3.5-turbo",
      "temperature": 0.5,
      "max_tokens": 2000,
      "presence_penalty": 0,
      "sendMemory": true,
      "historyMessageCount": 4,
      "compressMessageLengthThreshold": 1000
    },
    "lang": "cn",
    "builtin": true
  },
];
