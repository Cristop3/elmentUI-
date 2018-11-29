<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>字典管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!--<el-tabs value='职位管理'>
            <el-tab-pane label="职位管理" name='职位管理'>
                <dicZhiwei></dicZhiwei>
            </el-tab-pane>
            <el-tab-pane label="岗位管理" name='岗位管理'>
                <dicGangwei></dicGangwei>
            </el-tab-pane>
            <el-tab-pane label="等级管理" name='等级管理'>
                <dicDengji></dicDengji>
            </el-tab-pane>
        </el-tabs>-->

        <div class="container">
            <el-row  :gutter='4' style='margin-bottom:20px'>
                <el-col :span='4'>
                    <el-input placeholder="字典名称"  clearable v-model="form.name1">
                    </el-input>
                </el-col>
                <el-col :span='4'>
                    <el-select  v-model="form.name2" placeholder="字典类型" clearable>
                    <el-option label="sys_zhiwei" value="0"></el-option>
                    <el-option label="sys_gangwei" value="1"></el-option>
                    <el-option label="sys_dengji" value="2"></el-option>
                     </el-select>
                </el-col>
                <el-col :span='4'>
                    <el-select  v-model="form.name3" placeholder="状态" clearable>
                    <el-option label="所有" value="0"></el-option>
                    <el-option label="正常" value="1"></el-option>
                    <el-option label="停用" value="2"></el-option>
                     </el-select>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>
                 <el-col :span='10' style='text-align:right'>
                    <el-button type="primary"  @click="handleAdd">新建</el-button>
                </el-col>
            </el-row>
              <el-table :data="tableData" style="width: 100%" border center>
                    <el-table-column prop="F_A" label="字典名称" align="center">
                    </el-table-column>
                    <el-table-column prop="F_B" label="字典类型" align="center">
                    </el-table-column>
                    <el-table-column prop="F_C" label="状态" align="center">
                    </el-table-column> 
                    <el-table-column prop="F_D" label="描述" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click='handleEdit(scope.row)' type="text" size="small">
                                修改
                            </el-button>
                            <el-button @click='list' type="text" size="small">
                                列表
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
         <!-- 新增职位字典 -->
        <el-dialog width='25%' title='新增字典'  :visible.sync='dlgNew' >
            <el-form  :label-position="labelPosition" label-width="60px" >
                <el-form-item label='名称'>
                    <el-input placeholder="名称" clearable></el-input>
                </el-form-item>
                <el-form-item label='类型'>
                    <el-input placeholder="类型" clearable></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="radioNew">
                        <el-radio label="1">正常</el-radio>
                        <el-radio label="2">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item  label='描述'>
                    <el-input type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item>             
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false"   size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改职位字典 -->
        <el-dialog width='25%' title='修改字典'   :visible.sync='dlgEdit' >
            <el-form :label-position="labelPosition" label-width="60px">
                <el-form-item label='名称'>
                    <el-input v-model='form.name4' clearable placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item label='类型'>
                    <el-input  v-model='form.name5' placeholder="类型" clearable></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.name6">
                        <el-radio label="1" value="1">正常</el-radio>
                        <el-radio label="2" value="2">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label='描述'>
                    <el-input v-model="form.name7" type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="this.dlgEdit = false"   size="small">修改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    // import dicZhiwei from "../../../components/page/org/dicZhiwei.vue";
    // import dicGangwei from "../../../components/page/org/dicGangwei.vue";
    // import dicDengji from "../../../components/page/org/dicDengji.vue";
    export default {
        name: 'baseform',
        data: function () {
            return {
                currentPage: 1,
                fullscreenLoading: false,
                dlgNew: false,
                dlgEdit: false,
                labelPosition: 'right',
                form: {
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: ''
                },
                tableData: [{
                        F_A: '职位',
                        F_C: '正常',
                        F_B: 'sys_zhiwei',
                        F_D: '职位',
                    },
                    {
                        F_A: '岗位',
                        F_C: '正常',
                        F_B: 'sys_gangwei',
                        F_D: '岗位',
                    },
                    {
                      F_A:'等级',
                      F_C:'正常',
                      F_B:'sys_dengji',
                      F_D:'等级',
                  },
                  {
                      F_A:'职称',
                      F_C:'正常',
                      F_B:'sys_zhicheng',
                      F_D:'职称',
                  }
                ],
                radioNew: '1',
                loading: false
            }
        },
        methods: {
            list(){
               this.$router.push('/dicList')
           },
           //新建
           handleAdd(){
               this.dlgNew = true
           },
           //修改
           handleEdit(row){
               this.form.name4 = row.F_A
               this.form.name5 = row.F_B
               this.form.name6 = row.F_C == '正常' ? '1' : '2'
               this.form.name7 = row.F_D
               this.dlgEdit = true
           }
        }
    }

</script>

<style>
    #schoolManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width:362px;
    }

    .demo {
        margin: 0 auto;
    }

    #schoolManage .el-upload {
        display: block;
    }

    /*去掉新增修改按钮间默认的10px*/
    .el-button+.el-button {
        margin-left: 0px;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
