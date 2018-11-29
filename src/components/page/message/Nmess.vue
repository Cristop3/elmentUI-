<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>短信</el-breadcrumb-item>
                <el-breadcrumb-item>新增短信</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-card class="box-card" style='margin-bottom:10px'>
                <div slot="header" class="clearfix">
                    <span>短信</span>
                </div>
                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="短信主题：">
                        <el-input style='width:320px' v-model="form.name" placeholder='用于识别和查询'></el-input>
                    </el-form-item>
                    <el-form-item label="短信签名：">
                        <el-input style='width:320px' v-model="form.name6" placeholder='用于短信开头'></el-input>
                    </el-form-item>
                    <el-form-item label="发送内容：">
                        <el-input style='height:60px;width:320px' type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="接收对象：">
                        <el-radio v-model="radio" label="1">全体人员</el-radio>
                        <el-radio v-model="radio" label="2">指定人员</el-radio>
                    </el-form-item>
                    <el-form-item label="发送方式：">
                        <el-radio v-model="radio1" label="1">立即发送</el-radio>
                        <el-radio v-model="radio1" label="2">定时发送</el-radio>
                    </el-form-item>
                    <el-form-item label="发送日期：">
                        <el-date-picker style='width:320px' v-model="form.name3" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-form>

            </el-card>

            <el-row>
                <el-col :span='24' style='text-align:right'>
                    <el-button type="primary" @click='back'>返回</el-button>
                    <el-button type="success" @click='back'>确定</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style>
    

</style>

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
                },
                radio:'1',
                radio1:'1'

            }
        },
        methods: {
            back() {
                this.$router.push('/messManage')
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }

</script>

<style>


</style>
