<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>岗位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row  :gutter='4' style='margin-bottom:20px'>
                <el-col :span='4'>
                    <el-input placeholder="岗位名称"  clearable v-model="form.name1">
                    </el-input>
                </el-col>
                <!--<el-col :span='4'>
                    <el-input placeholder="字典类型"  clearable v-model="form.name2">
                    </el-input>
                </el-col>-->
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
                 <el-col :span='14' style='text-align:right'>
                    <el-button type="primary"  @click="dlgNew = true">新建</el-button>
                </el-col>
            </el-row>
              <el-table :data="tableData" style="width: 100%" border center>
                     <el-table-column prop="F_A" label="岗位名称" align="center">
                    </el-table-column>
                    <!--<el-table-column prop="F_B" label="字典类型" align="center">
                    </el-table-column>-->
                    <el-table-column prop="F_C" label="状态" align="center">
                    </el-table-column> 
                    <el-table-column prop="F_D" label="描述" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click='handleEdit(scope.row)' type="text" size="small">
                                修改
                            </el-button>
                            <!--<el-button @click='list' type="text" size="small">
                                列表
                            </el-button>-->
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

        <!-- 修改岗位字典 -->
        <el-dialog width='25%' title='修改岗位'   :visible.sync='dlgEdit' >
            <el-form :label-position="labelPosition" label-width="60px">
                <el-form-item label='名称'>
                    <el-input v-model='form.name' clearable placeholder="名称"></el-input>
                </el-form-item>
                <!--<el-form-item label='类型'>
                    <el-input  v-model='form.type' :disabled="true" placeholder="类型" clearable></el-input>
                </el-form-item>-->
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

        <!-- 绑定菜单 
        <el-dialog width='40%'  title='授权'   :visible.sync='dlgMenu'>
            <div>
            <el-tree ref="tree" :data="dataMenu"   :default-expanded-keys="[2]" node-key="id" show-checkbox>
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span><i class="iconfont" :class="node.icon"></i>{{ node.label }}</span>
                </span>
            </el-tree>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgMenu')"   size="small">授权</el-button>
            </div>
        </el-dialog>-->

        <!-- 新增岗位字典 -->
        <el-dialog width='25%' title='新增岗位'  :visible.sync='dlgNew' >
            <el-form  :label-position="labelPosition" label-width="60px" >
                <el-form-item label='名称'>
                    <el-input placeholder="名称" clearable></el-input>
                </el-form-item>
                <!--<el-form-item label='类型'>
                    <el-input placeholder="类型" v-model="form.type" :disabled="true" clearable></el-input>
                </el-form-item>-->
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
                    name: '岗位名称',
                    type:'sys_gangwei',
                    miaosu:'岗位名称列表',
                    state:'1',
                    states:'所有',
                    name2:''
                },
                tableData:[
                  {
                      F_A:'校长',
                      F_C:'正常',
                      F_B:'sys_gangwei',
                      F_D:'校长',
                  },
                  {
                      F_A:'副校长',
                      F_C:'正常',
                      F_B:'sys_gangwei',
                      F_D:'副校长',
                  },
                  {
                      F_A:'科系主任',
                      F_C:'正常',
                      F_B:'sys_gangwei',
                      F_D:'科系主任',
                  }
              ],
                dlgEdit:false,
                dlgMenu:false,
                currentPage:1,
                dlgNew:false,
                labelPosition:'right',
                radioNew:'1'
            }
        },
        methods: {
            list(){
               this.$router.push('/dicList/2')
           },
           //修改
           handleEdit(row){
                this.form.name = row.F_A
               this.form.state = row.F_C == '正常' ? '1' : '2'
               this.form.miaosu = row.F_D 
               this.dlgEdit = true
           }
        }
    }

</script>

<style scoped>
 .el-button+.el-button{
        margin-left:0px;
    }
</style>
