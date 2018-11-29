<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 公告</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
                <div class="searchitem">
                    <el-input v-model="form.x" placeholder="标题"></el-input>
                </div>
                 <div class="searchitem">
                    <el-button type="primary">搜索</el-button>
                </div>

           <el-row>
                <el-table :data="tableData4" style="width: 100%" border center>
                    <el-table-column  prop="date" label="序号"  align="center" width='60'>
                    </el-table-column>
                    <el-table-column prop="name" label="标题">
                    </el-table-column>
                    <el-table-column prop="province" label="被通知人"  align="center" width='100'>
                    </el-table-column>
                    <el-table-column prop="state2" label="发布时间"  align="center">
                    </el-table-column>
                    <el-table-column  label="操作"  align="center">
                        <template slot-scope="scope">
                            <el-button @click='see' type="text" size="small">
                                查看
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>

            <el-row style='margin-top:150px'>
                
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                        :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <el-dialog width='45%' title="公告详情"  :visible.sync="messVisible" >
            <h2>【欢迎新同学】给2018级新生的一封信</h2>
            <p class='msg'>金风送爽，丹桂飘香，在这个美丽宜人的季节里，我们迎来了新同学。你们将带着青春活力，带着对知识的不懈的追求，带着对高中生活的无限憧憬，迈进了我们的校园。你们将是新学年里我们学校一道亮丽的风景线。相逢是首歌，相聚是欢乐。学校全体师生对你们表示最诚挚和最热烈的欢迎——欢迎你们，新同学！</p>
            <p class='time'>发布时间：2018-09-03</p>
        </el-dialog>

    </div>
</template>

<style scope>
    .el-dialog__title{
        font-size:15px;
    }
    h2{
        text-align:center;
    }
    .msg{
        margin:10px 0 70px 0;
        text-indent:28px;

    }
    .time{
        text-align:right;
    }

     .searchitem{
        display:inline-block;
        margin-bottom:10px;
    }

</style>

<script>
    export default {
        name: 'messageList',
        data: function(){
            return {
                messVisible:false,
                form:{
                    x:'',
                    time: null
                },
                currentPage:1,
                tableData4: [{
                    date: '1',
                    name: '【欢迎新同学】给2018级新生的一封信',
                    province: '全体人员',
                    state2: '2018-09-03',
                },
                {
                    date: '2',
                    name: '第19周校领导接待日安排公告',
                    province: '全体人员',
                    state2: '2018-06-13',
                },
                {
                    date: '3',
                    name: '关于学校各个寝室准备安装空调的安排',
                    province: '全体人员',
                    state2: '2018-03-06',
                }
                ]
            }
        },
        methods: {
            see(){
                this.messVisible = true
            }
        }
    }
</script>