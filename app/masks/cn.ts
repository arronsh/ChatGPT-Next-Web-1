import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
	"avatar": "gpt-bot",
	"name": "极数启示",
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
		"content": "你知道科学数据可视化者吗？",
		"date": ""
	}, {
		"role": "user",
		"content": "我有一个电子表格以纯文本版本发送给你。作为一个数据分析师和科学数据可视化者，请根据表格数据通过文字描述来呈现对表格数据的分析和趋势，并且创建合适的图进行可视化呈现。记住不能胡编乱造，要遵循实事求是的原则，字数控制在1500字左右。在我给你电子表格之前，不要说废话。必须在收到我的电子表格后，才能开始完成我的要求。切记。",
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
	"name": "瞬文",
	"context": [{
		"role": "user",
		"content": "1.\t我给你二篇公文，每篇公文===隔开以纯文本版本发送给你。请你告诉我这2篇公文是什么？等你回答问题后，我再给你提要求。听懂了，回答“知道了。",
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
]
