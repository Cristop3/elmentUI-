<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/scoreManage' }">成绩管理</el-breadcrumb-item>
                <el-breadcrumb-item>成绩详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="serach.name" placeholder="姓名" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                <el-button type="primary">导出</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_6" label="学号" align="center">
                </el-table-column>
                <el-table-column prop="F_1" label="姓名" align="center">
                </el-table-column>
                <el-table-column prop="F_2" label="班级" align="center">
                </el-table-column>
                <el-table-column prop="F_3" label="学期" align="center">
                </el-table-column>
                <el-table-column prop="F_4" label="学科" align="center">
                </el-table-column>
                <el-table-column prop="F_5" label="成绩" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <!-- <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button> -->
                        <el-button @click='dlgEdit = true' type="text" size="small">
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

        <!-- 新建成绩 -->
        <el-dialog width='30%' title="新建学生成绩" :visible.sync="dlgNew">
            <el-form ref="form" label-width="100px">
                <el-form-item prop="username" label="姓名">
                    <el-input v-model='formnew.v1' placeholder="姓名" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="班级">
                    <el-input v-model='formnew.v2' placeholder="班级" :disabled="true" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学期">
                    <el-select v-model="formnew.v3" placeholder="学期" :disabled="true" clearable style="width:100%;">
                        <el-option label="18年上学期" value="1"></el-option>
                        <el-option label="18年下学期" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="学科">
                    <el-select v-model="formnew.v4" placeholder="学科" :disabled="true" clearable style="width:100%;">
                        <el-option label="语文" value="1"></el-option>
                        <el-option label="数学" value="2"></el-option>
                        <el-option label="英语" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="成绩">
                    <el-input v-model='formnew.v5' placeholder="成绩" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgEdit = false" type='primary' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改成绩 -->
        <el-dialog width='30%' title="修改学生成绩" :visible.sync="dlgEdit">
            <el-form ref="form" label-width="100px">
                <el-form-item prop="username" label="姓名">
                    <el-input v-model='formedit.v1' placeholder="姓名" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="班级">
                    <el-input v-model='formedit.v2' placeholder="班级" :disabled="true" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学期">
                    <el-select v-model="formedit.v3" placeholder="学期" :disabled="true" clearable style="width:100%;">
                        <el-option label="18年上学期" value="1"></el-option>
                        <el-option label="18年下学期" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="学科">
                    <el-input v-model='formedit.v4' placeholder="学科" :disabled="true" clearable></el-input>
                </el-form-item>
                <el-form-item label="成绩">
                    <el-input v-model='formedit.v5' placeholder="成绩" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgEdit = false" type='primary' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='30%' title="查看学生成绩" :visible.sync="dlgView">
           <el-form ref="form" label-width="100px">
                <el-form-item prop="username" label="姓名：">
                    张三
                </el-form-item>
                <el-form-item prop="username" label="班级：">
                    三年1班
                </el-form-item>
                <el-form-item prop="username" label="学期：">
                    18年上学期
                </el-form-item>
                <el-form-item prop="username" label="学科：">
                    数学
                </el-form-item>
                <el-form-item label="成绩：">
                    98
                </el-form-item>
            </el-form>
        </el-dialog>



    </div>
</template>



<script>
    export default {
        data: function () {
            return {
                tableData: [{
                        F_1:'张三',
                        F_2:'三年级1班',
                        F_3:'18年上学期',
                        F_4:'数学',
                        F_5:'98',
                        F_6:'stu001',
                    },
                    {
                        F_1:'李四',
                        F_2:'三年级1班',
                        F_3:'18年上学期',
                        F_4:'数学',
                        F_5:'68',
                        F_6:'stu002',
                    },
                    {
                        F_1:'王二',
                        F_2:'三年级1班',
                        F_3:'18年上学期',
                        F_4:'数学',
                        F_5:'77',
                        F_6:'stu003',
                    }
                ],
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区',
                        children: [{
                            value: '成都天立学校',
                            label: '成都天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '成都东区天立学校',
                            label: '成都东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }, {
                        value: '泸州学区',
                        label: '泸州学区',
                        children: [{
                            value: '泸州天立学校',
                            label: '泸州天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '泸州东区天立学校',
                            label: '泸州东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区',
                        children: [{
                            value: '宜宾天立学校',
                            label: '宜宾天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '宜宾东区天立学校',
                            label: '宜宾东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
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
                            label: '湘潭天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '湘潭东区天立学校',
                            label: '湘潭东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }]
                }],
                dlgNew: false,
                dlgEdit: false,
                dlgView: false,
                currentPage: 1,
                fullscreenLoading: false,
                formnew:{
                    v1:'',
                    v2:'三年级1班',
                    v3:'1',
                    v4:'数学',
                    v5:'',
                    v6:'',
                },
                formedit:{
                    v1:'张三',
                    v2:'三年级1班',
                    v3:'1',
                    v4:'数学',
                    v5:'98',
                    v6:'', 
                },
                serach:{
                    name:''
                }
            }
        },
        methods: {
            changeArea() {

            }
        }
    }

</script>
<style scoped>
    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
