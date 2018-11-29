<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item :to='{path:"/classManage"}'>课程表管理</el-breadcrumb-item>
                <el-breadcrumb-item>课程表详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
        <div style='margin-bottom:10px;text-align:right'>
                <el-button type="primary" @click="dlgNew = false" size="small">保存</el-button>
                </div>
            <classCard :classData="classData" :edit="classCardEdit"></classCard>
        </div>

        

    </div>
</template>

<script>
    import classCard from "../../../components/common/classCard.vue";
    export default {
        components: {
            classCard
        },
        data: function () {
            return {
                dlgNew: false,
                regionOptions: [{
                    value: '语文',
                    label: '语文',
                    children: [{
                        value: '张三',
                        label: '张三'
                    }, {
                        value: '李四',
                        label: '李四'
                    }, {
                        value: '宋五',
                        label: '宋五'
                    }]
                }, {
                    value: '数学',
                    label: '数学',
                    children: [{
                        value: '慕容',
                        label: '慕容'
                    }, {
                        value: '南宫',
                        label: '南宫'
                    }]
                }, {
                    value: '英语',
                    label: '英语',
                    children: [{
                        value: '钱五',
                        label: '钱五'
                    }, {
                        value: '赵芳',
                        label: '赵芳'
                    }]
                }],
                tableData: [{
                        F_A: '五年级课表',
                        F_B: '五年级二班',
                        F_C: '张三',
                        F_D: '2018-02-12',
                        F_E: '张三',
                        F_F: '18年上学期',
                        F_1:'成都东区天立小学'
                    },
                    {
                        F_A: '六年级课表',
                        F_B: '六年级二班',
                        F_C: '李四',
                        F_D: '2018-05-12',
                        F_E: '张三',
                        F_F: '18年下学期',
                        F_1:'成都东区天立小学'
                    }
                ],
                classData: {
                    weeks: [{
                        id: 1,
                        text: '第一周'
                    }, {
                        id: 2,
                        text: '第二周'
                    }, {
                        id: 3,
                        text: '第三周'
                    }, {
                        id: 4,
                        text: '第四周'
                    }, {
                        id: 5,
                        text: '第五周'
                    }, {
                        id: 6,
                        text: '第六周'
                    }, {
                        id: 7,
                        text: '第七周'
                    }, {
                        id: 8,
                        text: '第八周'
                    }, {
                        id: 9,
                        text: '第九周'
                    }, {
                        id: 10,
                        text: '第十周'
                    }, {
                        id: 11,
                        text: '第十一周'
                    }, {
                        id: 12,
                        text: '第十二周'
                    }, {
                        id: 13,
                        text: '第十三周'
                    }, {
                        id: 14,
                        text: '第十四周'
                    }, {
                        id: 15,
                        text: '第十五周'
                    }, {
                        id: 16,
                        text: '第十六周'
                    }, {
                        id: 17,
                        text: '第十七周'
                    }, {
                        id: 18,
                        text: '第十八周'
                    }, {
                        id: 19,
                        text: '第十九周'
                    }, {
                        id: 20,
                        text: '第二十周'
                    }],
                    one: ['语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)'],
                    two: ['语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)'],
                    three: ['语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)'],
                    four: ['语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)'],
                    five: ['语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)', '英语(宋老师)', '语文(张老师)', '数学(李老师)'],
                },
                classCardEdit: true,
                dlgEdit: false,
                dlgUpload: false,
                dlgView: false,
                fullscreenLoading: false,
                currentPage: 1,
                form: {
                    date1: '',
                    date2: '',
                    type: '',
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: [],
                    name7: '',
                    name8: [],
                    name9: '',
                    name10: '',
                    name11: '',
                    name12: '',
                    name13: '',
                    name14: [],
                },
                startTime: '',
                endTime: '',
                dlgEdit2:false,
                sbOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区',
                        children: [{
                            value: '成都天立学校',
                            label: '成都天立学校'
                        }, {
                            value: '成都东区天立学校',
                            label: '成都东区天立学校'
                        }]
                    }, {
                        value: '泸州学区',
                        label: '泸州学区',
                        children: [{
                            value: '泸州天立学校',
                            label: '泸州天立学校'
                        }, {
                            value: '泸州东区天立学校',
                            label: '泸州东区天立学校'
                        }]
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区',
                        children: [{
                            value: '宜宾天立学校',
                            label: '宜宾天立学校'
                        }, {
                            value: '宜宾东区天立学校',
                            label: '宜宾东区天立学校'
                        }]
                    }]
                }, {
                    value: '湖南',
                    label: '湖南',
                    children: [{
                        value: '湘潭学区',
                        label: '湘潭学区',
                        children: [{
                            value: '湘潭天立学校',
                            label: '湘潭天立学校'
                        }, {
                            value: '湘潭东区天立学校',
                            label: '湘潭东区天立学校'
                        }]
                    }]
                }],
            }
        },
        methods: {

        }
    }

</script>

<style lang="scss" scoped>
 .edit {

        th,
        td {
            text-align: center;
            width: 50px;
        }

        th {
            padding: 10px;
        }

        .weekselect {
            width: 100px;
        }

        input {
            width: 100%;
            height: 100%;
            line-height: 100%;
            text-align: center;
            font-size: 14px;
            padding: 10px 0;
            border: none;
            outline: none;
        }
    }
</style>
