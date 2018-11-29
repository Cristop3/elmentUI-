<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>学校管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改学校</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="学校全称：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="学校简称：">
                    <el-input v-model="form.name12"></el-input>
                </el-form-item>
                <el-form-item label="学校校长：">
                    <el-input v-model="form.name13"></el-input>
                </el-form-item>
                <el-form-item label="类型：">
                    <el-select style='width:100%' v-model="form.name14" clearable placeholder="类型">
                        <el-option label="A类型" value="A"></el-option>
                        <el-option label="B类型" value="B"></el-option>
                        <el-option label="C类型" value="C"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学段：">
                   <el-select style='width:100%' v-model="form.name15" clearable placeholder="学段">
                        <el-option label="幼儿园" value="A"></el-option>
                        <el-option label="小学" value="B"></el-option>
                        <el-option label="初中" value="C"></el-option>
                        <el-option label="高中" value="D"></el-option>
                    </el-select>
                </el-form-item>
            <el-form-item label="所属大区：">
                <el-input v-model="form.name2"></el-input>
            </el-form-item>
            <el-form-item label="学校地址：">
                <el-input v-model="form.name3"></el-input>
            </el-form-item>
             <el-form-item label="学校类别：">
                <el-input v-model="form.name4"></el-input>
            </el-form-item>
            </el-form>
            


           
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="负责人姓名：">
                <el-input v-model="form.name5"></el-input>
            </el-form-item>
            <el-form-item label="负责人座机电话：">
                <el-input v-model="form.name6"></el-input>
            </el-form-item>
            <el-form-item label="负责人手机电话：">
                <el-input v-model="form.name7"></el-input>
            </el-form-item>
            </el-form>
            

            
            <el-form :label-position="labelPosition" label-width="180px" :model="form">
            <el-form-item label="教室数量：">
                <el-input v-model="form.name8"></el-input>
            </el-form-item>
            <el-form-item label="学生总量：">
                <el-input v-model="form.name9"></el-input>
            </el-form-item>
            <el-form-item label="教师数量：">
                <el-input v-model="form.name10"></el-input>
            </el-form-item>
             <el-form-item label="职工数量：">
                <el-input v-model="form.name11"></el-input>
            </el-form-item>
            </el-form>
            

            <el-row>
                <el-col :span='24' style='text-align:left'>
                    <el-button type="primary" @click='back'>确定</el-button>
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
                labelPosition:'top',
                form: {
                    name: '成都东区天立学校',
                    name2: '成都',
                    name3:'四川省成都市武侯区秣陵街道东虹花苑北苑',
                    name4: '初等教育',
                    name5: '张三',
                    name6: '028-77568542',
                    name7: '13152533669',
                    name8:'38间',
                    name9: '580人',
                    name10: '1398人',
                    name11: '236人',
                    name12:'成东天立',
                    name13:'张三',
                    name14:'A',
                    name15:'A'
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
