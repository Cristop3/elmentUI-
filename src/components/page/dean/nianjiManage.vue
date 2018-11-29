<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>年级管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.name1" placeholder="年级" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-cascader style='width:300px' v-model="form.name2" expand-trigger="hover" :change-on-select="true" :options="regionOptions" :show-all-levels="true"
                    clearable placeholder="学校"></el-cascader>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click='dlgNew = true'>新建</el-button>

                <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                    导入
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>模版下载</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="年级" align="center">
                </el-table-column>
                <!--<el-table-column prop="F_B" label="隶属校区" align="center">
                </el-table-column>
                <el-table-column prop="F_E" label="隶属大区" align="center">
                </el-table-column>-->
                <el-table-column prop="F_BE" label="学校" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="年级组长" align="center">
                </el-table-column>
                <el-table-column prop="F_F" label="描述" align="center">
                </el-table-column>
                <!-- <el-table-column prop="F_D" label="最近修改时间" align="center">
                </el-table-column> -->
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button>
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row style='margin-top:150px'>
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <!-- 新建班级 -->
        <el-dialog width='35%' title="新建年级" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="年级">
                    <el-input placeholder="年级" v-model='form.name6' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学校">
                    <el-cascader style='width:100%' v-model="form.name10" expand-trigger="hover" :change-on-select="true" :options="regionOptions" :show-all-levels="true"
                        clearable placeholder="学校"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="年级组长">
                     <el-select clearable placeholder="年级组长"  v-model='form.name9' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input placeholder="描述" type='textarea' rows='4' v-model='form.name8' clearable></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='35%' title="修改年级" :visible.sync="dlgEdit">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="年级">
                    <el-input placeholder="年级" v-model='form.name11' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学校">
                    <el-cascader style='width:100%' v-model="form.name12" expand-trigger="hover" :change-on-select="true" :options="regionOptions" :show-all-levels="true"
                        clearable placeholder="学校"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="年级组长">
                     <el-select clearable placeholder="年级组长"  v-model='form.name13' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input placeholder="描述" type='textarea' rows='4' v-model='form.name14' clearable></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit = false" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='30%' title="查看班级" :visible.sync="dlgView">
            <el-form ref="nameForm" label-width="120px">
                <el-form-item prop="username" label="班级：">
                    三年级
                </el-form-item>
                <el-form-item prop="username" label="学校：">
                    四川/成都东区天立校区
                </el-form-item>
                <el-form-item prop="username" label="年级组长：">
                     张三
                </el-form-item>
                <el-form-item prop="username" label="描述：">
                    创建三年级
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 上传附件 -->
        <el-dialog width='32%' title='导入' :visible.sync='dlgUpload'>
            <el-form :model="psdForm" status-icon ref="psdForm" class="demo">
                <el-form-item>
                    <el-upload id='banjiManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelDlg('psdForm','dlgUpload')" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tableData: [{
                        F_A: '三年级',
                        F_B: '成都东区天立校区',
                        F_C: '张三',
                        F_D: '2018-02-12',
                        F_E: '四川大区',
                        F_F:'创建三年级',
                        F_BE:'成都东区天立校区'
                    },
                    {
                        F_A: '五年级',
                        F_B: '重庆渝中区天立校区',
                        F_C: '李四',
                        F_D: '2017-09-19',
                        F_E: '重庆大区',
                        F_F:'创建五年级',
                        F_BE:'重庆渝中天立校区'
                    }
                ],
                options: [{
                    value: '1',
                    label: '张三'
                }, {
                    value: '2',
                    label: '李四'
                }, {
                    value: '3',
                    label: '王二'
                }],
                psdForm: {
                    pass: '',
                    checkPass: ''
                },
                dlgNew: false,
                dlgEdit: false,
                dlgUpload: false,
                dlgView: false,
                fullscreenLoading: false,
                currentPage: 1,
                time: [],
                form: {
                    type: '',
                    options: [],
                    name1: '',
                    name2: [],
                    name3: [],
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: [],
                    name10: [],
                    name11: '三年级',
                    name12: ['四川','成都学区','成都东区天立学校'],
                    name13: '张三',
                    name14: '创建三年级',
                },
                regionOptions: [{
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
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
        }
    }

</script>
<style>
    #banjiManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width:362px;
    }

    .demo {
        margin: 0 auto;
    }

    #banjiManage .el-upload {
        display: block;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
