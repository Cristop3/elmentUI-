<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>学期管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input placeholder="学期名称" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click='dlgNew = true'>新建</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="学期名称" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="学期开始时间" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="学期结束时间" align="center">
                </el-table-column>
                <el-table-column prop="F_D" label="学年" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <!-- <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button> -->
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

        <!-- 新建学期 -->
        <el-dialog width='30%' title="新建学期" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="开始日期">
                    <el-date-picker style='width:100%'  type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="username" label="结束日期">
                    <el-date-picker style='width:100%'  type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgNew = false" type='primary' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!--修改学期-->
        <el-dialog width='30%' title="修改学期" :visible.sync="dlgEdit">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model='form.name1' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="开始日期">
                    <el-date-picker style='width:100%' v-model="form.name2" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="username" label="结束日期">
                    <el-date-picker style='width:100%' v-model="form.name3" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="username" label="学年">
                    <el-date-picker  style='width:100%'
                    type="year"
                    v-model='form.name4'
                    placeholder="学年">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgNew = false" type='primary' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='25%' title="查看学期" :visible.sync="dlgView">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="名称：">
                    <span>18年上学期</span>
                </el-form-item>
                <el-form-item prop="username" label="开始日期：">
                    <span>2018-02-01</span>
                </el-form-item>
                <el-form-item prop="username" label="结束日期：">
                    <span>2018-06-30</span>
                </el-form-item>
                <el-form-item prop="username" label="学年：">
                    <span>2018</span>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tableData: [{
                        F_A: '18年上学期',
                        F_B: '2018-02-01',
                        F_C: '2018-06-30',
                        F_D:'2018'
                    },
                    {
                        F_A: '18年下学期',
                        F_B: '2018-09-01',
                        F_C: '2018-12-30',
                        F_D:'2018'
                    }
                ],
                dlgNew: false,
                dlgView: false,
                dlgEdit: false,
                currentPage: 1,
                fullscreenLoading: false,
                time: [],
                form:{
                    name1:'18年上学期',
                    name2:'2018-02-01',
                    name3:'2018-06-30',
                    name4:'2018'
                }
            }
        },
        methods: {
            
        }
    }

</script>
<style scoped>
     .searchitem{
        display:inline-block;
        margin-bottom:10px;
    }

</style>


