<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>集团管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item>
                <el-upload id='negroup'
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>    
            </el-form-item>
            <el-form-item label="集团名称">
                <el-input v-model="form.name2"></el-input>
            </el-form-item>
            <el-form-item label="网址">
                <el-input v-model="form.name3"></el-input>
            </el-form-item>
             <el-form-item label="电话">
                <el-input v-model="form.name4"></el-input>
            </el-form-item>
             <el-form-item label="地址">
                <el-input v-model="form.name5"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                 <el-input type="textarea" v-model="form.name6" rows="5"></el-input>
            </el-form-item>
            </el-form>
            

            <el-row>
                <el-col :span='24' style='text-align:left'>
                    <el-button type="primary" @click='back'>修改</el-button>
                    <el-button type="info" @click='back'>返回</el-button>
                </el-col>
            </el-row>
        </div>

        
    </div>
</template>

<style scope>
    #negroup .el-upload--text{
        width:178px;
    }
    #negroup  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  #negroup  .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  #negroup .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-form-item__label{
      font-weight:bold;
  }
</style>

<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                labelPosition:'top',
                imageUrl: './static/img/header.jpg',
                form: {
                    name: '成都东区天立学校',
                    name2: '神州天立教育集团',
                    name3:'http://sztiji.com',
                    name4: '028-12345678',
                    name5: '四川省成都市青羊工业园T25座',
                    name6: '神州天立投资集团旗下地产产业以“立足成都，放眼全国”为战略发展方向，目前已在成都、泸州、宜宾、广元、西昌、内江、西宁等地成功开发众多高品质的民生住宅、商业综合体、文旅地产、部分天立国际学校部分天立国际学校(3张)产业地产、教育综合体等项目。 [2]  先后开发和正在开发泸州墨香苑、天立水晶城、外滩一号、一品上城，以及龙泉天立广场和彭州世纪华府、郫县香缇华府、宜宾学府华庭、天立酒街、广元学府华庭、玉蟾国际温泉度假区、黄荆假日酒店、宜宾临港总部基地、中国西南机械装备贸易城等一大批高品质项目',
                    name7: '13152533669',
                    name8:'38间',
                    name9: '580人',
                    name10: '1398人',
                    name11: '236人'
                }
            }
        },
        methods: {
            back(){
                 this.$router.push('/VgroupManage')
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
