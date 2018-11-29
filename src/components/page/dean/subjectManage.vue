<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>学科管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter='4' style="margin-bottom:10px;">
                <el-col :span='4'>
                    <el-input placeholder="学科名称"  clearable v-model="form.name">
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
                <el-table-column prop="F_A" label="学科名称" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="描述" align="center">
                </el-table-column>
                <!-- <el-table-column prop="F_B" label="修改时间" align="center">
                </el-table-column> -->
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

      
        <!--修改学科-->
        <el-dialog width='30%' title='修改学科' :show-close='true' :visible.sync='dlgEdit' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form.name1' clearable ></el-input>
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
         <el-dialog width='30%' title='新增学科'  :visible.sync='dlgNew' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" ></el-input>
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
                form: {
                    name:'',
                    name1: '语文',
                    name2: '创建语文学科',
                },
                tableData:[
                    {
                        F_A:'语文',
                        F_B:'2018-02-05',
                        F_C:'创建语文学科'
                    },
                     {
                        F_A:'数学',
                        F_B:'2018-02-06',
                        F_C:'创建数学学科'
                    },
                     {
                        F_A:'英语',
                        F_B:'2018-02-07',
                        F_C:'创建英语学科'
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
