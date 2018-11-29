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
            <el-row :gutter='4' style="margin-bottom:10px;">
                <el-col :span='4'>
                    <el-input placeholder="应用范围名称"  clearable v-model="form.name">
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
                <el-table-column prop="F_A" label="应用范围名称" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="描述" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="关联接口" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                        <el-button @click='dlgRelation = true' type="text" size="small">
                            关联接口
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
        <el-dialog width='30%' title='修改应用范围' :show-close='true' :visible.sync='dlgEdit' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form.name1' clearable ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="描述"  clearable>
                    <el-input type="textarea" rows="4" v-model='form.name2' placeholder="描述" ></el-input>
                </el-form-item>      
                <!-- <el-form-item prop="username" label="关联接口" >
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                </el-form-item>         -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgEdit')"   size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 新增学科 -->
         <el-dialog width='30%' title='新建应用范围'  :visible.sync='dlgNew' >
            <el-form  ref="nameForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" ></el-input>
                </el-form-item>
                <el-form-item prop="username" label="描述" >
                    <el-input type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item>   
                <!-- <el-form-item prop="username" label="关联接口" >
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        设置
                    </el-button>
                </el-form-item>             -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

       <!-- 关联 -->
        <el-dialog width='550px' title='关联接口'  :visible.sync='dlgRelation'>
            <el-transfer :titles="['已有接口', '关联接口']" v-model="value1" :data="dataAPI"></el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgRelation')" size="small">关联</el-button>
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
                currentPage:1,
                dataAPI: generateData(),
                dlgRelation:false,
                value1:[],
                form: {
                    name:'',
                    name1: 'appScope1',
                    name2: '该范围涉及了应用接口API1',
                },
                tableData:[
                    {
                        F_A:'appScope1',
                        F_B:'API1',
                        F_C:'该范围涉及了应用接口API1'
                    },
                     {
                        F_A:'appScope2',
                        F_B:'API2',
                        F_C:'该范围涉及了应用接口API2'
                    },
                     {
                        F_A:'appScope3',
                        F_B:'API3,API4',
                        F_C:'该范围涉及了应用接口API3,API4'
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
