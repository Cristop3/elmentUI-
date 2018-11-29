<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>考试管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.xxx" placeholder="考试名称" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-cascader style='width:300px' v-model="form.bb" expand-trigger="hover" :change-on-select="true"
                    :options="regionOptions" :show-all-levels="true" clearable placeholder="班级"></el-cascader>
            </div>
            <div class="searchitem">
                <el-select v-model="form.region" placeholder="考试类型" clearable>
                    <el-option label="月考" value="1"></el-option>
                                <el-option label="周考" value="5"></el-option>
                                <el-option label="随堂测验" value="2"></el-option>
                                <el-option label="期中考试" value="3"></el-option>
                                <el-option label="期末考试" value="4"></el-option>
                </el-select>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click='dlgNew = true'>新建</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="考试名称" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="班级" align="center">
                </el-table-column>
                <el-table-column prop="F_GHI" label="学校" align="center">
                </el-table-column>
                <!--<el-table-column prop="F_H" label="隶属学区" align="center">
                </el-table-column>
                <el-table-column prop="F_I" label="隶属大区" align="center">
                </el-table-column>-->
                <el-table-column prop="F_C" label="考试类型" align="center">
                </el-table-column>
                <el-table-column prop="F_F" label="学期" align="center">
                </el-table-column>
                <!-- <el-table-column prop="F_D" label="开始时间" align="center">
                </el-table-column>
                <el-table-column prop="F_J" label="结束时间" align="center">
                </el-table-column> -->
                <el-table-column prop="F_E" label="监考老师" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button>
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row style='margin-top:150px'>
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <!-- 新建考试 -->
        <el-dialog width='50%' title="新建考试" :visible.sync="dlgNew">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="名称">
                            <el-input v-model="nameForm.name1" placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select v-model="nameForm.name3" placeholder="类型" clearable style="width:100%;">
                                <el-option label="月考" value="1"></el-option>
                                <el-option label="周考" value="5"></el-option>
                                <el-option label="随堂测验" value="2"></el-option>
                                <el-option label="期中考试" value="3"></el-option>
                                <el-option label="期末考试" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学期">
                            <el-select v-model="form.name55" placeholder="学期" clearable style="width:100%;">
                                <el-option label="18年上学期" value="1"></el-option>
                                <el-option label="18年下学期" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="时间">
                            <el-date-picker style="width:100%;" v-model="nameForm.name5" type="datetimerange"
                                range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" clearable>
                            </el-date-picker>
                        </el-form-item>
                        <!--<el-form-item label="监考老师">
                            <el-select v-model="nameForm.name4" placeholder="监考老师" clearable style="width:100%;">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                            </el-select>
                        </el-form-item>-->
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="学区">
                            <el-select v-model="form.exam1" placeholder="学区" @change="changeArea" clearable style="width:100%;">
                                <el-option label="成都学区" value="1"></el-option>
                                <el-option label="重庆学区" value="2"></el-option>
                                <el-option label="湘潭学区" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学校">
                            <!-- <el-cascader style='width:100%' v-model="form.exam2" expand-trigger="hover"
                                :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable
                                placeholder="学校"></el-cascader> -->
                                <el-select v-model="form.exam2" placeholder="学校" @change="changeArea" clearable style="width:100%;">
                                <el-option label="成都东区天立学校" value="1"></el-option>
                                <el-option label="成都西区天立学校" value="2"></el-option>
                                <el-option label="成都南区天立学校" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学段">
                            <el-select filterable style='width:100%' v-model='form.exam3' clearable placeholder="学段">
                                <el-option label="幼儿园" value="3"></el-option>
                                <el-option label="高中" value="4"></el-option>
                                <el-option label="初中" value="5"></el-option>
                                <el-option label="小学" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="年级">
                            <el-select v-model="form.exam4" placeholder="年级" clearable style="width:100%;">
                                <el-option label="一年级" value="1"></el-option>
                                <el-option label="二年级" value="2"></el-option>
                                <el-option label="三年级" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        
                        <el-form-item label="班级">
                            <!-- <el-cascader style='width:100%' v-model="nameForm.name2" expand-trigger="hover"
                                :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable
                                placeholder="班级"></el-cascader> -->
                                 <el-select v-model="form.exam5" placeholder="年级" clearable style="width:100%;">
                                <el-option label="1班" value="1"></el-option>
                                <el-option label="2班" value="2"></el-option>
                                <el-option label="3班" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgNew = false" type='primary' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改考试 -->
        <el-dialog width='50%' title="修改考试" :visible.sync="dlgEdit">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="名称">
                            <el-input v-model="formedit.exam6" placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select v-model="formedit.exam7" placeholder="类型" clearable style="width:100%;">
                                <el-option label="月考" value="1"></el-option>
                                <el-option label="周考" value="5"></el-option>
                                <el-option label="随堂测验" value="2"></el-option>
                                <el-option label="期中考试" value="3"></el-option>
                                <el-option label="期末考试" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学期">
                            <el-select v-model="formedit.exam8" placeholder="学期" clearable style="width:100%;">
                                <el-option label="18年上学期" value="1"></el-option>
                                <el-option label="18年下学期" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="时间">
                            <el-date-picker style="width:100%;" v-model="formedit.exam9" type="datetimerange"
                                range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" clearable>
                            </el-date-picker>
                        </el-form-item>
                        <!--<el-form-item label="监考老师">
                            <el-select v-model="formedit.exam10" placeholder="监考老师" clearable style="width:100%;">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                            </el-select>
                        </el-form-item>-->
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="学区">
                            <el-select v-model="formedit.exam1" placeholder="学区" @change="changeArea" clearable style="width:100%;">
                                <el-option label="成都学区" value="1"></el-option>
                                <el-option label="重庆学区" value="2"></el-option>
                                <el-option label="湘潭学区" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学校">
                            <!-- <el-cascader style='width:100%' v-model="form.exam2" expand-trigger="hover"
                                :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable
                                placeholder="学校"></el-cascader> -->
                                <el-select v-model="formedit.exam2" placeholder="学校" @change="changeArea" clearable style="width:100%;">
                                <el-option label="成都东区天立学校" value="1"></el-option>
                                <el-option label="成都西区天立学校" value="2"></el-option>
                                <el-option label="成都南区天立学校" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学段">
                            <el-select filterable style='width:100%' v-model='formedit.exam3' clearable placeholder="学段">
                                <el-option label="幼儿园" value="3"></el-option>
                                <el-option label="高中" value="4"></el-option>
                                <el-option label="初中" value="5"></el-option>
                                <el-option label="小学" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="年级">
                            <el-select v-model="formedit.exam4" placeholder="年级" clearable style="width:100%;">
                                <el-option label="一年级" value="1"></el-option>
                                <el-option label="二年级" value="2"></el-option>
                                <el-option label="三年级" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        
                        <el-form-item label="班级">
                            <!-- <el-cascader style='width:100%' v-model="nameForm.name2" expand-trigger="hover"
                                :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable
                                placeholder="班级"></el-cascader> -->
                                 <el-select v-model="formedit.exam5" placeholder="年级" clearable style="width:100%;">
                                <el-option label="1班" value="1"></el-option>
                                <el-option label="2班" value="2"></el-option>
                                <el-option label="3班" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgEdit = false" type='primary' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='40%' title="查看考试" :visible.sync="dlgView">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="名称：">
                            语文随堂测验
                        </el-form-item>
                        <el-form-item label="类型：">
                            随堂测试
                        </el-form-item>
                        <el-form-item label="学期：">
                            18年上学期
                        </el-form-item>
                        <el-form-item label="时间：">
                           2018-09-27 09:00:00 <br/>~ 2018-09-27 11:00:00
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form :model='nameForm' label-width="100px">
                        <el-form-item label="学区：">
                           成都学区
                        </el-form-item>
                        <el-form-item label="学校：">
                            成都东区天立小学
                        </el-form-item>
                        <el-form-item label="学段：">
                            小学
                        </el-form-item>
                        <el-form-item label="年级：">
                            三年级
                        </el-form-item>
                        <el-form-item label="班级：">
                            2班
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-dialog>



    </div>
</template>



<script>
    export default {
        data: function () {
            return {
                tableData: [{
                        F_A: '语文随堂测验',
                        F_B: '三年级2班',
                        F_C: '随堂测试',
                        F_D: '2018-02-12',
                        F_J: '2018-02-13',
                        F_E: '张三',
                        F_F: '18年上学期',
                        F_G: '成都东区天立学校',
                        F_H: '成都学区',
                        F_I: '四川',
                        F_GHI: '成都东区天立学校',
                        F_F: '18年上学期'
                    },
                    {
                        F_A: '数学月考',
                        F_B: '五年级2班',
                        F_C: '月考',
                        F_D: '2018-11-15',
                        F_J: '2018-11-17',
                        F_E: '李四',
                        F_F: '18年下学期',
                        F_G: '湘潭天立学校',
                        F_H: '湘潭学区',
                        F_I: '湖南',
                        F_GHI: '湘潭天立学校',
                        F_F: '18年下学期'
                    }
                ],
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区',
                        children: [{
                            value: '成都天立学校',
                            label: '成都天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '成都东区天立学校',
                            label: '成都东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }, {
                        value: '泸州学区',
                        label: '泸州学区',
                        children: [{
                            value: '泸州天立学校',
                            label: '泸州天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '泸州东区天立学校',
                            label: '泸州东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区',
                        children: [{
                            value: '宜宾天立学校',
                            label: '宜宾天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '宜宾东区天立学校',
                            label: '宜宾东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }]
                }, {
                    value: '湖南',
                    label: '湖南',
                    children: [{
                        value: '湘潭学区',
                        label: '湘潭学区',
                        children: [{
                            value: '湘潭天立学校',
                            label: '湘潭天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }, {
                            value: '湘潭东区天立学校',
                            label: '湘潭东区天立学校',
                            children: [{
                                value: '三年级一班',
                                label: '三年级二班',
                            }]
                        }]
                    }]
                }],
                dlgNew: false,
                dlgEdit: false,
                dlgView: false,
                currentPage: 1,
                fullscreenLoading: false,
                nameForm: {
                    name: '',
                    name3: '',
                    name1: '',
                    name2: [],
                    name4: '',
                    name5: [],
                    name6: ''
                },
                time: [],
                form: {
                    xxx: '',
                    aa: [],
                    bb: [],
                    name1: '',
                    name2: '语文随堂测验',
                    name3: ['四川', '成都学区', '成都东区天立学校'],
                    name4: '2',
                    name5: ['2018-02-12', '2018-02-13'],
                    name6: '1',
                    name44: '1',
                    name55: '',
                    exam1: '',
                    exam2: '',
                    exam3: '',
                    exam4: '',
                    exam5: '',
                },
                formedit:{
                    exam1:'1',
                    exam2:'1',
                    exam3:'6',
                    exam4:'3',
                    exam5:'2',
                    exam6:'语文随堂测验',
                    exam7:'2',
                    exam8:'1',
                    exam9:['2018-09-27 09:00:00','2018-09-27 11:00:00'],
                    exam10:'1',
                }
            }
        },
        methods: {
            changeArea() {

            }
        }
    }

</script>
<style scoped>
    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>
