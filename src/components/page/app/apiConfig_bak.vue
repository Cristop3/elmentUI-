<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 应用管理</el-breadcrumb-item>
                <el-breadcrumb-item>应用接口配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="4" style="margin-bottom:20px">
                <el-col :span="4">
                    <el-input v-model="form.name6"  placeholder="应用范围名称" clearable></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                </el-col>
                <!--
                <el-col :span="18" style="text-align:right">
                    <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                </el-col>-->
            </el-row>
            <zk-table index-text="#" :data="data2" :isFold='false' :showIndex='true' :tree-type="true" :columns="columns" :selection-type="true" :expand-type="false">
                <template slot="actions" slot-scope="scope">
                    <el-button v-if='scope.row.children' type="text" @click="dlgNew =true">添加接口</el-button>
                    <el-button v-else  type="text" @click="dlgEdit=true">修改</el-button>
                </template>
            </zk-table>
            <el-row style='margin-top:150px'>
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <!-- 新增应用 -->
        <el-dialog width='35%' title="添加接口" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="130px">
                <el-form-item label='是否新建'>
                    <el-radio-group v-model="isNew" @change="handnameVisible('new')">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="2">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label='是否配置所有范围'  v-show="!nameVisible">
                    <el-radio v-model="isAll" label="1">是</el-radio>
                    <el-radio v-model="isAll" label="2">否</el-radio>
                </el-form-item>
                <el-form-item label="接口" v-show="nameVisible">
                     <el-select style='width:100%' v-model="form.name14" placeholder="接口" collapse-tags multiple clearable>
                        <el-option label="api1" value="1"></el-option>
                        <el-option label="api11" value="2"></el-option>
                        <el-option label="api12" value="3"></el-option>
                        <el-option label="api13" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="接口" v-show="!nameVisible">
                    <el-input placeholder="接口" v-model='form.name1' clearable></el-input>
                </el-form-item>
                 <el-form-item prop="username" label="描述"  v-show="!nameVisible">
                    <el-input type='textarea' rows='4' />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgNew = false'>添加</el-button>
            </div>
        </el-dialog>

        <!--修改应用-->
        <el-dialog width='35%' title="修改应用" :visible.sync="dlgEdit">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="接口" v-show="!nameVisible">
                    <el-input placeholder="接口" v-model='form.name11' clearable></el-input>
                </el-form-item>
                 <el-form-item prop="username" label="描述"  v-show="!nameVisible">
                    <el-input type='textarea' rows='4' v-model='form.name12' />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false'>修改</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                nameVisible:false,
                isNew:1,
                isAll:'2',
                options: [{
                    value: '1',
                    label: '教师'
                }, {
                    value: '2',
                    label: '职工'
                }, {
                    value: '3',
                    label: '学生'
                }],
                options2: [{
                    value: '1',
                    label: '手机端'
                }, {
                    value: '2',
                    label: '桌面端'
                }],
                data2: [{
                    name: 'appScope1',
                    manager: '牛总',
                    desc: '对应接口api1,api12,api13',
                    children: [{
                        name: '/api/login/api1',
                        desc: '该接口为单点用户验证',
                        
                    }, {
                        name: '/api/user/api12',
                        desc: '该接口提供用户信息',
                        
                    }, {
                        name: '/api/home/api13',
                        desc: '该接口验证token',

                    }]
                }, {
                    name: 'appScope2',
                    manager: '金总',
                    desc: '对应接口api11,api12,api13',
                    children: [{
                        name:'/api/login/api11',
                        desc: '该接口提供登录第三方验证',
                    }, {
                        name:'/api/login/api12',
                        desc: '该接口提供用户信息',
                    }, {
                        name:'/api/login/api13',
                        desc: '该接口验证token',
                    }]
                }],
                columns: [{
                    label: '应用范围名称',
                    prop: 'name',
                    width: '300px',
                },  {
                    label: '描述',
                    prop: 'desc',
                }, {
                    label: '操作',
                    minWidth: '80px',
                    type: 'template',
                    template: 'actions',
                }],
                imageUrl: '',
                imageUrl2: './static/img/dingding.png',
                dlgNew: false,
                dlgEdit: false,
                tableData: [{
                        F_A: './static/img/dingding.png',
                        F_B: '钉钉',
                        F_C: '张三',
                        F_D: '钉钉是阿里旗下一款产品',
                        F_E: 'www.alibaba.com/dingdign',
                        F_G: '教师、学生',
                        F_H: '手机端、桌面端',
                        F_I: '上架',
                        F_J:1
                    },
                    {
                        F_A: './static/img/bear.png',
                        F_B: '奥数村',
                        F_C: '张三',
                        F_D: '奥数村针对学生奥数学习',
                        F_E: 'www.aoshucun.com',
                        F_G: '学生、职工',
                        F_H: '桌面端',
                        F_I: '下架',
                        F_J:2
                    }
                ],
                fullscreenLoading: false,
                currentPage: 1,
                form2: {
                    name1: '钉钉',
                    name2: '钉钉是阿里旗下一款产品',
                    name3: 'www.alibaba.com/dingdign',
                    name4: ['教师', '学生'],
                    name5: ['手机端'],
                },
                form: {
                    name: '',
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: [],
                    name5: [],
                    name11:'',
                    name12:''
                }
            }
        },
        // mounted(){
        //     alert(1)
        // },
        methods: {
            handnameVisible(type) {
                if (type == 'new') {
                    if (this.isNew == '1') {
                        this.nameVisible = false
                    }
                    if (this.isNew == '2') {
                        this.nameVisible = true
                    }
                }
            },
        }
    }

</script>
<style scope>
    #appManage .el-upload--text {
        width: 78px;
        height: 78px;
    }

    #appManage .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    #appManage  .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 78px;
        height: 78px;
        line-height: 78px;
        text-align: center;
    }

    #appManage .avatar {
        width: 78px;
        height: 78px;
        display: block;
    }

</style>
