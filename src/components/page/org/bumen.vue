<template>
    <div>
        <div class="container">
            <el-row :gutter='4'>
                <el-col :span='4'>
                    <el-input placeholder="名称" v-model="form.name5" clearable>
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>
                <el-col :span='18' style="text-align:right">
                    <el-button type="primary" @click="dlgNew = true">新建</el-button>
                    <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                        导入
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>模版下载</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
            <div style="margin-top:20px;">
                <zk-table index-text="#" :data="data2" :tree-type="true" :columns="columns" :selection-type="false"
                    :expand-type="false">
                    <template slot="actions" slot-scope="scope">
                        <el-button type="text" @click="dlgEdit=true">修改</el-button>
                        <el-button type="text" @click="dlgRelation=true">角色</el-button>
                        <el-button type="text" @click="dlgZhiwei=true">职位</el-button>
                        <el-button type="text" @click="dlgGangwei=true">岗位</el-button>
                        <el-button type="text" @click="dlgNew =true">新建</el-button>
                    </template>
                </zk-table>
            </div>
        </div>



        <el-dialog width='30%' title='修改部门' :visible.sync='dlgEdit'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item label="上级部门">
                    <el-cascader :disabled="true" style='width:100%' v-model="form.name1" :options="parentDeptOpts"
                        change-on-select></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" v-model="form.name2" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name3" clearable
                        placeholder="负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述：">
                    <el-input type="textarea" rows="4" placeholder="描述" v-model="form.name4"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false' size="small">修改</el-button>
            </div>
        </el-dialog>
        <!-- 新增 -->
        <el-dialog width='30%' title='新增部门' :visible.sync='dlgNew'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级部门">
                    <el-cascader style='width:100%' v-model="form.name6" :options="parentDeptOpts" change-on-select></el-cascader>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input placeholder="名称" clearable v-model="form.name7"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name8" clearable
                        placeholder="负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input type="textarea" rows="4" v-model="form.name9" placeholder="描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgNew = false" size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 上传附件 -->
        <el-dialog width='32%' title='导入' :visible.sync='dlgUpload'>
            <el-form status-icon class="demo">
                <el-form-item>
                    <el-upload style="text-align:center" id='bumen' :limit="1" :auto-upload="false" class="upload-demo"
                        drag action="https://jsonplaceholder.typicode.com/posts/">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将Excel文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelDlg('psdForm','dlgUpload')" type='primary' size="small">取消</el-button>
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

    #bumen .el-upload--text {
        height: 182px;
        width: 362px;
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
                vGangwei: [],
                dlgGangwei: false,
                vZhiwei: [],
                dlgZhiwei: false,
                //职位绑定
                dataZhiwei: generateData2(),
                //岗位绑定
                dataGangwei: generateData(),
                data2: [{
                    name: '总裁办',
                    manager: '牛总',
                    desc: '',
                    children: [{
                        name: '计划运营中心',
                        manager: '令辉煌',
                        desc: '负责对年度目标执行计划及过程控制进行检查',
                    }, {
                        name: '信息体系部',
                        manager: '张雅瑾',
                        desc: '负责公司信息化建设的总体规划',
                    }, {
                        name: '对外交流及行政部',
                        manager: '陈峻',
                        desc: '对外交流及行政',
                    }]
                }, {
                    name: '资金财务中心',
                    manager: '金总',
                    desc: '资金财务中心',
                    children: [{
                        name: '财务部',
                        manager: '袁弘',
                        desc: '财务',
                    }, {
                        name: '资金部',
                        manager: '陈苑淇',
                        desc: '资金',
                    }, {
                        name: '上市办公室',
                        manager: '王奎荣',
                        desc: '上市',
                    }]
                }, {
                    name: '人力资源中心',
                    manager: '孙杨',
                    desc: '人力资源中心',
                    children: [{
                        name: '人事部',
                        manager: '刘家辉',
                        desc: '负责人事考核、考查工作。建立人事档案资料库，规范人才培养',
                    }, {
                        name: '培训部',
                        manager: '邢岷山',
                        desc: '新员工入职培训、在岗跟进培训',
                    }, {
                        name: '宣传及品牌部',
                        manager: '罗瑶',
                        desc: '打造品牌领导模式，使品牌成为企业整合的源动力',
                    }]
                }],

                columns: [{
                    label: '名称',
                    prop: 'name',
                    width: '300px',
                }, {
                    label: '负责人',
                    prop: 'manager',
                    width: '90px',
                }, {
                    label: '描述',
                    prop: 'desc',
                }, {
                    label: '操作',
                    minWidth: '120px',
                    type: 'template',
                    template: 'actions',
                }],
                parentDeptOpts: [{
                    value: 'no',
                    label: '无',
                }, {
                    value: '总裁办',
                    label: '总裁办',
                    children: [{
                        value: '计划运营中心',
                        label: '计划运营中心',
                    }, {
                        value: '信息体系部',
                        label: '信息体系部',
                    }, {
                        value: '对外交流及行政部',
                        label: '对外交流及行政部',
                    }]
                }, {
                    value: '资金财务中心',
                    label: '资金财务中心',
                    children: [{
                        value: '财务部',
                        label: '财务部',
                    }, {
                        value: '资金部',
                        label: '资金部',
                    }, {
                        value: '上市办公室',
                        label: '上市办公室',
                    }]
                }],
                form: {
                    name1: ['总裁办'],
                    name2: '计划运营中心',
                    name3: ['1'],
                    name4: '',
                    name5: '',
                    name6: [],
                    name7: '',
                    name8: [],
                    name9: '',
                },
                dlgEdit: false,
                dlgNew: false,
                dlgUpload: false,
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
            }
        },
        methods: {
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
        }
    }

</script>
