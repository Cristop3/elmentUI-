<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>角色管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter='4' style='margin-bottom:20px'>
                <el-col :span='4'>
                    <el-input placeholder="角色名" clearable v-model="form.name1">
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>
                <el-col :span='18' style='text-align:right'>
                    <el-button type="primary" @click="dlgNew = true">新建</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_A" label="角色名" align="center">
                </el-table-column>
                <el-table-column prop="F_D" label="描述" align="center">
                </el-table-column>
                <!-- <el-table-column prop="F_B" label="状态" align="center">
                    </el-table-column> -->
                <el-table-column prop="F_C" label="创建时间" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                        <el-button @click='dlgMenu = true' type="text" size="small">
                            资源授权
                        </el-button>
                        <el-button @click='dlgApp = true' type="text" size="small">
                            应用授权
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

        <!-- 修改角色 -->
        <el-dialog width='25%' title='修改角色' :visible.sync='dlgEdit'>
            <el-form :label-position="labelPosition" label-width="60px">
                <el-form-item label='名称'>
                    <el-input v-model='form.name' clearable placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item label='描述'>
                    <el-input v-model="form.miaosu" type="textarea" rows="4" placeholder="描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgEdit')" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 绑定菜单 -->
        <el-dialog width='40%' title='授权资源' :visible.sync='dlgMenu'>
            <div>
                <el-tree ref="tree" :data="dataMenu" accordion :indent='14' :default-expanded-keys="[2]"
                    node-key="id" show-checkbox>
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span style='font-size:12px'><i style='margin-right:3px;font-size:15px' class="iconfont" :class="node.icon"></i>{{ node.label }}</span>
                    </span>
                </el-tree>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('psdForm','dlgMenu')" size="small">授权</el-button>
            </div>
        </el-dialog>

        <!-- 新增角色 -->
        <el-dialog width='25%' title='新增角色' :visible.sync='dlgNew'>
            <el-form :label-position="labelPosition" label-width="60px">
                <el-form-item label='名称'>
                    <el-input placeholder="名称" clearable></el-input>
                </el-form-item>
                <el-form-item label='描述'>
                    <el-input type="textarea" rows="4" placeholder="描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 授权应用 -->
        <el-dialog width='40%' title='授权应用' :visible.sync='dlgApp'>
            <el-table border :data="dataScope" max-height="250" style="width: 100%">
                <el-table-column type="selection" width="55" align="center">
                </el-table-column>
                <el-table-column label="名称" prop="F_NAME" align="center">
                </el-table-column>
                <el-table-column label="图标" align="center">
                    <template slot-scope="scope">
                        <img style='width:30px;height:30px' :src="scope.row.F_IMG" />
                    </template>
                </el-table-column>
                <el-table-column prop="F_NOTES" label="简介" align="center">
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgApp = false'>授权</el-button>
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
                    name: '教务',
                    miaosu: '创建教务角色'
                },
                tableData: [{
                        F_A: '教务',
                        F_B: '正常',
                        F_C: '2018-02-12',
                        F_D: '创建教务角色',
                    },
                    {
                        F_A: '后勤',
                        F_B: '正常',
                        F_C: '2018-03-12',
                        F_D: '创建后勤角色',
                    },
                    {
                        F_A: '财务',
                        F_B: '正常',
                        F_C: '2018-04-14',
                        F_D: '创建财务角色',
                    },
                    {
                        F_A: '行政',
                        F_B: '正常',
                        F_C: '2018-07-12',
                        F_D: '创建行政角色',
                    }
                ],
                dlgEdit: false,
                dlgMenu: false,
                currentPage: 1,
                dlgNew: false,
                dlgApp: false,
                labelPosition: 'right',
                dataMenu: [{
                    id: 2,
                    label: '天立智慧校园平台',
                    icon: 'el-icon-menu',
                    children: [{
                            id: 4,
                            label: '系统首页',
                            icon: 'icon-xitongshouye'
                        },
                        {
                            id: 5,
                            label: '系统管理',
                            icon: 'icon-jituanguanli',
                            children: [{
                                    id: 11,
                                    label: '组织架构',
                                    icon: 'icon-zuzhijiagou',
                                    children: [{
                                            id: 111,
                                            label: '新建组织',
                                            icon:'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改组织',
                                            icon:'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 1222,
                                    label: '字典管理',
                                    icon: 'icon-xuexiaoguanli'
                                },
                                {
                                    id: 12,
                                    label: '职位管理',
                                    icon: 'icon-xuexiaoguanli',
                                    children: [{
                                            id: 111,
                                            label: '新建职位',
                                            icon:'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改职位',
                                            icon:'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 13,
                                    label: '岗位管理',
                                    icon: 'icon-gangweiguanli',
                                    children: [{
                                            id: 111,
                                            label: '新建岗位',
                                            icon:'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改岗位',
                                            icon:'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 14,
                                    label: '等级管理',
                                    icon: 'icon-zhiweiguanli-',
                                    children: [{
                                            id: 111,
                                            label: '新建等级',
                                            icon:'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改等级',
                                            icon:'el-icon-tickets'
                                        }
                                    ]
                                },
                            ]

                        },
                        {
                            id: 6,
                            label: '权限管理',
                            icon: 'icon-quanxian',
                            children: [{
                                    id: 15,
                                    label: '教职工管理',
                                    icon: 'icon-jiaozhigongguanli'
                                },
                                {
                                    id: 16,
                                    label: '角色管理',
                                    icon: 'icon-jiaoseguanli'
                                },
                                {
                                    id: 17,
                                    label: '菜单管理',
                                    icon: 'icon-zuzhijiagou'
                                },
                            ]
                        },
                        {
                            id: 7,
                            label: '消息管理',
                            icon: 'icon-xiaoxiguanli',
                            children: [{
                                id: 17,
                                label: '短信',
                                icon: 'icon-_yijicaidanduanxinguanli'
                            }, ]
                        },
                        {
                            id: 8,
                            label: '教务管理',
                            icon: 'icon-jiaowuguanli',
                            children: [{
                                    id: 18,
                                    label: '学期管理',
                                    icon: 'icon-xueqiguanli',
                                },
                                {
                                    id: 19,
                                    label: '学科管理',
                                    icon: 'icon-xuekeguanli',
                                },
                                {
                                    id: 210,
                                    label: '班级管理',
                                    icon: 'icon-banjiguanli',
                                },
                                {
                                    id: 20,
                                    label: '考试管理',
                                    icon: 'icon-zaixiankaoshiguanli',
                                },
                                {
                                    id: 21,
                                    label: '成绩管理',
                                    icon: 'icon-chengjiguanli'
                                },
                                {
                                    id: 22,
                                    label: '教室管理',
                                    icon: 'icon-classroom'
                                },
                                {
                                    id: 23,
                                    label: '课程表管理',
                                    icon: 'icon-kechengbiao'
                                },
                                {
                                    id: 24,
                                    label: '学生管理',
                                    icon: 'icon-kechengbiao'
                                },
                            ]
                        },
                        {
                            id: 9,
                            label: '应用管理',
                            icon: 'icon-yingyongguanli'
                        }
                    ]
                }],
                //授权应用
                dataScope: [{
                        id: 1,
                        F_NAME: '钉钉',
                        F_IMG: './static/img/dingding.png',
                        F_NOTES: '钉钉是阿里旗下一款产品'
                    },
                    {
                        id: 3,
                        F_NAME: '奥数村',
                        F_IMG: './static/img/bear.png',
                        F_NOTES: '奥数村针对学生奥数学习'
                    },
                    // {
                    //     id: 4,
                    //     F_NAME: '奥数村',
                    //     F_IMG: './static/img/bear.png',
                    //     F_NOTES:'奥数村针对学生奥数学习'
                    // },
                    // {
                    //     id: 5,
                    //     F_NAME: '奥数村',
                    //     F_IMG: './static/img/bear.png',
                    //     F_NOTES:'奥数村针对学生奥数学习'
                    // }
                ],
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
            //清空选项
            retset() {
                this.$refs.tree.setCheckedKeys([]);
            }
        }
    }

</script>

<style scoped>
    .el-button+.el-button {
        margin-left: 0px;
    }

</style>
