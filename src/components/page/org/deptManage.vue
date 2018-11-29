<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>岗位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.name1" placeholder="岗位名称" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-select v-model="form.name2" placeholder="使用范围" clearable>
                    <el-option label="集团" value="shanghai"></el-option>
                    <el-option label="校区" value="beijing"></el-option>
                </el-select>
            </div>
            <div class="searchitem">
                <el-select v-model="form.name3" placeholder="岗位类别" clearable>
                    <el-option label="技术岗" value="shanghai"></el-option>
                    <el-option label="专业岗" value="beijing"></el-option>
                </el-select>
                <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click="dlgNew = true">新建</el-button>
                <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                    导入
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>模版下载</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>


            <el-row>
                <el-table :data="tableData4" style="width: 100%" border center>
                    <el-table-column prop="date" label="岗位名称" align='center'>
                    </el-table-column>
                    <el-table-column prop="name" label="适用范围" align='center'>
                    </el-table-column>
                    <el-table-column prop="province" label="岗位类别" align='center'>
                    </el-table-column>
                    <el-table-column prop="city" label="等级" align='center'>
                    </el-table-column>
                    <el-table-column prop="address" label="岗位比例" align='center'>
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

        <!-- 查看 -->
        <el-dialog width='30%' title="查看岗位"  :visible.sync="dlgView">
            <el-form :model='form' ref="form" label-position="right">
                <el-form-item prop="username" label="岗位名称：">
                    财务
                </el-form-item>
                <el-form-item prop="username" label="适用范围：">
                    集团、校区
                </el-form-item>
                <el-form-item prop="username" label="岗位类别：">
                    技术岗
                </el-form-item>
                <el-form-item prop="username" label="等级：">
                    五级
                </el-form-item>
                <el-form-item prop="username" label="人员配比：">
                    2:4:1
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 新建 -->
        <el-dialog width='30%' title='新建岗位'  :visible.sync='dlgNew'>
            <el-form :model="form" status-icon ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name4" auto-complete="off" clearable placeholder='名称'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="适用范围">
                    <el-radio-group v-model="form.name5">
                            <el-radio :label="1">集团</el-radio>
                            <el-radio :label="2">学校</el-radio>
                        </el-radio-group>
                </el-form-item>
                <el-form-item prop="username" label="类别">
                    <el-select style='width:100%' v-model="form.name6" placeholder="类别" clearable>
                        <el-option label="技术岗" value="1"></el-option>
                        <el-option label="专业岗" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="等级">
                    <el-select v-model="form.name7" style='width:100%' placeholder="等级" clearable>
                        <el-option label="一级" value="1"></el-option>
                        <el-option label="二级" value="2"></el-option>
                        <el-option label="三级" value="3"></el-option>
                        <el-option label="四级" value="4"></el-option>
                        <el-option label="五级" value="5"></el-option>
                        <el-option label="六级" value="6"></el-option>
                        <el-option label="七级及以下" value="7"></el-option>
                        <el-option label="实习" value="8"></el-option>
                        <el-option label="临时" value="9"></el-option>
                        <el-option label="退休" value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="人员配比">
                    <el-input v-model="form.name8" auto-complete="off" clearable placeholder='人员配比'></el-input>
                </el-form-item>
                <!-- <el-form-item label="关联设定">
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlgNew')" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改 -->
        <el-dialog width='30%' title='修改岗位'  :visible.sync='dlgEdit'>
            <el-form :model="form" status-icon ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="名称">
                    <el-input v-model="form.name13" auto-complete="off" clearable placeholder='岗位'></el-input>
                </el-form-item>
                <el-form-item label="适用范围">
                    <el-radio-group v-model="form.name9">
                        <el-radio :label="3">集团</el-radio>
                        <el-radio :label="4">学校</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="类别：">
                    <el-select style='width:100%' v-model="form.name10" placeholder="类别" clearable>
                        <el-option label="技术岗" value="1"></el-option>
                        <el-option label="专业岗" value="2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="等级">
                    <el-select style='width:100%' v-model="form.name11" placeholder="等级" clearable>
                        <el-option label="一级" value="1"></el-option>
                        <el-option label="二级" value="2"></el-option>
                        <el-option label="三级" value="3"></el-option>
                        <el-option label="四级" value="4"></el-option>
                        <el-option label="五级" value="5"></el-option>
                        <el-option label="六级" value="6"></el-option>
                        <el-option label="七级及以下" value="7"></el-option>
                        <el-option label="实习" value="8"></el-option>
                        <el-option label="临时" value="9"></el-option>
                        <el-option label="退休" value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="人员配比">
                    <el-input v-model="form.name12" auto-complete="off" clearable placeholder='人员配比'></el-input>
                </el-form-item>
                <!-- <el-form-item label="关联设定">
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlgEdit')" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 导入 -->
        <el-dialog width='32%' title='导入' :show-close='true' :visible.sync='dlgUpload'>
            <el-form :model="form" status-icon ref="form" class="demo">
                <el-form-item>
                    <el-upload id='deptManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type='info' @click="cancelDlg('form','dlgUpload')" size="small">取 消</el-button>
            </div>
        </el-dialog>

        <!-- 关联 -->
        <el-dialog width='550px' title='关联人员'  :visible.sync='dlgRelation'>
            <el-transfer :titles="['人员', '配置人员']" v-model="value1" :data="data"></el-transfer>
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
                const data2 = ['张三', '李四', '王二', '赵武'];
                for (let i = 0; i < data2.length; i++) {
                    data.push({
                        key: i,
                        label: data2[i]
                    });
                }
                return data;
            };
            return {
                fullscreenLoading: false,
                dlgView: false,
                dlgEdit: false,
                dlgUpload: false,
                dlgNew: false,
                dlgRelation: false,
                value1:[],
                form: {
                    name: '',
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: 1,
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: 4,
                    name10: '1',
                    name11: '5',
                    name12: '2:4:1',
                    name13: '财务',
                },
                currentPage: 1,
                tableData4: [{
                    date: '财务',
                    name: '学校',
                    province: '技术岗',
                    city: '五级',
                    address: '2:4:1',
                    zip: 200333
                }, {
                    date: '教师',
                    name: '集团',
                    province: '专业岗',
                    city: '两级',
                    address: '1:1:3',
                    zip: 200333
                }],
                data: generateData()
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
            },
            deletebtn(index, row) {
                this.$confirm('此操作将删除该条记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            onFocus() {
                alert(1)
            }
        }
    }

</script>

<style>
    #deptManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width:362px;
    }

    .demo {
        margin: 0 auto;
    }

    #deptManage .el-upload {
        display: block;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
