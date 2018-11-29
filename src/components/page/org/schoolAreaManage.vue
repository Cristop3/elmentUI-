<template>
    <div>
        <el-tabs value='学区信息' tab-position="right">
            <el-tab-pane label="学区信息" name='学区信息'>
                <div class='container'>
                    <div class="searchitem">
                        <el-input v-model="form.name1" placeholder="名称" clearable></el-input>
                    </div>
                    <div class="searchitem">
                        <el-select placeholder="隶属大区" v-model="form.name2" clearable>
                            <el-option v-for="item in xxxxOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="searchitem">
                        <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                    </div>
                    <div style="float:right;">
                        <el-button type="primary" @click="dlgNew = true">新建</el-button>
                    </div>

                    <el-row>
                        <el-table :data="tableData4" style="width: 100%" border center>
                            <el-table-column prop="date" label="名称" align='center'>
                            </el-table-column>
                            <el-table-column prop="name" label="隶属大区" align='center'>
                            </el-table-column>
                            <el-table-column prop="province" label="负责人" align='center'>
                            </el-table-column>
                            <el-table-column prop="notes" label="描述" align='center'>
                            </el-table-column>

                            <el-table-column label="操作" align='center'>
                                <template slot-scope="scope">
                                    <el-button @click='dlgEdit = true' type="text" size="small">
                                        修改
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-row>
                    <el-row style='margin-top:150px'>

                        <el-col :span='24' style="text-align:center">
                            <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                                :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="200">
                            </el-pagination>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="部门管理" name='部门管理'>
                <bumenShoolArea></bumenShoolArea>
            </el-tab-pane>
        </el-tabs>


        <el-dialog width='30%' title='新建学区' :visible.sync='dlgNew'>
            <el-form :model="form" status-icon ref="form" label-width="75px" class="demo-ruleForm">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name1" auto-complete="off" clearable placeholder='名称'></el-input>
                </el-form-item>
                <!-- <el-form-item prop="username" label="地址">
                    <el-input v-model="form.name5" auto-complete="off" clearable placeholder='学区地址'></el-input>
                </el-form-item> -->
                <el-form-item prop="username" label="隶属大区">
                    <el-select style='width:100%' v-model="form.name2" placeholder="隶属大区">
                        <el-option label="四川大区" value="四川大区"></el-option>
                        <el-option label="重庆大区" value="重庆大区"></el-option>
                        <el-option label="云南大区" value="云南大区"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select style="width:100%;" multiple collapse-tags v-model="form.name3">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input v-model="form.name12" rows='4' type='textarea' auto-complete="off" clearable placeholder='描述'></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlgNew')" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='30%' title='修改大区' :visible.sync='dlgEdit'>
            <el-form :model="form" status-icon ref="form" label-width="75px" class="demo-ruleForm">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name6" auto-complete="off" clearable placeholder='学区名称'></el-input>
                </el-form-item>
                <!-- <el-form-item prop="username" label="地址">
                    <el-input v-model="form.name10" auto-complete="off" clearable placeholder='学区地址'></el-input>
                </el-form-item> -->
                <el-form-item prop="username" label="隶属大区">
                    <el-select style='width:100%' v-model="form.name7" placeholder="隶属大区">
                        <el-option label="四川大区" value="四川大区"></el-option>
                        <el-option label="重庆大区" value="重庆大区"></el-option>
                        <el-option label="云南大区" value="云南大区"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select style="width:100%;" multiple collapse-tags v-model="form.name11">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input v-model="form.name8" rows='4' type='textarea' auto-complete="off" clearable placeholder='描述'></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlgEdit')" size="small">修改</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<style scope>
    .searchitem {
        display: inline-block;
        margin-bottom: 10px;
    }

</style>

<script>
    import bumenShoolArea from "../../../components/page/org/bumenShoolArea.vue";

    export default {
        name: 'baseform',
        components:{
                bumenShoolArea
            },
        data: function () {
            
            return {
                labelPosition: 'right',
                form: {
                    name: '',
                    type: '',
                    name1: '',
                    name2: [],
                    name3: [],
                    name6: '成都学区',
                    name7: '四川大区',
                    name8: '创建成都学区',
                    name9: '13146456598',
                    name10: '成都市青羊区清江西路128号',
                    name11: ['1'],
                    name12:''
                },
                tableData4: [{
                        date: '成都学区',
                        name: '四川大区',
                        province: '张三,李四',
                        city: '13146456598',
                        address: '成都市青羊区清江西路128号',
                        notes: '创建成都学区'
                    }, {
                        date: '重庆学区',
                        name: '重庆大区',
                        province: '李四',
                        city: '18065236549',
                        address: '重庆市渝北区自立项238号',
                        notes: '创建重庆学区'

                    },
                    {
                        date: '泸州学区',
                        name: '四川大区',
                        province: '李四',
                        city: '18065236549',
                        address: '重庆市渝北区自立项238号',
                        notes: '创建泸州学区'

                    }
                ],
                currentPage: 1,
                fullscreenLoading: false,
                dlgNew: false,
                dlgEdit: false,
                xxxxOptions: [{
                    value: '四川大区',
                    label: '四川大区'
                }, {
                    value: '重庆大区',
                    label: '重庆大区'
                }, {
                    value: '云南大区',
                    label: '云南大区'
                }],
            }
        },
        methods: {
            edit() {
                this.$router.push('/NEgroup')
            },
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
            },
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            }
        }
    }

</script>
