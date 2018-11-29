<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>教职工管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增教职工</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row  type="flex" class="row-bg">
                <el-col :span='12'>
                <el-form :label-position="labelPosition" label-width="180px" :model="form">
                    <el-form-item label="头像：">
                        <el-upload style="width:178px;" id='nestaff' action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
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
                            <el-radio :label="1">集团</el-radio>
                            <el-radio :label="2">校区</el-radio>
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
                    <el-button type="primary" @click='back'>新建</el-button>
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
                nameVisible:false,
                radio2:'',
                radio3:'',
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
    #nestaff
    .el-upload--text {
        width: 175px;
        height:175px;
    }

    #nestaff .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    #nestaff .el-upload:hover {
        border-color: #409EFF;
    }

    #nestaff  .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 175px;
        height: 175px;
        line-height: 175px;
        text-align: center;
    }

    #nestaff .avatar {
        width: 175px;
        height: 175px;
        display: block;
    }

</style>
