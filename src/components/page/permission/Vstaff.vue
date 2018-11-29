<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>教职工管理</el-breadcrumb-item>
                <el-breadcrumb-item>查看教职工</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <el-row type="flex" class="row-bg">
                    <el-col :span='12'>
                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="头像：">
                <img style='width:175px;height:175px;border-radius:20px;' src='../../../assets/logo.png' />
                        
                    </el-form-item>
                    <el-form-item label="姓名：">
                        张三
                    </el-form-item>
                    <el-form-item label="性别：">
                        女
                    </el-form-item>
                    
                    <el-form-item label="身份证号：">
                        5101811233532623
                    </el-form-item>
                   
                </el-form>

                    </el-col>
                    <el-col :span='12'>


                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="所属类型：">
                        集团
                    </el-form-item>
                    <el-form-item label="状态：">
                        正常
                    </el-form-item>
                    <!-- <el-form-item label="归属学校：">
                        泸州天立学校
                    </el-form-item> -->
                     <el-form-item label="手机号：">
                        13555652652
                    </el-form-item>
                    <el-form-item label="工号：">
                        201808002
                    </el-form-item>
                    <el-form-item label="出生日期：">
                        1994-05-10
                    </el-form-item>
                    <el-form-item label="入职时间：">
                        2014-02-03
                    </el-form-item>
                    <el-form-item label="转正时间：">
                        2014-05-03
                    </el-form-item>
                    
                </el-form>
                    </el-col>

            </el-row>

            <el-row>
                <el-col :span='24' style='text-align:center'>
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
                imageUrl:'',
                labelPosition:'right',
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
                this.$router.push('/staffManage')
            }
        }
    }

</script>

<style>


</style>
