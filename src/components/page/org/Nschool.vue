<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 组织架构</el-breadcrumb-item>
                <el-breadcrumb-item>学校管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增学校</el-breadcrumb-item>
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
                    <el-cascader style='width:100%' v-model="form.name2" expand-trigger="hover" :change-on-select="true" :options="regionOptions" :show-all-levels="true" clearable placeholder="学区"></el-cascader>     
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
                labelPosition: 'top',
                form: {
                    name1: '',
                    name2: [],
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: '',
                    name10: '',
                    name11: '',
                    name12: '',
                    name:'',
                    name13:'',
                    name14:'',
                    name15:''

                },
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                      value: '成都学区',
                      label: '成都学区'
                    }, {
                      value: '泸州学区',
                      label: '泸州学区'
                    }, {
                      value: '宜宾学区',
                      label: '宜宾学区'
                    }]
                }, {
                    value: '湖南',
                    label: '湖南',
                    children: [{
                      value: '湘潭学区',
                      label: '湘潭学区'
                    }]
                }],
            }
        },
        methods: {
            back() {
                this.$router.push('/schoolManage')
            }
        }
    }

</script>

<style scope>
    

</style>
