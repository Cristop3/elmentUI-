<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 应用管理</el-breadcrumb-item>
                <el-breadcrumb-item>应用范围配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="4" style="margin-bottom:20px">
                <el-col :span="4">
                    <el-input v-model="form.name6" placeholder="应用名称" clearable></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                </el-col>
                <!--
                <el-col :span="18" style="text-align:right">
                    <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                </el-col>-->
            </el-row>
            <zk-table index-text="#" :data="data2" :isFold='false' :showIndex='true' :tree-type="true" :columns="columns" :selection-type="true"
                :expand-type="false">
                <template slot='img' slot-scope='scope'>
                    <img v-if='scope.row.children' style='width:50px;height:50px;' :src='scope.row.manager' />
                </template>
                <template slot="actions" slot-scope="scope">
                    <el-button v-if='scope.row.children' type="text" @click="dlgNew =true">添加范围</el-button>
                    <el-button v-else type="text" @click="dlgEdit=true">修改</el-button>
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
        <el-dialog width='35%' title="添加范围" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="130px">
                <el-form-item label='是否新建'>
                    <el-radio-group v-model="isNew" @change="handnameVisible('new')">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="2">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label='是否配置所有应用'  v-show="!nameVisible">
                    <el-radio v-model="isAll" label="1">是</el-radio>
                    <el-radio v-model="isAll" label="2">否</el-radio>
                </el-form-item>
                <el-form-item prop="username" label="名称"  v-show="!nameVisible">
                    <el-input placeholder="名称" v-model='form.name1' clearable></el-input>
                </el-form-item>
                <el-form-item label="名称" v-show="nameVisible">
                     <el-select style='width:100%' v-model="form.name14" placeholder="名称" collapse-tags multiple clearable>
                        <el-option label="appScope1" value="1"></el-option>
                        <el-option label="appScope2" value="2"></el-option>
                        <el-option label="appScope3" value="3"></el-option>
                        <el-option label="appScope4" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="关联API"  v-show="!nameVisible">
                    <el-select clearable placeholder="关联API" multiple collapse-tags v-model='form.name4' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
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
                <el-form-item prop="username" label="名称" >
                    <el-input placeholder="名称" v-model='form.name11' clearable></el-input>
                </el-form-item>
                <el-form-item label="名称" v-show="nameVisible">
                     <el-select style='width:100%' v-model="form.name12" placeholder="名称" collapse-tags multiple clearable>
                        <el-option label="appScope1" value="1"></el-option>
                        <el-option label="appScope2" value="2"></el-option>
                        <el-option label="appScope3" value="3"></el-option>
                        <el-option label="appScope4" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="关联API"  >
                    <el-select clearable placeholder="关联API" multiple collapse-tags v-model='form.name13' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述" >
                    <el-input type='textarea' rows='4'   v-model='form.name15' />
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
                isNew: 1,
                isAll: '2',
                options: [{
                    value: '1',
                    label: 'api1'
                }, {
                    value: '2',
                    label: 'api11'
                }, {
                    value: '3',
                    label: 'api12'
                }, {
                    value: '4',
                    label: 'api13'
                }],
                options2: [{
                    value: '1',
                    label: '手机端'
                }, {
                    value: '2',
                    label: '桌面端'
                }],
                data2: [{
                    name: '钉钉',
                    manager: './static/img/dingding.png',
                    desc: '钉钉是阿里旗下一款产品',
                    children: [{
                        name: 'appScope1',
                        desc: '对应接口api1,api12,api13'
                    }, {
                        name: 'appScope2',
                        desc: '对应接口api11,api12,api13'
                    }, {
                        name: 'appScope3',
                        desc: '对应接口api21,api22,api13'
                    }]
                }, {
                    name: '奥数村',
                    manager: './static/img/bear.png',
                    desc: '奥数村针对学生奥数学习',
                    children: [{
                        name: 'appScope1',
                        desc: '对应接口api1,api12,api13'

                    }, {
                        name: 'appScope2',
                        desc: '对应接口api11,api12,api13'

                    }, {
                        name: 'appScope3',
                        desc: '对应接口api21,api22,api13'

                    }]
                }],
                columns: [{
                    label: '应用名称',
                    prop: 'name',
                    width: '300px',
                }, {
                    label: '应用logo',
                    prop: 'manager',
                    width: '90px',
                    type: 'template',
                    template: 'img'
                }, {
                    label: '描述',
                    prop: 'desc',
                }, {
                    label: '操作',
                    minWidth: '80px',
                    type: 'template',
                    template: 'actions',
                }],
                optionsName: [{
                    value: '1',
                    label: 'appScope1'
                }, {
                    value: '2',
                    label: 'appScope2'
                }, {
                    value: '3',
                    label: 'appScope3'
                }, ],
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
                        F_J: 1
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
                        F_J: 2
                    }
                ],
                fullscreenLoading: false,
                currentPage: 1,
                nameVisible: false,
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
                    name6: '',
                    name14:'',
                    name11:'appScope1',
                    name12:'',
                    name13:['1','2','3','4'],
                    name15:'对应接口api1,api12,api13',
                }
            }
        },
        // mounted(){
        //     alert(2)
        // },
        methods: {
            xx(type) {
                var x = type == 1 ? '上' : '下'
                this.$confirm('是否将该应用' + x + '架?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
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

    #appManage .el-upload:hover {
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
