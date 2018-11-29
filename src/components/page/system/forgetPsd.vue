<template>
    <div class="login-wrap">
        <!--p style="padding:50px 0 0 50px;"><i class="el-icon-back"></i><a class='back' @click="back">返回登录</a></p>-->
        <div class="ms-title">重置密码</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input placeholder="请输入手机号" v-model="ruleForm.username" size="medium" >
                        <template slot="prepend">+86</template>
                    </el-input>
                </el-form-item>
                <!--<el-form-item prop="captcha">
                    <el-input size="medium"  style="width:168px;position:relative;top:-17px" placeholder="请输入右侧验证码" v-model="ruleForm.captcha">
                    </el-input>
                    <img src='static/img/code.png' height="44px" />
                </el-form-item> -->
                
                <el-form-item prop="vcode">
                    <el-input size="medium" style="float:left; width:50%" placeholder="手机验证码" v-model="ruleForm.vcode">
                    </el-input>
                    <el-button type="primary" size="medium" style="float:right" :loading="grabbingVcode" @click="handleGrabbing">获取验证码</el-button>
                </el-form-item>
                
                <el-form-item prop="password">
                    <el-input type="password" placeholder="新密码" size="medium" suffix-icon="iconfont icon-mima" v-model="ruleForm.password"
                        @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item prop="passwordConfirm">
                    <el-input type="password" placeholder="新密码确认" size="medium" suffix-icon="iconfont icon-mima" v-model="ruleForm.passwordConfirm"
                        @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button style="width:30%; float:left" type="info" @click="back">取消</el-button>
                    <el-button style="width:60%; float:right" type="primary" @click="back">确定</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                grabbingVcode: false,
                ruleForm: {
                    username: '',
                    //captcha: '',
                    vcode: '',
                    password: '',
                    passwordConfirm: '',
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入手机号',
                        trigger: 'blur'
                    }],
                    vcode: [{
                        required: true,
                        message: '请输入手机验证码',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入新密码',
                        trigger: 'blur'
                    }],
                    passwordConfirm: [{
                        required: true,
                        message: '请确认新密码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            back(){
                this.$router.push('/login')
            },

            handleGrabbing() {
                this.grabbingVcode = true;
                setTimeout(function () {
                    this.grabbingVcode = false;
                }.bind(this), 3000);
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
        /* top: 50%; */
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
        margin-top: 40px;
        text-align: center;
    }

    .login-btn button {
        height: 36px;
        font-size: 14px;
    }

    .back{
        cursor: pointer;
    }
    .back:hover{
        color:#6A5ACD;
    }

</style>
