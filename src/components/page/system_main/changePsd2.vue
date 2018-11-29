<template>
    <div>
        <div class='container'>
            <el-row>
                <el-col :span='8'>
                    <el-form :model="psdForm" :rules="rulesPsd" ref="psdForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="原密码" prop="pass">
                            <el-input type="password" v-model="psdForm.pass2" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="pass">
                            <el-input type="password" v-model="psdForm.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="psdForm.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click='back'>修改</el-button>
                            <el-button type="info" @click='back'>返回</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'changePsd2',
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


</style>
