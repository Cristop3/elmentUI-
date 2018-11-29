<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>短信</el-breadcrumb-item>
                <el-breadcrumb-item>查看短信</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
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


            <el-row>
                <el-col :span='24' style='text-align:right'>
                    <el-button type="info" @click='back'>返回</el-button>
                </el-col>
            </el-row>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                imageUrl: '',
                labelPosition: 'right',
                form: {
                    name: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: '',
                    name10: '',
                    name11: ''
                }
            }
        },
        methods: {
            back() {
                this.$router.push('/messManage')
            }
        }
    }

</script>

<style>


</style>
