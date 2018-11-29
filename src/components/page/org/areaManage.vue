<template>
    <div>
        <el-tabs value='大区信息' tab-position="right">
            <el-tab-pane label="大区信息" name='大区信息'>
                <div class="container">
                    <div class="searchitem">
                        <el-input v-model="form.name1" placeholder="名称" clearable></el-input>
                    </div>
                    <div class="searchitem">
                        <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                    </div>
                    <div style="float:right;">
                        <el-button type="primary" @click="dlg = true">新建</el-button>
                    </div>
                    <el-row>
                        <el-table :data="tableData4" style="width: 100%" border center>
                            <el-table-column prop="date" label="名称" align='center'>
                            </el-table-column>
                            <el-table-column prop="province" label="负责人" align='center'>
                            </el-table-column>
                            <el-table-column prop="name" label="描述" align='center'>
                            </el-table-column>
                            <el-table-column label="操作" align='center'>
                                <template slot-scope="scope">
                                    <el-button @click='dlg2 = true' type="text" size="small">
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
                <bumenArea></bumenArea>
            </el-tab-pane>
        </el-tabs>


        <el-dialog width='30%' title='新建大区' :visible.sync='dlg'>
            <el-form :model="form" status-icon ref="form" class="demo-ruleForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name1" auto-complete="off" clearable placeholder='名称'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select style="width:100%;" multiple collapse-tags v-model="form.name3">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input v-model="form.name2" rows='4' type='textarea' auto-complete="off" clearable placeholder='描述'></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlg')" size="small">新建</el-button>
            </div>
        </el-dialog>

        <el-dialog width='30%' title='修改大区' :visible.sync='dlg2'>
            <el-form :model="form" status-icon ref="form" class="demo-ruleForm" label-width="80px">
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name6" auto-complete="off" clearable placeholder='名称'></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select style="width:100%;" multiple collapse-tags v-model="form.name8">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="描述">
                    <el-input v-model="form.name7" rows='4' type='textarea' auto-complete="off" clearable placeholder='描述'></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancelDlg('form','dlg2')" size="small">修改</el-button>
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
    import bumenArea from "../../../components/page/org/bumenArea.vue";
    export default {
        name: 'baseform',
        data: function () {
            return {
                labelPosition: 'right',
                form: {
                    name: '',
                    type: '',
                    name1: '',
                    name2: '',
                    name3: '',
                    name6: '四川大区',
                    name7: '2012年成立',
                    name8: ['1'],
                    name9: '13146456598',
                    name10: '成都市青羊区清江西路128号'
                },
                tableData4: [{
                    date: '四川大区',
                    name: '2012年成立',
                    province: '张三',
                    city: '13146456598',
                    address: '成都市青羊区清江西路128号'
                }, {
                    date: '重庆大区',
                    name: '2015年成立',
                    province: '李四',
                    city: '18065236549',
                    address: '重庆市渝北区自立项238号'
                }],
                currentPage: 1,
                fullscreenLoading: false,
                dlg: false,
                dlg2: false

            }
        },
        components: {
            bumenArea
        },
        methods: {
            back() {
                this.$router.push('/VgroupManage')
            },
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
