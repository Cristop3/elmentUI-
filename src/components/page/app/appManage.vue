<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 应用管理</el-breadcrumb-item>
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
                <el-col :span="18" style="text-align:right">
                    <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column label="应用图标" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.F_A" />
                    </template>
                </el-table-column>
                <el-table-column prop="F_B" label="应用名称" align="center" >
                </el-table-column>
                <el-table-column prop="F_D" label="简介" align="center">
                </el-table-column>
                <el-table-column prop="F_E" label="url" align="center">
                </el-table-column>
                <el-table-column prop="F_G" label="适用用户" align="center">
                </el-table-column>
                <el-table-column prop="F_H" label="适用设备" align="center">
                </el-table-column>
                <el-table-column prop="F_K" label="关联范围" align="center">
                </el-table-column>
                <el-table-column prop="F_I" label="应用状态" align="center" >
                </el-table-column>
                <el-table-column label="操作" align="center" width='150'>
                    <template slot-scope="scope">
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                        <el-button @click='dlgRelation = true' type="text" size="small">
                            关联范围
                        </el-button>
                        <el-button v-if='scope.row.F_J == 1' @click='xx(2)' type="text" size="small">
                            下架
                        </el-button>
                        <el-button v-if='scope.row.F_J == 2' @click='xx(1)' type="text" size="small">
                            上架
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

        <!-- 新增应用 -->
        <el-dialog width='35%' title="新建应用" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="120px">
                <el-form-item prop="username" label="图标">
                    <el-upload id='appManage' action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form.name1' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="简介">
                    <el-input placeholder="简介" v-model='form.name2' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="url">
                    <el-input placeholder="url" v-model='form.name3' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="适用用户">
                    <el-select clearable placeholder="适用用户" multiple collapse-tags v-model='form.name4' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="适用设备">
                    <el-select clearable placeholder="适用设备" multiple collapse-tags v-model='form.name5' style="width:100%;">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <!--<el-form-item prop="username" label="关联范围">
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                    <el-button @click='dlgNewScope = true' type="text" size="small">
                        新建范围
                    </el-button>
                </el-form-item>
                <el-form-item prop="username">
                    (未设置)
                </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgNew = false'>新建</el-button>
            </div>
        </el-dialog>

        <!--修改应用-->
        <el-dialog width='35%' title="修改应用" :visible.sync="dlgEdit">
            <el-form ref="nameForm" label-width="120px">
                <el-form-item prop="username" label="图标">
                    <el-upload id='appManage' action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                        <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form2.name1'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="简介">
                    <el-input placeholder="简介" v-model='form2.name2'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="应用url">
                    <el-input placeholder="应用url" v-model='form2.name3'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="适用用户">
                    <el-select placeholder="适用用户" multiple collapse-tags v-model='form2.name4' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="适用设备">
                    <el-select placeholder="适用设备" multiple collapse-tags v-model='form2.name5' style="width:100%;">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item prop="username" label="关联范围">
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                    <el-button @click='dlgNewScope = true' type="text" size="small">
                        新建范围
                    </el-button>
                </el-form-item>
                <el-form-item prop="username">
                    (appScope1)
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false'>修改</el-button>
            </div>
        </el-dialog>

        <!-- 关联 -->
        <el-dialog width='40%' title='关联范围' :visible.sync='dlgRelation'>
             <el-table border
                :data="dataScope" max-height="250"
                style="width: 100%">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="应用范围名称"
                prop="label">
                </el-table-column>
                <el-table-column
                label="关联接口"
                prop="api">
                </el-table-column>
                <el-table-column
                label="描述"
                prop="desc">
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgNewScope = true'>新建范围</el-button>
                <el-button type="primary" @click='dlgRelation = false'>关联</el-button>
            </div>
        </el-dialog>

        <!-- 新建应用范围 -->
         <el-dialog width='30%' title='新建应用范围'  :visible.sync='dlgNewScope' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="描述" >
                    <el-input type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item>   
                <el-form-item prop="username" label="关联接口" >
                    <el-button @click='dlgRelationAPI = true' type="text" size="small">
                        设置
                    </el-button>
                </el-form-item>    
                <el-form-item prop="username">
                    (未设置)
                </el-form-item>        
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNewScope = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='550px' title='关联接口'  :visible.sync='dlgRelationAPI'>
            <el-transfer :titles="['已有接口', '关联接口']" v-model="value1" :data="dataAPI"></el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgRelationAPI = false" size="small">关联</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        data: function () {
            const generateData = _ => {
                const data = []
                const data2 = ['API1', 'API2', 'API3', 'API4'];
                for (let i = 0; i < data2.length; i++) {
                    data.push({
                        key: i,
                        label: data2[i]
                    });
                }
                return data;
            };
            return {
                dataAPI: generateData(),
                value1:[],
                dlgRelationAPI:false,
                dlgNewScope:false,
                dataScope: [{
                        id: 1,
                        label: 'appScope1',
                        api:'API1'
                    },
                    {
                        id: 3,
                        label: 'appScope2',
                        api:'API2'
                    }, {
                        id: 5,
                        label: 'appScope3',
                        api:'API3,API4'
                    }],
                    dlgRelation: false,
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
                            F_J: 1,
                            F_K: 'appScope1'
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
                            F_J: 2,
                            F_K: 'appScope2'
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
                        name5: '',
                    }
                }
            },
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
                }
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
