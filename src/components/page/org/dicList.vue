<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="toRouter">{{this.toRouterName}}</el-breadcrumb-item>
                <el-breadcrumb-item>数据列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row  :gutter='4' style='margin-bottom:20px'>
                <el-col :span='4'>
                    <el-input placeholder="标签"  clearable v-model="form.name1">
                    </el-input>
                </el-col>
                <el-col :span='4'>
                    <el-input placeholder="键值"  clearable v-model="form.name1">
                    </el-input>
                </el-col>
                <el-col :span='4'>
                    <el-select  v-model="form.states" placeholder="状态" clearable>
                    <el-option label="所有" value="0"></el-option>
                    <el-option label="正常" value="1"></el-option>
                    <el-option label="停用" value="2"></el-option>
                     </el-select>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>
                 <el-col :span='10' style='text-align:right'>
                    <el-button type="primary"  @click="dlgNew = true">新建</el-button>
                </el-col>
            </el-row>
              <el-table :data="tableData" style="width: 100%" border center>
                    <el-table-column prop="F_A" label="标签" align="center">
                    </el-table-column>
                    <el-table-column prop="F_B" label="键值" align="center">
                    </el-table-column>
                    <el-table-column prop="F_C" label="状态" align="center">
                    </el-table-column> 
                    <el-table-column prop="F_E" label="编码" align="center">
                    </el-table-column> 
                    <el-table-column prop="F_D" label="描述" align="center">
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

        <!-- 修改数据 -->
        <el-dialog width='25%' title='修改数据'   :visible.sync='dlgEdit' >
            <el-form :label-position="labelPosition" label-width="60px">
                <el-form-item label='标签'>
                    <el-input v-model='form.name' clearable placeholder="标签"></el-input>
                </el-form-item>
                <el-form-item label='键值'>
                    <el-input v-model='form.key' clearable placeholder="键值"></el-input>
                </el-form-item>
                <el-form-item label='类型'>
                    <el-input  v-model='form.type' disabled placeholder="类型" clearable></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.state">
                        <el-radio label="1">正常</el-radio>
                        <el-radio label="2">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label='描述'>
                    <el-input v-model="form.miaosu" type="textarea" rows="4" placeholder="描述" ></el-input>
                </el-form-item> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="this.dlgEdit = false"   size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 新增职位字典 -->
        <el-dialog width='25%' title='新建数据'  :visible.sync='dlgNew' >
            <el-form  :label-position="labelPosition" label-width="60px" >
                <el-form-item label='标签'>
                    <el-input placeholder="标签" clearable></el-input>
                </el-form-item>
                <el-form-item label='键值'>
                    <el-input placeholder="键值" clearable></el-input>
                </el-form-item>
                <el-form-item label='类型'>
                    <el-input placeholder="类型" v-model='form.F_TYPE' disabled clearable></el-input>
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

    </div>
</template>


<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                form: {
                    name: '年级组长',
                    type:'sys_zhiwei_name',
                    miaosu:'职位年级组长',
                    state:'1',
                    states:'所有',
                    key:'0',
                    F_TYPE:'sys_zhiwei_name'
                },
                toRouterName:'',
                tableData:[
                  {
                      F_A:'年级组长',
                      F_C:'正常',
                      F_B:'0',
                      F_D:'职位年级组长',
                        F_E:1
                  },
                  {
                      F_A:'辅导员',
                      F_C:'正常',
                      F_B:'1',
                      F_D:'职位辅导员',
                       F_E:2
                  },
                  {
                      F_A:'学生会主席',
                      F_C:'正常',
                      F_B:'2',
                      F_D:'职位学生会主席',
                       F_E:3
                  }
              ],
            //   tableData1:[
            //       {
            //           F_A:'党委办公室',
            //           F_C:'正常',
            //           F_B:'0',
            //           F_D:'岗位党委办公室',
            //       },
            //       {
            //           F_A:'法律事务办公室',
            //           F_C:'正常',
            //           F_B:'1',
            //           F_D:'岗位法律事务办公室',
            //       }
            //   ],
            //   tableData2:[
            //       {
            //           F_A:'年级组长',
            //           F_C:'正常',
            //           F_B:'0',
            //           F_D:'职位年级组长',
            //       },
            //       {
            //           F_A:'辅导员',
            //           F_C:'正常',
            //           F_B:'1',
            //           F_D:'职位辅导员',
            //       },
            //       {
            //           F_A:'学生会主席',
            //           F_C:'正常',
            //           F_B:'2',
            //           F_D:'职位学生会主席',
            //       }
            //   ],
                dlgEdit:false,
                dlgMenu:false,
                currentPage:1,
                dlgNew:false,
                labelPosition:'right',
                radioNew:1
            }
        },
        computed:{
            toRouter(){
                let id = this.$route.params.id
                if(id == 0){
                    this.toRouterName = '字典管理'
                    return {path:'/dicManage'}
                }else if(id == 1){
                     this.toRouterName = '职位管理'
                    return {path:'/dicZhiwei'}
                }else if(id == 2){
                     this.toRouterName = '岗位管理'
                    return {path:'/dicGangwei'}
                }else if(id == 3){
                     this.toRouterName = '等级管理'
                    return {path:'/dicDengji'}
                }else{
                    this.toRouterName = '字典管理'
                    return {path:'/dicManage'}
                }
            }
        },
        // mounted(){
        //     let type = this.$route.params.type
        //     if(type == 0){
        //         this.tableData = this.tableData0
        //     }else if(type == 1){
        //         this.tableData = this.tableData1
        //     }else if(type == 2){
        //         this.tableData = this.tableData2
        //     }
        // },
        methods: {
           
        }
    }

</script>

<style scoped>
 .el-button+.el-button{
        margin-left:0px;
    }
</style>
