<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 应用管理</el-breadcrumb-item>
                <el-breadcrumb-item>应用接口管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter='4' style="margin-bottom:10px;">
                <el-col :span='4'>
                    <el-input placeholder="应用接口名称"  clearable v-model="form.name">
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary"  >搜索</el-button>
                </el-col>
                <el-col :span='18' style='text-align:right'>
                    <el-button type="primary"  @click="dlgNew = true">新建</el-button>
                </el-col>
            </el-row>
             <el-table :data="tableData" style="width: 100%" border >
                <el-table-column prop="F_A" label="应用接口名称" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="接口路径" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="描述" align="center">
                </el-table-column>
                
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
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

      
        <!--修改学科-->
        <el-dialog width='30%' title='修改应用接口' :show-close='true' :visible.sync='dlgEdit' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form.name1' clearable ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="路径">
                    <el-input placeholder="路径" v-model='form.name3' clearable ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="描述"  clearable>
                    <el-input type="textarea" rows="4" v-model='form.name2' placeholder="描述" ></el-input>
                </el-form-item>             
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgEdit')"   size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 新增学科 -->
         <el-dialog width='30%' title='新增应用接口'  :visible.sync='dlgNew' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="路径">
                    <el-input placeholder="路径"  clearable ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="描述" >
                    <el-input type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item>             
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

       

    </div>
</template>

<style scoped>
</style>

<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                currentPage:1,
                form: {
                    name:'',
                    name1: 'API1',
                    name2: '该接口为单点用户验证',
                    name3: '/api/login/api1',
                },
                tableData:[
                    {
                        F_A:'API1',
                        F_B:'/api/login/api1',
                        F_C:'该接口为单点用户验证'
                    },
                     {
                        F_A:'API2',
                        F_B:'/api/user/api12',
                        F_C:'该接口提供用户信息'
                    },
                     {
                        F_A:'API3',
                        F_B:'/api/home/api13',
                        F_C:'该接口验证token'
                    }
                ],
                dlgEdit:false,
                dlgNew:false
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
            edit(data) {
                this.dlgEdit = true
            }
        }
    }

</script>
