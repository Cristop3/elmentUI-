<template>
    <div class="login-wrap">
        <div class="ms-title">elmentUI项目</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" size="medium" suffix-icon="iconfont icon-user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" size="medium" suffix-icon="iconfont icon-mima" v-model="ruleForm.password"
                        @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input size="medium" style="width:188px;position:relative;top:-17px" placeholder="请输入右侧验证码" v-model="ruleForm.code">
                    </el-input>
                    <img src='static/img/code.png' style="height:44px;" />
                </el-form-item>
                <el-form-item>
                    <el-checkbox :checked="true" label="自动登录" name="type"></el-checkbox>
                    <a class='forgetPsd' @click="forgetPsd">忘记密码</a>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <!-- <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                ruleForm: {
                    username: 'admin',
                    password: '123123',
                    code:''
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username', this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //忘记密码
            forgetPsd(){
                this.$router.push('/forgetPsd')
            }
        }
    }

</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #242f42;
        /* background: url('./static/img/bg.jpg') no-repeat; */
    }

    .ms-title {
        position: absolute;
        /*top: 50%;*/
        width: 100%;
        margin-top: 60px;
        text-align: center;
        font-size: 35px;
        color: #fff;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        /*top: 50%;*/
        width: 300px;
        height: 260px;
        margin: 130px 0 0 -190px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        font-size: 14px;
    }

    .forgetPsd {
        float: right;
        text-decoration: none;
        color: #409EFF;
    }
    .forgetPsd:hover{
        color:		#CD4F39;
        cursor: pointer;
    }

</style>
