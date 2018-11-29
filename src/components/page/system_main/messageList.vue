<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 系统消息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
           <el-row :gutter='4' style="margin-bottom:20px">
                <el-col :span='6'>
                    <el-input v-model="form.x" placeholder="标题">
                    </el-input>
                </el-col>
                <el-col :span='18'>
                    <el-button type="primary" >搜索</el-button>
                </el-col>
           </el-row>

           <el-row>
                <el-table :data="tableData4" style="width: 100%" border center>
                    <el-table-column  prop="date" label="序号"  align="center" width='60'>
                    </el-table-column>
                    <el-table-column prop="name" label="标题"  align="center">
                    </el-table-column>
                    <el-table-column prop="province" label="被通知人"  align="center">
                    </el-table-column>
                    <el-table-column prop="city" label="来源" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="是否紧急"  align="center">
                    </el-table-column>
                    <el-table-column prop="state" label="阅读状态"  align="center">
                    </el-table-column>
                    <el-table-column prop="state2" label="发布时间"  align="center">
                    </el-table-column>
                    <el-table-column  label="操作"  align="center">
                        <template slot-scope="scope">
                            <el-button @click='see' size="small" type="text">
                                查看
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
        <el-dialog width='45%' title="查阅消息"  :visible.sync="messVisible" >
            <h2>【请假】流程通知</h2>
            <p class='msg'>您好！您提交的流程【请假】已经审批结束了，请查阅对应的模块</p>
            <p class='time'>发布时间：2018-08-20 09:43:11</p>
            
        </el-dialog>

    </div>
</template>

<style scope>
    .el-dialog__title{
        font-size:15px;
    }
    h2{
        text-align:center;
    }
    .msg{
        margin:10px 0 70px 0;
    }
    .time{
        text-align:right;
    }
</style>

<script>
    export default {
        name: 'messageList',
        data: function(){
            return {
                currentPage:1,
                messVisible:false,
                form:{
                    x:''
                },
                tableData4: [{
                    date: '1',
                    name: '【请假】流程通知',
                    province: '超级管理员',
                    city: '流程通知',
                    address: '是',
                    state: '是',
                    state2: '2018-08-20 09:43:11',
                },
                {
                    date: '2',
                    name: '【放假通知】关于我校',
                    province: '超级管理员',
                    city: '流程通知',
                    address: '是',
                    state: '是',
                    state2: '2018-08-16 11:23:60',
                }
                ]
            }
        },
        methods: {
            see(){
                this.messVisible = true
            }
        }
    }
</script>