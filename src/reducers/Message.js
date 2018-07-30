import { ADD_ITEM } from '../const/ActionTypes';
const img1=require('../source/人.png');
const initialMessage={
        dataSource : [{
            key: '1',
            banji: '高级班',
            status: "进行中",
            time: '2017-04-20',
            teacher: '小白老师',
            shangkelv: '3/21',
            tijiaolv:'67.98%',
            dianping:'87.98%',
            dakalv:'3/21',
            manyidu:'90.14%'
            }, {
            key: '2',
            banji: '进阶班',
            status: "进行中",
            time: '2017-04-21',
            teacher: '小白老师',
            shangkelv: '5/21',
            tijiaolv:'76.98%',
            dianping:'31.98%',
            dakalv:'5/21',
            manyidu:'98.14%'
            },{
            key: '3',
            banji: '提高班',
            status: "进行中",
            time: '2017-04-22',
            teacher: '小白老师',
            shangkelv: '13/21',
            tijiaolv:'13.98%',
            dianping:'21.98%',
            dakalv:'13/21',
            manyidu:'88.14%'
            },{
            key: '4',
            banji: '入门班',
            status: "进行中",
            time: '2017-04-23',
            teacher: '小白老师',
            shangkelv: '20/21',
            tijiaolv:'98.45%',
            dianping:'98.67%',
            dakalv:'20/21',
            manyidu:'30.14%'
            },{
            key: '5',
            banji: '体验班',
            status: "已结束",
            time: '2017-04-24',
            teacher: '小白老师',
            shangkelv: '21/21',
            tijiaolv:'31.54%',
            dianping:'78.76%',
            dakalv:'21/21',
            manyidu:'94.10%'
            }],

        columns : [{
            title: '班级',
            dataIndex: 'banji',
            key: 'banji',
            }, {
            title: '课程状态',
            dataIndex: 'status',
            key: 'status',
            }, {
            title: '开课时间',
            dataIndex: 'time',
            key: 'time',
            },{
            title: '老师',
            dataIndex: 'teacher',
            key: 'teacher',
            }, {
            title: '上课率',
            dataIndex: 'shangkelv',
            key: 'shangkelv',
            }, {
            title: '作业提交率',
            dataIndex: 'tijiaolv',
            key: 'tijiaolv',
            },{
            title: '被点评情况',
            dataIndex: 'dianping',
            key: 'dianping',
            }, {
            title: '打卡率',
            dataIndex: 'dakalv',
            key: 'dakalv',
            }, {
            title: '满意度',
            dataIndex: 'manyidu',
            key: 'manyidu',
            }]
}
export default function MessageList(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
       return state;
    }
    default:
    return state;
  }
}