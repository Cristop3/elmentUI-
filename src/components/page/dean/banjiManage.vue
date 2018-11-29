<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>班级管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="10">
                <el-col :span='6'>
                    <el-tree  :data="dataMenu"  :default-expanded-keys="[2]" :indent='14'
                        :expand-on-click-node="false" :highlight-current='true' @node-click="handleNodeClick" node-key="id">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span style='font-size:12px'>
                                <i style='margin-right:3px;font-size:15px' class="iconfont" :class="node.icon"></i>{{ node.label }}</span>
                        </span>
                    </el-tree>
                </el-col>
                <el-col :span='18'>
                    <div class="searchitem">
                <el-input v-model="form.name1" placeholder="班级" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-cascader style='width:300px' v-model="form.name2" expand-trigger="hover" :change-on-select="true"
                    :options="regionOptions" :show-all-levels="true" clearable placeholder="学校"></el-cascader>
            </div>
            <div class="searchitem">
                <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <div style="float:right;">
                <el-button type="primary" @click='dlgNew = true'>新建</el-button>

                <!--<el-dropdown split-button type="primary" @click='dlgUpload = true'>
                    导入
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>模版下载</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>-->
            </div>

            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="班级" align="center">
                </el-table-column>
                <!--<el-table-column prop="F_B" label="隶属校区" align="center">
                </el-table-column>
                <el-table-column prop="F_E" label="隶属大区" align="center">
                </el-table-column>-->
                <el-table-column prop="F_BE" label="学校" align="center">
                </el-table-column>
                <el-table-column prop="F_C" label="班主任" align="center">
                </el-table-column>
                 <el-table-column prop="F_J" label="开班年份" align="center">
                </el-table-column>
                 <el-table-column prop="F_K" label="学段" align="center">
                </el-table-column>
                 <el-table-column prop="F_L" label="年级" align="center">
                </el-table-column>
                <el-table-column prop="F_F" label="描述" align="center">
                </el-table-column>
                <!-- <el-table-column prop="F_D" label="最近修改时间" align="center">
                </el-table-column> -->
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
                </el-col>
            </el-row>
            
        </div>

        <!-- 新建班级 -->
        <el-dialog width='35%' title="新建班级" :visible.sync="dlgNew">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="班级名称" v-model='form.name6' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学校">
                    <el-cascader style='width:100%' v-model="form.name10" expand-trigger="hover" :change-on-select="true"
                        :options="regionOptions" :show-all-levels="true" clearable placeholder="学校"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="学段">
                    <el-select filterable style='width:100%'  v-model='form.name77'   clearable placeholder="类型">
                        <el-option label="幼儿园" value="3"></el-option>
                        <el-option label="高中" value="4"></el-option>
                        <el-option label="初中" value="5"></el-option>
                        <el-option label="小学" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="开班年份">
                    <el-date-picker  style='width:100%'
                    type="year"
                     v-model='form.name88'
                    placeholder="开班年份">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input placeholder="描述" type='textarea' rows='4' v-model='form.name8' clearable></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='35%' title="修改班级" :visible.sync="dlgEdit">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="班级">
                    <el-input placeholder="班级" v-model='form.name11' clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="学校">
                    <el-cascader style='width:100%' v-model="form.name12" expand-trigger="hover" :change-on-select="true"
                        :options="regionOptions" :show-all-levels="true" clearable placeholder="学校"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="学段">
                    <el-select filterable style='width:100%'  v-model='form.name777'   clearable placeholder="类型">
                        <el-option label="幼儿园" value="3"></el-option>
                        <el-option label="高中" value="4"></el-option>
                        <el-option label="初中" value="5"></el-option>
                        <el-option label="小学" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="开班年份">
                    <el-date-picker  style='width:100%'
                    type="year"
                     v-model='form.name888'
                    placeholder="开班年份">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="username" label="班主任">
                    <el-select clearable placeholder="班主任" v-model='form.name13' style="width:100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input placeholder="描述" type='textarea' rows='4' v-model='form.name14' clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit = false" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='35%' title="查看班级" :visible.sync="dlgView">
            <el-form ref="nameForm" label-width="120px">
                <el-form-item prop="username" label="班级：">
                    三年级二班
                </el-form-item>
                <el-form-item prop="username" label="学校：">
                    四川/成都东区天立校区
                </el-form-item>
                <el-form-item prop="username" label="班主任：">
                    张三
                </el-form-item>
                <el-form-item prop="username" label="开班年份：">
                    2018
                </el-form-item>
                <el-form-item prop="username" label="学段：">
                    小学
                </el-form-item>
                <el-form-item prop="username" label="年级：">
                    三年级
                </el-form-item>
                <el-form-item prop="username" label="描述：">
                    创建三年级二班
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 上传附件 -->
        <el-dialog width='32%' title='导入' :visible.sync='dlgUpload'>
            <el-form :model="psdForm" status-icon ref="psdForm" class="demo">
                <el-form-item>
                    <el-upload id='banjiManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
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
    export default {
        data: function () {
            return {
                tableData: [{
                        F_A: '三年级二班',
                        F_B: '成都东区天立校区',
                        F_C: '张三',
                        F_D: '2018-02-12',
                        F_E: '四川大区',
                        F_F: '创建三年级二班',
                        F_BE: '成都东区天立校区',
                        F_J:'2018',
                        F_K:'小学',
                        F_L:'三年级',
                    },
                    {
                        F_A: '五年级一班',
                        F_B: '重庆渝中区天立校区',
                        F_C: '李四',
                        F_D: '2017-09-19',
                        F_E: '重庆大区',
                        F_F: '创建五年级一班',
                        F_BE: '重庆渝中天立校区',
                        F_J:'2018',
                        F_K:'初中',
                        F_L:'五年级',
                    }
                ],
                options: [{
                    value: '1',
                    label: '张三'
                }, {
                    value: '2',
                    label: '李四'
                }, {
                    value: '3',
                    label: '王二'
                }],
                psdForm: {
                    pass: '',
                    checkPass: ''
                },
                //左侧组织结构树
                dataMenu: [{
                    id: 2,
                    label: '神州天立集团',
                    icon: 'el-icon-menu',
                    children: [{
                            id: 7,
                            label: '四川大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [
                                {
                                    id: 17,
                                    label: '成都学区',
                                    icon: 'icon-_yijicaidanduanxinguanli',
                                    children: [{
                                            id: 1712,
                                            label: '成都东区天立学校',
                                            icon: 'icon-classroom',
                                            children: [{
                                                    id: 17121,
                                                    label: '高中',
                                                    children:[{
                                                        id:171211,
                                                        label:'一年级'},
                                                        {
                                                        id:171212,
                                                        label:'二年级'},
                                                        {
                                                        id:171213,
                                                        label:'三年级'},
                                                    ]
                                                },
                                                {
                                                    id: 17122,
                                                    label: '初中',
                                                    children:[{
                                                        id:171221,
                                                        label:'一年级'},
                                                        {
                                                        id:171222,
                                                        label:'二年级'},
                                                        {
                                                        id:171223,
                                                        label:'三年级'},
                                                    ]
                                                },
                                                {
                                                    id: 17123,
                                                    label: '小学',
                                                    children:[{
                                                        id:171231,
                                                        label:'一年级'},
                                                        {
                                                        id:171232,
                                                        label:'二年级'},
                                                        {
                                                        id:171233,
                                                        label:'三年级'},
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: 1713,
                                            label: '成都南区天立学校',
                                            icon: 'icon-classroom',
                                            children: [{
                                                    id: 17131,
                                                    label: '高中'
                                                },
                                                {
                                                    id: 17132,
                                                    label: '初中'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 171,
                                    label: '泸州学区',
                                    icon: 'icon-_yijicaidanduanxinguanli',
                                    children: [{
                                    id: 1773,
                                    label: '泸州天立学校',
                                    icon: 'icon-classroom',
                                     children: [{
                                                id: 17731,
                                                label: '初中'
                                            }
                                        ]
                                }]
                                },
                            ]
                        },
                        {
                            id: 8,
                            label: '重庆大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [{
                                id: 19,
                                label: '沙坪坝学区',
                                icon: 'icon-_yijicaidanduanxinguanli',
                                children: [{
                                    id: 1712,
                                    label: '沙坪坝天立学校',
                                    icon: 'icon-classroom',
                                    children: [
                                        {
                                            id: 171292,
                                            label: '小学'
                                        }
                                    ]
                                }]
                            }]
                        },
                        {
                            id: 9,
                            label: '湖南大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [{
                                id: 18,
                                label: '湘潭学区',
                                icon: 'icon-_yijicaidanduanxinguanli',
                                children: [{
                                    id: 1812,
                                    label: '湘潭天立学校',
                                    icon: 'icon-classroom',
                                    children: [{
                                            id: 18121,
                                            label: '高中'
                                        }
                                    ]
                                }]
                            }]
                        }
                    ]
                }],
                dlgNew: false,
                dlgEdit: false,
                dlgUpload: false,
                dlgView: false,
                fullscreenLoading: false,
                currentPage: 1,
                time: [],
                form: {
                    type: '',
                    options: [],
                    name1: '',
                    name2: [],
                    name3: [],
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: [],
                    name10: [],
                    name11: '三年级二班',
                    name12: ['四川', '成都学区', '成都东区天立学校'],
                    name13: '张三',
                    name14: '创建三年级二班',
                    name77:'',
                    name88:'',
                    name99:'',
                    name777:'6',
                    name888:'2018',
                    name999:'5',
                },
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区',
                        children: [{
                            value: '成都天立学校',
                            label: '成都天立学校'
                        }, {
                            value: '成都东区天立学校',
                            label: '成都东区天立学校'
                        }]
                    }, {
                        value: '泸州学区',
                        label: '泸州学区',
                        children: [{
                            value: '泸州天立学校',
                            label: '泸州天立学校'
                        }, {
                            value: '泸州东区天立学校',
                            label: '泸州东区天立学校'
                        }]
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区',
                        children: [{
                            value: '宜宾天立学校',
                            label: '宜宾天立学校'
                        }, {
                            value: '宜宾东区天立学校',
                            label: '宜宾东区天立学校'
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
                            label: '湘潭天立学校'
                        }, {
                            value: '湘潭东区天立学校',
                            label: '湘潭东区天立学校'
                        }]
                    }]
                }],
            }
        },
        methods: {
            handleNodeClick(){

            }
        }
    }

</script>
<style>
    #banjiManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width: 362px;
    }

    .demo {
        margin: 0 auto;
    }

    #banjiManage .el-upload {
        display: block;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>

