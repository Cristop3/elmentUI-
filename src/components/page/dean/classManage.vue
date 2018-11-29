<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>课程表管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.name7" placeholder="课程表名称" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-cascader style='width:300px' v-model="form.name8" expand-trigger="hover" :change-on-select="true"
                    :options="sbOptions" :show-all-levels="true" clearable placeholder="学校"></el-cascader>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                    导入
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>模版下载</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="课程表名称" align="center">
                </el-table-column>
                <el-table-column prop="F_F" label="学期" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="班级" align="center">
                </el-table-column>
                <el-table-column prop="F_1" label="学校" align="center">
                </el-table-column>
                <!--<el-table-column prop="F_C" label="最近修改人" align="center">
                    </el-table-column>
                    <el-table-column prop="F_D" label="最近修改时间" align="center">
                    </el-table-column>-->
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button>
                        <el-button @click='edit' type="text" size="small">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row style='margin-top:150px'>
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <!-- 修改课表 -->
        <el-dialog width='70%' title="修改课表" :visible.sync="dlgEdit">
            <!--<div style='margin-bottom:10px;'>
                <el-button type="primary" @click="dlgNew = true" size="small">新建</el-button>
                <el-button type="primary" @click="dlgEdit2 = true" size="small">修改</el-button>
            </div>-->
            <div style="margin:auto;">
                <classCard :classData="classData" :edit="classCardEdit"></classCard>
            </div>
            <!--<div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit = false"  size="small">保存</el-button>
            </div>-->
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='70%' title="查看课表" :visible.sync="dlgView">
            <div style="margin:auto;">
                <classCard :classData="classData"></classCard>
            </div>

        </el-dialog>

        <!-- 上传附件 -->
        <el-dialog width='32%' title='导入' :visible.sync='dlgUpload'>
            <el-form status-icon class="demo">
                <el-form-item>
                    <el-upload id='classManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgUpload = false" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>

        <!-- 新建课表节数 -->
        <el-dialog width='35%' title="新建课程" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="类型">
                    <el-select style='width:100%' v-model="form.name1" placeholder="类型" clearable>
                        <el-option label="早自习" value="1"></el-option>
                        <el-option label="上午" value="2"></el-option>
                        <el-option label="下午" value="3"></el-option>
                        <el-option label="晚上" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="节数">
                    <el-input placeholder="节数" v-model='form.name2' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="课名/老师">
                    <el-cascader style='width:100%' expand-trigger="hover" :change-on-select="true" :options="regionOptions"
                        :show-all-levels="true" clearable placeholder="课名/老师"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="时间">
                <div style='display:inline-block;width:160px'>
                    <el-time-select style='width:100%' placeholder="起始时间" v-model="startTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }">
                    </el-time-select>
                    </div>
                    <div style='display:inline-block;width:160px'>
                    <el-time-select style='width:100%' placeholder="结束时间" v-model="endTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                        }">
                    </el-time-select>
                    </div>
                </el-form-item>
                <el-form-item prop="username" label="地点">
                    <el-input placeholder="地点" v-model='form.name5' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="星期">
                    <el-select style='width:100%' multiple v-model="form.name6" placeholder="星期" clearable>
                        <el-option label="周一" value="1"></el-option>
                        <el-option label="周二" value="2"></el-option>
                        <el-option label="周三" value="3"></el-option>
                        <el-option label="周四" value="4"></el-option>
                        <el-option label="周五" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改课表节数 -->
        <el-dialog width='35%' title="修改课程" :visible.sync="dlgEdit2">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="类型">
                    <el-select style='width:100%' v-model="form.name11" placeholder="类型" clearable>
                        <el-option label="早自习" value="1"></el-option>
                        <el-option label="上午" value="2"></el-option>
                        <el-option label="下午" value="3"></el-option>
                        <el-option label="晚上" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="节数">
                    <el-select style='width:100%' v-model="form.name12" placeholder="节数" clearable>
                        <el-option label="第一节" value="1"></el-option>
                        <el-option label="第二节" value="2"></el-option>
                        <el-option label="第三节" value="3"></el-option>
                        <el-option label="第四节" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="课名/老师">
                    <el-cascader style='width:100%' expand-trigger="hover" :change-on-select="true" :options="regionOptions"
                        :show-all-levels="true" clearable placeholder="课名/老师"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="时间">
                <div style='display:inline-block;width:160px'>
                    <el-time-select style='width:100%' placeholder="起始时间" v-model="startTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }">
                    </el-time-select>
                    </div>
                    <div style='display:inline-block;width:160px'>
                    <el-time-select style='width:100%' placeholder="结束时间" v-model="endTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                        }">
                    </el-time-select>
                    </div>
                </el-form-item>
                <el-form-item prop="username" label="地点">
                    <el-input placeholder="地点" v-model='form.name13' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="星期">
                    <el-select style='width:100%' multiple v-model="form.name14" placeholder="星期" clearable>
                        <el-option label="周一" value="1"></el-option>
                        <el-option label="周二" value="2"></el-option>
                        <el-option label="周三" value="3"></el-option>
                        <el-option label="周四" value="4"></el-option>
                        <el-option label="周五" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit2 = false" size="small">修改</el-button>
            </div>
        </el-dialog>

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
            edit(){
                this.$router.push('/classDetails')
            }
        }
    }

</script>
<style>
    #classManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width: 362px;
    }

    .demo {
        margin: 0 auto;
    }

    #classManage .el-upload {
        display: block;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
