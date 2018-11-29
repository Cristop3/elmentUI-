<template>
    <div>

        <div class="container">
            <el-row :gutter='4'>
                <el-col :span='4'>
                    <el-input placeholder="名称" v-model="form.name1" clearable>
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-row>
            <div style="margin-top:20px;">
                <zk-table index-text="#" :data="dataDept" :tree-type="true" :columns="columns" :selection-type="false"
                    :expand-type="false">
                    <template slot="actions" slot-scope="scope">
                        <el-button v-if='scope.row.isShool === "0"' type="text" @click="dlgEdit=true">修改</el-button>
                        <el-button v-if='scope.row.isShool === "0"' type="text" @click="dlgRelation=true">角色</el-button>
                          
                        <el-button v-if='scope.row.isShool === "0"' type="text" @click="dlgZhiwei=true">职位</el-button>
                        <el-button v-if='scope.row.isShool === "0"' type="text" @click="dlgGangwei=true">岗位</el-button>
                        <el-button type="text" @click="dlgNew =true">新建</el-button>
                    </template>
                </zk-table>
            </div>
        </div>

        <!--修改-->
        <el-dialog width='30%' title='修改部门' :visible.sync='dlgEdit'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级部门">
                    <el-input :disabled="true" v-model="form.name6" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model="form.name7" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select filterable style='width:100%' v-model="form.name8" multiple collapse-tags clearable placeholder="负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input type="textarea" rows="4" placeholder="描述" v-model="form.name9"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 新增 -->
        <el-dialog width='30%' title='新建部门' :visible.sync='dlgNew'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级部门">
                    <el-cascader clearable style='width:100%' v-model="form.name2" :options="parentDeptOpts"
                        change-on-select></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model="form.name3" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name4" clearable placeholder="负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input type="textarea" rows="4" v-model="form.name5" placeholder="描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 关联角色 -->
        <el-dialog width='40%' title='关联角色' :visible.sync='dlgRelation'>
            <el-table border :data="dataScope" max-height="250" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="角色名" prop="label">
                </el-table-column>
                <el-table-column label="描述" prop="desc">
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgRelation = false'>关联</el-button>
            </div>
        </el-dialog>

         <!-- 关联岗位 -->
        <el-dialog width='550px' title='关联岗位' :visible.sync='dlgGangwei'>
            <el-transfer :titles="['岗位', '配置岗位']" v-model="vGangwei" :data="dataGangwei"></el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="this.dlgGangwei = false" size="small">关联</el-button>
            </div>
        </el-dialog>

        <!-- 关联职位 -->
        <el-dialog width='550px' title='关联职位' :visible.sync='dlgZhiwei'>
            <el-transfer :titles="['职位', '配置职位']" v-model="vZhiwei" :data="dataZhiwei"></el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="this.dlgZhiwei = false" size="small">关联</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<style>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

</style>

<script>
    export default {
        name: 'baseform',
        data: function () {
            //岗位
            const generateData = _ => {
                const data = []
                const data2 = ['运营岗', '教师岗', '财务岗', '招生岗'];
                for (let i = 0; i < data2.length; i++) {
                    data.push({
                        key: i,
                        label: data2[i]
                    });
                }
                return data;
            };
            //职位
            const generateData2 = _ => {
                const data3 = []
                const data4 = ['年级组长', '高级教师', '学生处主任', '教研室主任', '科系主任', '班主任', '辅导员'];
                for (let i = 0; i < data4.length; i++) {
                    data3.push({
                        key: i,
                        label: data4[i]
                    });
                }
                return data3;
            };
            return {
                form: {
                    name: '',
                    name1: '',
                    name2: [],
                    name3: '',
                    name4: [],
                    name5: '',
                    name6: '总工办',
                    name7: '马德彪',
                    name8: ['1'],
                    name9: '',
                },
                vGangwei: [],
                dlgGangwei: false,
                vZhiwei: [],
                dlgZhiwei: false,
                //职位绑定
                dataZhiwei: generateData2(),
                //岗位绑定
                dataGangwei: generateData(),
                dlgRelation: false,
                //角色绑定
                dataScope: [{
                        id: 1,
                        label: '教务',
                        desc: '创建教务角色'
                    },
                    {
                        id: 3,
                        label: '行政',
                        desc: '创建行政角色'
                    }, {
                        id: 5,
                        label: '财务',
                        desc: '创建财务角色'
                    }
                ],
                dlgEdit: false,
                dlgNew: false,
                parentDeptOpts: [{
                    value: 'no',
                    label: '无',
                }, {
                    value: '总工办',
                    label: '总工办',
                    children: [{
                        value: '后勤部',
                        label: '后勤部',
                    }, {
                        value: '卫生部',
                        label: '卫生部',
                    }, {
                        value: '校寝办',
                        label: '校寝办',
                    }]
                }, {
                    value: '财务部',
                    label: '财务部',
                    children: [{
                        value: '学费处',
                        label: '学费处',
                    }, {
                        value: '住宿处',
                        label: '住宿处',
                    }, {
                        value: '考试处',
                        label: '考试处',
                    }]
                }],
                columns: [
                    {
                    label: '名称',
                    prop: 'name',
                    width: '300px',
                }, {
                    label: '负责人',
                    prop: 'manager',
                    width: '110px',
                }, {
                    label: '描述',
                    prop: 'desc',
                }, {
                    label: '操作',
                    minWidth: '150px',
                    type: 'template',
                    template: 'actions',
                }],
                dataDept: [{
                    isShool:'aaaaa',
                    name: '成都学区',
                    manager: '张三、李四',
                    desc: '创建成都学区',
                    children: [{
                            isShool:'0',
                            name: '总工办',
                            manager: '马德彪',
                            desc: '',
                            children: [{
                                isShool:'0',
                                name: '后勤部',
                                manager: '令辉煌',
                                desc: '负责学校后勤管理',
                            }, {
                                isShool:'0',
                                name: '卫生部',
                                manager: '张雅瑾',
                                desc: '负责学校外部卫生整理',
                            }, {
                                isShool:'0',
                                name: '校寝办',
                                manager: '陈峻',
                                desc: '负责学校学生寝室管理',
                            }, ]
                        },
                        {
                            isShool:'0',
                            name: '财务部',
                            manager: '秦晓辉',
                            desc: '学校财务管理',
                            children: [{
                                isShool:'0',
                                name: '学费处',
                                manager: '袁弘',
                                desc: '学费',
                            }, {
                                isShool:'0',
                                name: '住宿处',
                                manager: '陈苑淇',
                                desc: '住宿费',
                            }, {
                                isShool:'0',
                                name: '考试处',
                                manager: '王奎荣',
                                desc: '补考重修费用',
                            }]
                        }
                    ]
                }, {
                    isShool:'1',
                    name: '重庆学区',
                    manager: '李四',
                    desc: '创建重庆学区',
                    children:[
                        {
                            isShool:'0',
                            name: '招生办',
                            manager: '孙杨',
                            desc: '负责学校招生',
                            children: [{
                                isShool:'0',
                                name: '人事部',
                                manager: '刘家辉',
                                desc: '负责学校招新生，规范人才培养',
                            }]  
                        }
                    ]
                }],
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
        }
    }

</script>
