<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 教务管理</el-breadcrumb-item>
                <el-breadcrumb-item>教室管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="4" style="margin-bottom:20px">
                <el-col :span="4">
                    <el-input placeholder="教室名称" clearable></el-input>
                </el-col>
                <el-col :span="7">
                    <el-cascader style='width:300px' v-model="search.v2" expand-trigger="hover" :change-on-select="true"
                    :options="regionOptions" :show-all-levels="true" clearable placeholder="学区/学校"></el-cascader>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
                </el-col>
                <el-col :span="11" style="text-align:right">
                    <el-button type="primary" @click='dlgNew = true'>新建</el-button>
                    <el-dropdown split-button type="primary" @click='dlgUpload = true'>
                        导入
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>模版下载</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" border center>
                <el-table-column prop="F_D" label="教室编号" align="center">
                </el-table-column>
                <el-table-column prop="F_A" label="教室名称" align="center">
                </el-table-column>
                <el-table-column prop="F_1" label="学区" align="center">
                </el-table-column>
                <el-table-column prop="F_2" label="学校" align="center">
                </el-table-column>
                <el-table-column prop="F_3" label="教学楼" align="center">
                </el-table-column>
                <el-table-column prop="F_B" label="可容纳人数" align="center">
                </el-table-column>
                <!--<el-table-column prop="F_C" label="所处位置" align="center">
                </el-table-column>
                 <el-table-column prop="F_E" label="描述" align="center">
                </el-table-column> -->
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <!-- <el-button @click='dlgView = true' type="text" size="small">
                            查看
                        </el-button> -->
                        <el-button @click='dlgEdit = true' type="text" size="small">
                            修改
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row style='margin-top:150px'>
                <el-col :span='24' style="text-align:center">
                    <el-pagination background :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="200">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>

        <!-- 新建教室 -->
        <el-dialog width='50%' title="新建教室" :visible.sync="dlgNew">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="教室编号">
                            <el-input placeholder="教室编号" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="学区">
                            <el-select v-model="formnew.v1" placeholder="学区"  clearable style="width:100%;">
                                <el-option label="成都学区" value="1"></el-option>
                                <el-option label="重庆学区" value="2"></el-option>
                                <el-option label="湘潭学区" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  label="学校">
                            <el-select v-model="formnew.v2"  placeholder="学校"  clearable style="width:100%;">
                                <el-option label="成都东区天立小学" value="1"></el-option>
                                <el-option label="成都西区天立初中" value="2"></el-option>
                                <el-option label="成都南区天立幼儿园" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  label="教学楼">
                            <el-input placeholder="教学楼名称" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="名称">
                            <el-input placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="容纳人数">
                            <el-input placeholder="容纳人数" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="所处楼层">
                            <el-input placeholder="所处楼层" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgNew = false" type='primary' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改教室 -->
        <el-dialog width='50%' title="修改教室" :visible.sync="dlgEdit">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="教室编号">
                            <el-input v-model="fromedit.v1" placeholder="教室编号" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="学区">
                            <el-select v-model="fromedit.v2" placeholder="学区"  clearable style="width:100%;">
                                <el-option label="成都学区" value="1"></el-option>
                                <el-option label="重庆学区" value="2"></el-option>
                                <el-option label="湘潭学区" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  label="学校">
                            <el-select v-model="fromedit.v3"  placeholder="学校"  clearable style="width:100%;">
                                <el-option label="成都东区天立小学" value="1"></el-option>
                                <el-option label="成都西区天立初中" value="2"></el-option>
                                <el-option label="成都南区天立幼儿园" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  label="教学楼">
                            <el-input v-model="fromedit.v4" placeholder="教学楼名称" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="名称">
                            <el-input v-model="fromedit.v5" placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="容纳人数">
                            <el-input v-model="fromedit.v6" placeholder="容纳人数" clearable></el-input>
                        </el-form-item>
                        <el-form-item  label="所处楼层">
                            <el-input v-model="fromedit.v7" placeholder="所处楼层" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgEdit = false" type='primary' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 查看 -->
        <el-dialog width='40%' title="查看教室" :visible.sync="dlgView">
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="教室编号">
                            room_1
                        </el-form-item>
                        <el-form-item  label="学区">
                            成都学区
                        </el-form-item>
                        <el-form-item  label="学校">
                            成都东区天立小学
                        </el-form-item>
                        <el-form-item  label="教学楼">
                            文明楼
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form label-width="100px">
                        <el-form-item  label="名称">
                            101
                        </el-form-item>
                        <el-form-item  label="容纳人数">
                            68人
                        </el-form-item>
                        <el-form-item  label="所处楼层">
                            一楼
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-dialog>

        <!-- 上传附件 -->
        <el-dialog width='32%' title='导入' :show-close='true' :visible.sync='dlgUpload'>
            <el-form status-icon class="demo">
                <el-form-item>
                    <el-upload id='roomManage' class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dlgUpload = false" type='info' size="small">取 消</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tableData: [{
                        F_A: '101',
                        F_B: '68人',
                        F_C: '一楼',
                        F_D: 'room_1',
                        F_E: '该教室面积大',
                        F_1: '成都学区',
                        F_2: '成都东区天立小学',
                        F_3: '文明楼1楼',
                    },
                    {
                        F_A: '102',
                        F_B: '30人',
                        F_C: '一楼',
                        F_D: 'room_2',
                        F_E: '可以容纳30人考试',
                        F_1: '成都学区',
                        F_2: '成都东区天立小学',
                        F_3: '思过楼2楼',
                    }
                ],
                dlgNew: false,
                dlgEdit: false,
                dlgUpload: false,
                dlgView: false,
                fullscreenLoading: false,
                currentPage: 1,
                form: {
                    name1: '101',
                    name2: '68人',
                    name3: '一楼',
                    name4: '该教室面积大',
                },
                formnew:{
                    v1:'',
                    v2:''
                },
                fromedit:{
                    v1:'room_1',
                    v2:'1',
                    v3:'1',
                    v4:'文明楼',
                    v5:'101',
                    v6:'68人',
                    v7:'一楼',
                },
                search:{
                    v2:[]
                },
                regionOptions: [{
                    value: '四川',
                    label: '四川',
                    children: [{
                        value: '成都学区',
                        label: '成都学区',
                        children: [{
                            value: '成都天立学校',
                            label: '成都天立学校'
                        }, {
                            value: '成都东区天立学校',
                            label: '成都东区天立学校'
                        }]
                    }, {
                        value: '泸州学区',
                        label: '泸州学区',
                        children: [{
                            value: '泸州天立学校',
                            label: '泸州天立学校'
                        }, {
                            value: '泸州东区天立学校',
                            label: '泸州东区天立学校'
                        }]
                    }, {
                        value: '宜宾学区',
                        label: '宜宾学区',
                        children: [{
                            value: '宜宾天立学校',
                            label: '宜宾天立学校'
                        }, {
                            value: '宜宾东区天立学校',
                            label: '宜宾东区天立学校'
                        }]
                    }]
                }, {
                    value: '湖南',
                    label: '湖南',
                    children: [{
                        value: '湘潭学区',
                        label: '湘潭学区',
                        children: [{
                            value: '湘潭天立学校',
                            label: '湘潭天立学校'
                        }, {
                            value: '湘潭东区天立学校',
                            label: '湘潭东区天立学校'
                        }]
                    }]
                }],
            }
        },
        methods: {

        }
    }

</script>

<style>
    #roomManage .el-upload--text {
        margin: 0 auto;
        height: 182px;
        width: 362px;
    }

    .demo {
        margin: 0 auto;
    }

    #roomManage .el-upload {
        display: block;
    }

</style>
