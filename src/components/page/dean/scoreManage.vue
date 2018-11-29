<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="10">
                <el-col :span='6'>
                    <el-tree :data="dataMenu" :default-expanded-keys="[2]" :indent='14' :expand-on-click-node="false"
                        :highlight-current='true' @node-click="handleNodeClick" node-key="id">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span style='font-size:12px'>
                                <i style='margin-right:3px;font-size:15px' class="iconfont" :class="node.icon"></i>{{
                                node.label }}</span>
                        </span>
                    </el-tree>
                </el-col>
                <el-col :span='18'>
                    <div class="searchitem">
                        <el-input style='width:100px' v-model="form.name6" placeholder="名称" clearable></el-input>
                    </div>
                    <div class="searchitem">
                        <el-cascader style='width:300px' v-model="form.classes" expand-trigger="hover"
                            :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable
                            placeholder="班级"></el-cascader>
                    </div>
                    <div class="searchitem">
                        <el-input style='width:120px' v-model="form.name7" placeholder="学科" clearable></el-input>
                    </div>
                    <div class="searchitem">
                        <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                    </div>
                    <div style="float:right;">
                        <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                            导入
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>模版下载</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <!--<el-button type="primary">导出</el-button>-->
                    </div>
                    <el-table :data="tableData" style="width: 100%" border center>
                        <!--<el-table-column type="selection" width="55">
                        </el-table-column>-->
                        <el-table-column prop="F_A" label="名称" align="center">
                        </el-table-column>
                        <el-table-column prop="F_B" label="班级" align="center">
                        </el-table-column>
                        <el-table-column prop="F_C" label="学期" align="center">
                        </el-table-column>
                        <el-table-column prop="F_D" label="学科" align="center">
                        </el-table-column>
                        <!-- <el-table-column prop="F_E" label="成绩" align="center">
                </el-table-column> -->
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button @click='view' type="text" size="small">
                                    查看
                                </el-button>
                                <!-- <el-button @click='dlgEdit = true' type="text" size="small">
                                    修改
                                </el-button> -->
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-row style='margin-top:150px'>
                        <el-col :span='24' style="text-align:center">
                            <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                                :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="200">
                            </el-pagination>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

        </div>

        <!-- 修改成绩 -->
        <el-dialog width='30%' title="修改成绩" :visible.sync="dlgEdit">
            <el-form ref="form" label-width="100px">
                <el-form-item prop="username" label="姓名">
                    <el-input v-model='form.name1' placeholder="姓名" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="班级">
                    <el-cascader style='width:100%' v-model="form.name2" expand-trigger="hover" :change-on-select="true"
                        :options="regionOptions" :show-all-levels="true" clearable placeholder="班级"></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="学期">
                    <el-select v-model="form.name3" placeholder="学期" clearable style="width:100%;">
                        <el-option label="18年上学期" value="1"></el-option>
                        <el-option label="18年下学期" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="学科">
                    <el-input v-model='form.name4' placeholder="学科" clearable></el-input>
                </el-form-item>
                <el-form-item label="成绩">
                    <el-input v-model='form.name5' placeholder="成绩" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgEdit = false" type='primary' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <!-- <el-dialog width='25%' title="查看成绩" :visible.sync="dlgView">
            <el-form ref="nameForm" label-width="120px">
                <el-form-item prop="username" label="姓名：">
                    <span>张三</span>
                </el-form-item>
                <el-form-item prop="username" label="班级：">
                    <span>三年级二班</span>
                </el-form-item>
                <el-form-item prop="username" label="学期：">
                    <span>18年上学期</span>
                </el-form-item>
                <el-form-item prop="username" label="学科：">
                    <span>数学</span>
                </el-form-item>
                <el-form-item prop="username" label="成绩：">
                    <span>100</span>
                </el-form-item>
            </el-form>
        </el-dialog> -->

        <!--导入-->
        <el-dialog width='32%' title='导入' :show-close='true' :visible.sync='dlgUpload'>
            <el-form status-icon class="demo">
                <el-form-item>
                    <el-upload id='scoreManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="this.dlgUpload = true" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tableData: [],
                tableData1: [{
                        F_A: '9.27数学随堂测试成绩',
                        F_B: '三年级1班',
                        F_C: '18年上学期',
                        F_D: '数学',
                        F_E: '100',
                    },
                    {
                        F_A: '6月月考统考成绩',
                        F_B: '三年级1班',
                        F_C: '18年上学期',
                        F_D: '语文',
                        F_E: '99',
                    }
                ],
                tableData2: [{
                        F_A: '课外地理测试成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '地理',
                        F_E: '100',
                    },
                    {
                        F_A: '4月月考统考成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '英语',
                        F_E: '99',
                    },
                    {
                        F_A: '随堂测试成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '化学',
                        F_E: '99',
                    }
                ],
                tableData3: [{
                        F_A: '课外地理测试成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '地理',
                        F_E: '100',
                    },
                    {
                        F_A: '4月月考统考成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '英语',
                        F_E: '99',
                    },
                    {
                        F_A: '随堂测试成绩',
                        F_B: '三年级2班',
                        F_C: '18年下学期',
                        F_D: '化学',
                        F_E: '99',
                    },
                    {
                        F_A: '9.27数学随堂测试成绩',
                        F_B: '三年级1班',
                        F_C: '18年上学期',
                        F_D: '数学',
                        F_E: '100',
                    },
                    {
                        F_A: '6月月考统考成绩',
                        F_B: '三年级1班',
                        F_C: '18年上学期',
                        F_D: '语文',
                        F_E: '99',
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
                dlgUpload: false,
                dlgEdit: false,
                dlgView: false,
                currentPage: 1,
                fullscreenLoading: false,
                form: {
                    name1: '张三',
                    name2: ['四川', '成都学区', '成都东区天立学校', '三年级二班'],
                    name3: '1',
                    name4: '数学',
                    name5: '100',
                    name6: '',
                    name7: '',
                    classes: []
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
                            children: [{
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
                                                    children: [{
                                                            id: 1712118,
                                                            label: '一年级',
                                                            children: [{
                                                                id: 1712118,
                                                                label: '1班'
                                                            }, {
                                                                id: 1712111118,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171212,
                                                            label: '二年级',
                                                            children: [{
                                                                id: 1712128,
                                                                label: '1班'
                                                            }, {
                                                                id: 17121211118,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171213,
                                                            label: '三年级',
                                                            children: [{
                                                                id: 17129128,
                                                                label: '1班'
                                                            }, {
                                                                id: 171291211118,
                                                                label: '2班'
                                                            }]
                                                        },
                                                    ]

                                                },
                                                {
                                                    id: 17122,
                                                    label: '初中',
                                                    children: [{
                                                            id: 171221,
                                                            label: '一年级',
                                                            children: [{
                                                                id: 1715221,
                                                                label: '1班'
                                                            }, {
                                                                id: 1715222,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171222,
                                                            label: '二年级',
                                                            children: [{
                                                                id: 1716221,
                                                                label: '1班'
                                                            }, {
                                                                id: 1716222,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171223,
                                                            label: '三年级',
                                                            children: [{
                                                                id: 1717221,
                                                                label: '1班'
                                                            }, {
                                                                id: 1717222,
                                                                label: '2班'
                                                            }]
                                                        },
                                                    ]

                                                },
                                                {
                                                    id: 17123,
                                                    label: '小学',
                                                    children: [{
                                                            id: 171231,
                                                            label: '一年级',
                                                            children: [{
                                                                id: 1731231,
                                                                label: '1班'
                                                            }, {
                                                                id: 1731232,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171232,
                                                            label: '二年级',
                                                            children: [{
                                                                id: 1731231,
                                                                label: '1班'
                                                            }, {
                                                                id: 1731232,
                                                                label: '2班'
                                                            }]
                                                        },
                                                        {
                                                            id: 171233,
                                                            label: '三年级',
                                                            children: [{
                                                                id: 1731231,
                                                                label: '1班'
                                                            }, {
                                                                id: 1731232,
                                                                label: '2班'
                                                            }]
                                                        },
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
                                            },
                                            {
                                                id: 17732,
                                                label: '小学'
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
                                    id: 17129,
                                    label: '沙坪坝天立学校',
                                    icon: 'icon-classroom',
                                    children: [{
                                            id: 171291,
                                            label: '初中'
                                        },
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
                                        },
                                        {
                                            id: 18122,
                                            label: '初中'
                                        }
                                    ]
                                }]
                            }]
                        }
                    ]
                }],
            }
        },
        mounted() {
            this.tableData = this.tableData3
        },
        methods: {
            handleNodeClick(data, node) {
                if (data.id == 17121) {
                    this.tableData = this.tableData1
                } else
                if (data.id == 17122) {
                    this.tableData = this.tableData2
                } else {
                    this.tableData = this.tableData3
                }
            },
            //查看
            view() {
                this.$router.push('/scoreList')
            }
        }
    }

</script>

<style>
    #scoreManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width: 362px;
    }

    .demo {
        margin: 0 auto;
    }

    #scoreManage .el-upload {
        display: block;
    }

    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

    .el-button+.el-button {
        margin-left: 0px;
    }

</style>
