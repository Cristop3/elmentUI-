<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>职位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.name1" placeholder="职位名称" clearable></el-input>
            </div>
             <div class="searchitem">
                <el-select v-model="form.name2" placeholder="适用范围" clearable>
                        <el-option label="集团" value="shanghai"></el-option>
                        <el-option label="校区" value="beijing"></el-option>
                    </el-select>
                
            </div>
            <div class="searchitem">
                <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click="dlgNew = true" >新建</el-button>
                <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                        导入
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>模版下载</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
            </div>
            <el-row>
                <el-table :data="tableData4" style="width: 100%" border center>
                    <el-table-column prop="date" label="职位名称" align='center'>
                    </el-table-column>
                    <el-table-column prop="name" label="适用范围" align='center'>
                    </el-table-column>
                    <el-table-column prop="city" label="关联岗位" align='center'>
                    </el-table-column>
                    <el-table-column label="操作" align='center'>
                        <template slot-scope="scope">
                            <el-button @click='dlgEdit = true' type="text" size="small">
                                修改
                            </el-button>
                            <el-button @click='dlgRelation = true' type="text" size="small">
                                关联
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style='margin-top:150px'>
                
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <el-dialog width='30%' title="查看职位" :show-close='false' :visible.sync="dlgView">
            <el-form label-position="right">
                <el-form-item prop="username" label="职位名称：">
                    财务
                </el-form-item>
                <el-form-item prop="username" label="适用范围：">
                    集团、校区
                </el-form-item>
                <el-form-item prop="username" label="关联岗位：">
                    财务部
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 新建 -->
         <el-dialog width='30%' title='新建职位'  :visible.sync='dlgNew'>
            <el-form status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name4" clearable auto-complete="off" placeholder='名称'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="适用范围">
                    <el-radio-group v-model="form.name5">
                            <el-radio :label="1">集团</el-radio>
                            <el-radio :label="2">学校</el-radio>
                        </el-radio-group>
                </el-form-item>
                <!-- <el-form-item prop="username" label="关联岗位">
                    <el-select style='width:100%' v-model="form.name6" placeholder="关联岗位" multiple collapse-tags clearable>
                        <el-option label="财务部" value="shanghai"></el-option>
                        <el-option label="教师" value="beijing"></el-option>
                    </el-select>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgNew')" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='30%' title='修改职位'  :visible.sync='dlgEdit'>
            <el-form  status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name7" clearable auto-complete="off" placeholder='名称'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="适用范围">
                    <el-radio-group v-model="form.name8">
                            <el-radio :label="1">集团</el-radio>
                            <el-radio :label="2">学校</el-radio>
                        </el-radio-group>
                </el-form-item>
                <!-- <el-form-item prop="username" label="关联岗位">
                    <el-select style='width:100%' v-model="form.name9" placeholder="关联岗位" multiple collapse-tags  clearable>
                        <el-option label="财务部" value="1"></el-option>
                        <el-option label="教师" value="2"></el-option>
                    </el-select>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgEdit')" size="small">修改</el-button>
            </div>
        </el-dialog>

        <el-dialog width='32%' title='导入' :show-close='true' :visible.sync='dlgUpload'>
            <el-form  status-icon  class="demo">
                <el-form-item>
                    <el-upload id='jobManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelDlg('psdForm','dlgUpload')" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>

        <!-- 关联岗位 -->
        <el-dialog width='550px' title='关联岗位'  :visible.sync='dlgRelation'>
            <el-transfer :titles="['岗位', '配置岗位']" v-model="value1" :data="data"></el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgRelation')" size="small">关联</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function () {
            const generateData = _ => {
                const data = []
                const data2 = ['运营岗', '教师岗', '财务岗', '招生岗'];
                for (let i = 0; i < data2.length; i++) {
                    data.push({
                        key: i,
                        label: data2[i]
                    });
                }
                return data;
            };
            return {
                value1:[],
                data: generateData(),
                dlgRelation:false,
                fullscreenLoading: false,
                dlgView: false,
                dlgEdit: false,
                dlgUpload: false,
                dlgNew:false,
                form: {
                    name1:'',
                    name2:'',
                    name3:'',
                    name4:'',
                    name5:'',
                    name6:[],
                    name7:'高级教师',
                    name8:1,
                    name9:['1','2']
                },
                currentPage: 1,
                tableData4: [{
                    date: '年级组长',
                    name: '学校',
                    city: '财务部',
                    address: '2:4:1',
                    zip: 200333
                }, {
                    date: '高级教师',
                    name: '集团',
                    city: '教师',
                    address: '1:1:3',
                    zip: 200333
                }]
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
                this.$refs[formName].resetFields();
            },
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
            }
        }
    }

</script>

<style>
    #jobManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width:362px;
    }

    .demo {
        margin: 0 auto;
    }

    #jobManage .el-upload {
        display: block;
    }
     .searchitem{
        display:inline-block;
        margin-bottom:10px;
    }

</style>
