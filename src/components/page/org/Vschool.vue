<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>学校管理</el-breadcrumb-item>
                <el-breadcrumb-item>查看学校</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="学校全称：">
                成都东区天立学校
            </el-form-item>
            <el-form-item label="学校简称：">
                成东天立
            </el-form-item>
            <el-form-item label="学校校长：">
                张三
            </el-form-item>
            <el-form-item label="学校类型：">
                A类型
            </el-form-item>
            <el-form-item label="学段：">
                小学
            </el-form-item>
            <el-form-item label="所属大区：">
                成都
            </el-form-item>
            <el-form-item label="学校地址：">
                四川省成都市武侯区秣陵街道东虹花苑北苑
            </el-form-item>
             <el-form-item label="学校类别：">
                 初等教育
            </el-form-item>
            </el-form>
            


            
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="负责人姓名：">
                张三
            </el-form-item>
            <el-form-item label="负责人座机电话：">
                028-77568542
            </el-form-item>
            <el-form-item label="负责人手机电话：">
                13152533669
            </el-form-item>
            </el-form>
            

            
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="教室数量：">
                38间
            </el-form-item>
            <el-form-item label="学生总量：">
                580人
            </el-form-item>
            <el-form-item label="教师数量：">
                1398人
            </el-form-item>
             <el-form-item label="职工数量：">
                 236人
            </el-form-item>
            </el-form>

            <el-row>
                <el-col :span='24' style='text-align:left'>
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
                labelPosition:'right',
                nameForm: {
                    username: '',
                    xx:'2:4:1',
                    xxx:'财务',
                    xxxx:'',
                    xxxxx:'',
                    xxxxxx:''
                },
                psdForm: {
                    pass: '',
                    checkPass: ''
                },
                form: {
                    name: '',
                    region: '',
                    region2:'shanghai',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: '',
                    type2:true,
                    resource: '小天才',
                    desc: '',
                    options: [],
                    jibie:'beijing4',
                    xxx:''
                }
            }
        },
        methods: {
            back(){
                 this.$router.push('/schoolManage')
            }
        }
    }

</script>

<style>


</style>
