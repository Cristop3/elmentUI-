<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 个人资料</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-tabs value='基础信息'>
            <el-tab-pane label="基础信息" name='基础信息'>
                <div class="container">
            <el-row>
                <el-form :model="form" status-icon  ref="form" label-width="80px" class="demo-ruleForm">
                    <el-col :span='3'>
                            <el-upload id='changepsd' action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                    </el-col>
                    <el-col :span='10'>
                        <el-form-item label="姓名">
                            <el-input style='width:100%' v-model="form.name" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="工号">
                            <el-input style='width:100%' :disabled="true" v-model="form.name3" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input style='width:100%' v-model="form.name5" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='11'>
                        <el-form-item label="性别">
                            <el-select style='width:100%' v-model="form.name2" clearable placeholder="性别">
                                <el-option label="男" value="shanghai"></el-option>
                                <el-option label="女" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input type="text" v-model="form.name4" placeholder="身份证号" clearable auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker style='width:100%'  v-model="form.name6" type="date" clearable placeholder="出生日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <el-row>
                <el-col :span='24' style='text-align:right'>
                    <el-button type="primary" @click='back'>修改</el-button>
                    <el-button type="info" @click='back'>返回</el-button>
                </el-col>
            </el-row>
        </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name='修改密码'>
                <changepsd2></changepsd2>
            </el-tab-pane>
        </el-tabs>

        



    </div>
</template>

<script>
import changepsd2 from '../../../components/page/system_main/changePsd2.vue'
    export default {
        components:{changepsd2},
        name: 'messageList',
        data: function () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.psdForm.checkPass !== '') {
                        this.$refs.psdForm.validateField('checkPass');
                    }
                    callback();
                }
            }

            var validateCheckPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.psdForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                dlgPsd: false,
                imageUrl: './static/img/img.jpg',
                form: {
                    name: 'admin',
                    name2: '男',
                    name5: '13552653264',
                    name3: 'TL001',
                    name4: '51018111652354626',
                    name6: '1990-08-10'
                },
                psdForm: {
                    pass: '',
                    checkPass: '',
                    pass2: '123456'
                },
                rulesPsd: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validateCheckPass,
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            back() {
                this.$router.push('/dashboard')
            }
        }
    }

</script>

<style>
    #changepsd .el-upload--text {
        width: 150px;
        height: 135px;
    }

    #changepsd .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    #changepsd .el-upload:hover {
        border-color: #409EFF;
    }

    #changepsd .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }

    #changepsd .avatar {
        width: 100%;
        height: 100%;
        display: block;
    }

</style>
