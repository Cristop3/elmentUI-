<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>短信</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="searchitem">
                <el-input v-model="form.xxx" placeholder="发送主题" clearable></el-input>
            </div>
            <div class="searchitem">
                <el-select style='width:150px' v-model="form.type" placeholder="状态" clearable>
                    <el-option label="待发送" value="shanghai"></el-option>
                    <el-option label="发送中" value="beijing"></el-option>
                    <el-option label="发送成功" value="beijing"></el-option>
                </el-select>
            </div>
            <div class="searchitem">
                <el-button type="primary"  @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
            </div>
            <el-row>
                <el-table border  :data="tableData4" style="width: 100%" >
                    <el-table-column  prop="date" label="发送主题" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="发送日期" align="center">
                    </el-table-column>
                    <el-table-column prop="province" label="发送内容" align="center">
                    </el-table-column>
                    <el-table-column prop="city" label="接收对象" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="总发送条数" align="center">
                    </el-table-column>
                    <el-table-column prop="zip" label="状态" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click='isShowDlg = true' type="text" size="small">
                                查看
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style='margin-top:150px'>
                <!-- <div class="block" style='margin-left:150px'>
                    <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </div> -->
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <el-dialog width='30%' title="查看"  :visible.sync="isShowDlg" >
            <el-form label-position="right" label-width="100px" :model="form">
                <el-form-item label="短信主题：">
                    期末考试通知
                </el-form-item>
                <el-form-item label="短信签名：">
                    期末
                </el-form-item>
                <el-form-item label="发送内容：">
                    请大家注意在于2018年7月2日期末开始会议
                </el-form-item>
                <el-form-item label="接收对象：">
                    全体人员
                </el-form-item>
                <el-form-item label="发送方式：">
                    立即发送
                </el-form-item>
                <el-form-item label="发送日期：">
                    2018-05-03
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                
            </div>
        </el-dialog>

        

        <el-dialog width='20%' title='提示' :show-close='false' :visible.sync='isShowDlgPsd3' >
            您确定要删除该条记录吗？
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelDlg('psdForm','isShowDlgPsd3')"  size="small">取 消</el-button>
                <el-button type="primary"   size="small">确 定</el-button>

            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                fullscreenLoading: false,
                isShowDlg: false,
                isShowDlgPsd: false,
                isShowDlgPsd2:false,
                isShowDlgPsd3:false,
                nameForm: {
                    username: '',
                    xx:'2:4:1',
                    xxx:'财务'
                },
                psdForm: {
                    pass: '',
                    checkPass: ''
                },
                form: {
                    name: '',
                    region: '',
                    region2:'shanghai',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: '',
                    type:'',
                    type2:true,
                    resource: '小天才',
                    desc: '',
                    options: [],
                    jibie:'beijing4',
                    xxx:''
                },

                currentPage4: 1,
                tableData4: [{
                    date: '期末考试通知',
                    name: '2018-05-14',
                    province: '请大家注意在于2018年7月2日开始会议',
                    city: '全体人员',
                    address: '154',
                    zip: '待发送'
                }, {
                    date: '开学通知',
                    name: '2018-09-14',
                    province: '本校将于2018-09-15日开学',
                    city: '全体人员',
                    address: '235',
                    zip: '待发送'
                },{
                    date: '放假通知',
                    name: '2018-11-14',
                    province: '各位教师，我们将于11月14日放假',
                    city: '指定人员(张三，李四，王五)',
                    address: '2025',
                    zip: '已完成'
                }]
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            },
            cancelDlg(formName, witchDlg) {
                this[witchDlg] = false
            },
            openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1000);
      },
            reset(){
                this.form.xxx = ''
                this.form.region = ''
                this.form.type = ''
                this.form.type1 = ''
            },
            toW(xx){
                if(xx == 'new'){
                    this.$router.push('/Nmess')
                }else if(xx == 'edit'){
                    this.$router.push('/Emess')
                }else if(xx == 'view'){
                    this.$router.push('/Vmess')
                }
            }
        }
    }

</script>

<style scoped>
     .searchitem{
        display:inline-block;
        margin-bottom:10px;
    }

</style>
