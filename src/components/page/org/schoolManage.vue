<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>学校管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-tabs value='学校信息'>
            <el-tab-pane label="学校信息" name='学校信息'>
                <div class="container">
                    <div class="searchitem">
                        <el-input v-model="form.name1" placeholder="学校名称"></el-input>
                    </div>
                    <div class="searchitem">
                        <el-cascader style='width:180px' v-model="form.name2" expand-trigger="hover" :change-on-select="true" :options="regionOptions"
                            :show-all-levels="true" clearable placeholder="学区"></el-cascader>
                    </div>
                    <div class="searchitem">
                        <el-select style='width:150px' placeholder="学段" v-model="form.name3" collapse-tags multiple clearable>
                            <el-option v-for="item in xxxxOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="searchitem">
                        <el-select style='width:120px' placeholder="类型" v-model="form.name4" clearable>
                            <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                    </div>
                    <div style="float:right;">
                        <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                        <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                            导入
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>模版下载</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div style='clear:both'></div>
                    <el-row style='margin-top:10px;'>
                        <el-table :data="tableData4" style="width: 100%" border center>
                            <el-table-column prop="F_A" label="编码" align="center">
                            </el-table-column>
                            <el-table-column prop="F_B" label="学校名称" align="center">
                            </el-table-column>
                            <el-table-column prop="F_G" label="隶属学区" align="center">
                            </el-table-column>
                            <el-table-column prop="F_H" label="隶属大区" align="center">
                            </el-table-column>
                            <!-- <el-table-column  prop="F_C" label="简称"  align="center">
                    </el-table-column> -->
                            <el-table-column prop="F_D" label="类型" align="center">
                            </el-table-column>
                            <el-table-column prop="F_E" label="学段" align="center">
                            </el-table-column>
                            <el-table-column prop="F_F" label="校长" align="center">
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
                    </el-row>
                    <el-row style='margin-top:160px'>
                        <el-col :span='24' style="text-align:center">
                            <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                                :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="200">
                            </el-pagination>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="部门管理" name='部门管理'>
                <bumenschool></bumenschool>
            </el-tab-pane>
        </el-tabs>

        <!-- 新建学校 -->
        <el-dialog width='50%' title='新建学校' :visible.sync='dlgNew'>
            <el-row type="flex" class="row-bg">
                <el-form :label-position="labelPosition" label-width="100px" :model="form">
                    <el-col :span='12'>
                        <el-form-item label="名称">
                            <el-input style='width:100%' v-model="form.name6" clearable placeholder="名称"></el-input>
                        </el-form-item>
                        <el-form-item label="隶属大区">
                            <el-select style='width:100%' v-model="form.name7" clearable placeholder="隶属大区" @change="change">
                                <el-option label="四川大区" value="1"></el-option>
                                <el-option label="湖南大区" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="隶属学区">
                            <el-select style='width:100%' v-model="form.name5" clearable placeholder="隶属学区">
                                <el-option v-for="item in dataNeithor" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学段">
                            <el-select placeholder="学段" v-model="form.name8" collapse-tags multiple clearable>
                                <el-option v-for="item in xxxxOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select placeholder="类型" v-model="form.name9" clearable>
                                <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span='12'>
                        <el-form-item label="校长">
                            <el-select clearable placeholder="校长" v-model="form.name10" @visible-change='remoteMethod5'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in xiaozhangData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教室数量">
                            <el-select clearable placeholder="教室数量" v-model="form.name11" @visible-change='remoteMethod4'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in roomData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学生总量">
                            <el-select clearable placeholder="学生总量" v-model="form.name12" @visible-change='remoteMethod'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in xueshengData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教师数量">
                            <el-select clearable placeholder="教师数量" v-model="form.name13" @visible-change='remoteMethod2'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in jiaoshiData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职工数量">
                            <el-select clearable placeholder="职工数量" v-model="form.name14" @visible-change='remoteMethod3'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in zhigongData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>

            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgNew')" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='40%' title="查看学校" :show-close='true' :visible.sync="dlgView">
            <el-row>
                <el-form :label-position="labelPosition" label-width="100px" :model="form">
                    <el-col :span='12'>
                        <el-form-item label="名称：">
                            成都东区天立学校
                        </el-form-item>
                        <el-form-item label="隶属大区：">
                            四川大区
                        </el-form-item>
                        <el-form-item label="隶属学区：">
                            成都学区
                        </el-form-item>
                        <el-form-item label="学段：">
                            小学
                        </el-form-item>
                        <el-form-item label="类型：">
                            A类
                        </el-form-item>
                    </el-col>
                    <el-col :span='12'>
                        <el-form-item label="校长：">
                            张三
                        </el-form-item>
                        <el-form-item label="教室数量：">
                            120
                        </el-form-item>
                        <el-form-item label="学生总量：">
                            2580
                        </el-form-item>
                        <el-form-item label="教师数量：">
                            502
                        </el-form-item>
                        <el-form-item label="职工数量：">
                            185
                        </el-form-item>
                    </el-col>
                </el-form>

            </el-row>
        </el-dialog>

        <!-- 修改 -->
        <el-dialog width='50%' title='修改学校' :show-close='true' :visible.sync='dlgEdit'>
            <el-row type="flex" class="row-bg">
                <el-form :label-position="labelPosition" label-width="100px" :model="form">
                    <el-col :span='12'>
                        <el-form-item label="名称">
                            <el-input style='width:100%' v-model="form.name20" clearable placeholder="名称"></el-input>
                        </el-form-item>
                        <el-form-item label="隶属大区">
                            <el-select style='width:100%' v-model="form.name21" clearable placeholder="隶属大区" @change="change">
                                <el-option label="四川大区" value="1"></el-option>
                                <el-option label="湖南大区" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="隶属学区">
                            <el-select style='width:100%' v-model="form.name22" clearable placeholder="隶属学区">
                                <el-option v-for="item in dataNeithor" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学段">
                            <el-select placeholder="学段" v-model="form.name23" collapse-tags multiple clearable>
                                <el-option v-for="item in xxxxOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select placeholder="类型" v-model="form.name24" clearable>
                                <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span='12'>
                        <el-form-item label="校长">
                            <el-select clearable placeholder="校长" v-model="form.name25" @visible-change='remoteMethod5'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in xiaozhangData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教室数量">
                            <el-select disabled clearable placeholder="教室数量" v-model="form.name26" @visible-change='remoteMethod4'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in roomData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学生总量">
                            <el-select disabled clearable placeholder="学生总量" v-model="form.name27" @visible-change='remoteMethod'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in xueshengData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教师数量">
                            <el-select disabled clearable placeholder="教师数量" v-model="form.name28" @visible-change='remoteMethod2'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in jiaoshiData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职工数量">
                            <el-select disabled clearable placeholder="职工数量" v-model="form.name29" @visible-change='remoteMethod3'
                                :loading='loading' loading-text="正在获取">
                                <el-option v-for="item in zhigongData" :key="item.id" :label="item.label" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>

            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgEdit')" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 导入 -->
        <el-dialog width='32%' title='导入' :show-close='true' :visible.sync='dlgUpload'>
            <el-form status-icon class="demo">
                <el-form-item>
                    <el-upload id='schoolManage' class='upload-demo' drag action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将Excel文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelDlg('psdForm','dlgUpload')" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import bumenschool from "../../../components/page/org/bumenschool.vue";
    export default {
        name: 'baseform',
        data: function () {
            return {
                xueshengData: [],
                jiaoshiData: [],
                zhigongData: [],
                xiaozhangData: [],
                roomData: [],
                currentPage: 1,
                fullscreenLoading: false,
                dlgView: false,
                dlgNew: false,
                dlgEdit: false,
                dlgUpload: false,
                labelPosition: 'right',
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区'
                    }, {
                        value: '泸州学区',
                        label: '泸州学区'
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区'
                    }]
                }, {
                    value: '湖南',
                    label: '湖南',
                    children: [{
                        value: '湘潭学区',
                        label: '湘潭学区'
                    }]
                }],
                typeOptions: [{
                    value: 'A类',
                    label: 'A类'
                }, {
                    value: 'B类',
                    label: 'B类'
                }, {
                    value: 'C类',
                    label: 'C类'
                }],
                xxxxOptions: [{
                    value: '幼儿园',
                    label: '幼儿园'
                }, {
                    value: '小学',
                    label: '小学'
                }, {
                    value: '初中',
                    label: '初中'
                }, {
                    value: '高中',
                    label: '高中'
                }],
                form: {
                    name1: '',
                    name2: [],
                    name3: [],
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: [],
                    name10: [],
                    name11: [],
                    name12: [],
                    name13: [],
                    name14: [],
                    name20: '成都东区天立学校',
                    name21: '四川大区',
                    name22: '成都学区',
                    name23: ['小学'],
                    name24: 'A类',
                    name25: '张三',
                    name26: '120',
                    name27: '2650',
                    name28: '502',
                    name29: '185',
                },
                tableData4: [{
                    F_A: '001',
                    F_B: '成都东区天立学校',
                    F_C: '天立',
                    F_D: 'A类',
                    F_E: '小学',
                    F_F: '张三',
                    F_G: '成都学区',
                    F_H: '四川',
                }, {
                    F_A: '002',
                    F_B: '泸州天立学校',
                    F_C: '天立',
                    F_D: 'A类',
                    F_E: '幼儿园',
                    F_F: '李四',
                    F_G: '泸州学区',
                    F_H: '四川',
                }],
                dataSchool: [{
                        value: '成都学区',
                        label: '成都学区',
                    },
                    {
                        value: '泸州学区',
                        label: '泸州学区',
                    },
                    {
                        value: '宜宾学区',
                        label: '宜宾学区',
                    }
                ],
                dataSchool2: [{
                        value: '湘潭学区',
                        label: '湘潭学区',
                    },
                    {
                        value: '张家界学区',
                        label: '张家界学区',
                    }
                ],
                dataNeithor: [

                ],
                loading: false
            }
        },
        components: {
            bumenschool
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
            },
            change(value) {
                if (value === '1') {
                    this.dataNeithor = this.dataSchool
                }
                if (value === '2') {
                    this.dataNeithor = this.dataSchool2
                }
            },
            remoteMethod(type) {
                if (type == true) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        //学生
                        this.xueshengData = [{
                            id: '2562',
                            label: '2562'
                        }]
                    }, 500);
                }
            },
            remoteMethod2(type) {
                if (type == true) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        //教师
                        this.jiaoshiData = [{
                            id: '502',
                            label: '502'
                        }]
                    }, 500);
                }
            },
            remoteMethod3(type) {
                if (type == true) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        //职工
                        this.zhigongData = [{
                            id: '185',
                            label: '185'
                        }]
                    }, 500);
                }
            },
            remoteMethod4(type) {
                if (type == true) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        //教室
                        this.roomData = [{
                            id: '70',
                            label: '70'
                        }]
                    }, 500);
                }
            },
            remoteMethod5(type) {
                if (type == true) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        //校长
                        this.xiaozhangData = [{
                            id: '张三',
                            label: '张三'
                        },{
                            id:'李四',
                            label:'李四'
                        },
                        {
                            id:'王二',
                            label:'王二'
                        }]
                    }, 500);
                }
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
