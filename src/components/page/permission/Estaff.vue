<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>教职工管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改教职工</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
                <el-row type="flex" class="row-bg">
                    <el-col :span='12'>
                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="头像：">
                        <el-upload  id='Estaff'  action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="姓名：">
                        <el-input style='width:220px' v-model="form.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="性别：">
                        <el-select style='width:220px' v-model="form.name2" clearable placeholder="性别">
                            <el-option label="男" value="shanghai"></el-option>
                            <el-option label="女" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="身份证号：">
                        <el-input style='width:220px' v-model="form.name4" clearable></el-input>
                    </el-form-item>
                    
                </el-form>
                </el-col>


                <el-col :span='12'>
                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="所属类型：" >
                        <el-radio-group v-model="radio2" @change="handnameVisible">
                            <el-radio label="1">集团</el-radio>
                            <el-radio label="2">校区</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="状态：">
                        <el-radio-group v-model="radio3">
                            <el-radio label="1">正常</el-radio>
                            <el-radio label="2">注销</el-radio>
                        </el-radio-group>
                    </el-form-item>
                   <el-form-item label="归属学校：" v-show="nameVisible">
                        <el-input style='width:220px' v-model="form.name8" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="手机号：">
                        <el-input style='width:220px' v-model="form.name5" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="工号：">
                        <el-input style='width:220px' v-model="form.name6" clearable></el-input>
                    </el-form-item>
                     <el-form-item label="出生日期：">
                        <el-date-picker v-model="form.name3" type="date" clearable placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="入职时间：">
                        <el-date-picker v-model="form.name9" type="date" clearable placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="转正时间：">
                        <el-date-picker v-model="form.name10" type="date" clearable placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    
                </el-form>
                </el-col>
    </el-row>
            <el-row>
                <el-col :span='24' style='text-align:center'>
                    <el-button type="primary" @click='back'>修改</el-button>

                    <el-button type="info" @click='back'>返回</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style>
    #Estaff .el-upload--text {
        width: 175px;
        height: 175px;
    }

    #Estaff .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    #Estaff .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 175px;
        height: 175px;
        line-height: 175px;
        text-align: center;
    }

    #Estaff .avatar {
        width: 175px;
        height: 175px;
        display: block;
    }

</style>

<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                imageUrl: './static/img/logo.png',
                labelPosition: 'right',
                nameVisible:false,
                radio2:'1',
                radio3:'1',
                form: {
                    name: '张三 ',
                    name2: 'beijing',
                    name3: '1994-02-05',
                    name4: '510151516462682',
                    name5: '13558263642',
                    name6: '201808002',
                    name7: ['集团'],
                    name8: '泸州天立学校',
                    name9: '2014-05-02',
                    name10: '2014-08-02',
                    name11: ['正常']
                }
            }
        },
        methods: {
            back() {
                this.$router.push('/staffManage')
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
            },
            handnameVisible(){
                this.nameVisible = this.radio2 == '1' ? false : true;
            },
        }
    }

</script>

<style>


</style>
