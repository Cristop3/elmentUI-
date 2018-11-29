<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 菜单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter='4'>
                <!-- <el-col :span='4'>
                    <el-input placeholder="菜单" v-model="editform.F_B" clearable>
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col> -->
                <el-col :span='24'>
                    <el-button type="primary" @click='add'>新建</el-button>
                    <el-button type="primary" @click='edit'>修改</el-button>
                </el-col>
            </el-row>
            <div style="margin-top:20px;">
                <el-tree :data="dataMenu" draggable :default-expanded-keys="[2]" :expand-on-click-node="false" node-key="id"
                    ref='tree' :indent='14'>
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span style='font-size:12px'>
                            <i style='margin-right:3px;font-size:15px' class="iconfont" :class="node.icon"></i>{{
                            node.label }}</span>
                        <!-- <span>
                            <el-button type="text" size="mini" @click="() => add(data)">
                                新建
                            </el-button>
                            <el-button type="text" size="mini" @click="() => edit(data)">
                                修改
                            </el-button>
                        </span> -->
                    </span>
                </el-tree>
            </div>
        </div>

        <el-dialog width='30%' title='修改菜单' :visible.sync='isMenu' @close='closeEdit'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级菜单">
                    <el-input :disabled="true" v-model="editform.F_B" clearable></el-input>
                    <!-- <el-button @click='dlgOrg = true' type="text" size="small">
                        选择
                    </el-button> -->
                </el-form-item>
                <el-form-item label="菜单类型">
                    <el-radio-group v-model="form.type2" @change="handnameVisible('edit')">
                        <el-radio label="1">目录</el-radio>
                        <el-radio label="2">菜单</el-radio>
                        <el-radio label="3">按钮</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="username" label="菜单名称">
                    <el-input v-model="editform.F_A" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="图标" v-show='!flag'>
                    <el-button type="text" @click='showEmoji2 = true' size="small">选择</el-button><i style='margin-left:50px' class="iconfont" :class='chooseEmoji2'></i>
                    <!--图标-->
                    <transition name="fade" mode="">
                        <div class="emoji-box" v-if="showEmoji2">
                            <el-button class="pop-close" :plain="true" type="danger" size="mini" icon="close" @click="showEmoji2 = false">X</el-button>
                            <vue-emoji @select="selectEmoji">
                            </vue-emoji>
                        </div>
                    </transition>
                </el-form-item>
                <el-form-item prop="username" label="权限标识" v-show='flag'>
                    <el-input v-model="editform.F_C" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="请求地址" v-show='address'>
                    <el-input v-model="form.name34" clearable></el-input>
                </el-form-item>
                <!-- <el-form-item prop="username" label="描述">
                    <el-input type="textarea" rows="4" placeholder="描述" v-model="editform.F_D"></el-input>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='isMenu = false' size="small">修改</el-button>
            </div>
        </el-dialog>

        <el-dialog width='30%' title='新建菜单' :visible.sync='dlgNew' @close='closeNew'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级菜单">
                    <el-input :disabled="true" v-model="form.name1" clearable></el-input>
                    <!-- <el-button @click='dlgOrg = true' type="text" size="small">
                        选择
                    </el-button> -->
                </el-form-item>
                <el-form-item label="菜单类型">
                    <el-radio-group v-model="form.type" @change="handnameVisible('new')">
                        <el-radio label="1">目录</el-radio>
                        <el-radio label="2">菜单</el-radio>
                        <el-radio label="3">按钮</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="username" label="菜单名称">
                    <el-input v-model="form.name2" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="图标" v-show='!flag'>
                    <!--<el-select style='width:100%' v-model="value6" placeholder="请选择">
                        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                            <span style='font-size:12px'>
                            <i style='margin-right:3px;font-size:15px' class="iconfont" :class="item.icon"></i>{{
                            item.label }}</span>
                        </el-option>
                    </el-select>-->
                    <el-button type="text" @click='showEmoji = true' size="small">选择</el-button><i style='margin-left:50px' :class='chooseEmoji'></i>
                    <!--图标-->
                    <transition name="fade" mode="">
                        <div class="emoji-box" v-if="showEmoji">
                            <el-button class="pop-close" :plain="true" type="danger" size="mini" icon="close" @click="showEmoji = false">X</el-button>
                            <vue-emoji @select="selectEmoji">
                            </vue-emoji>
                        </div>
                    </transition>
                </el-form-item>
                <el-form-item prop="username" label="权限标识" v-show='flag'>
                    <el-input v-model="form.name3" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="请求地址" v-show='address'>
                    <el-input v-model="form.name33" clearable></el-input>
                </el-form-item>
                <!-- <el-form-item label="菜单状态">
                    <el-radio-group v-model="form.status">
                        <el-radio label="1">显示</el-radio>
                        <el-radio label="2">隐藏</el-radio>
                    </el-radio-group>
                </el-form-item> -->
                <!-- <el-form-item prop="username" label="描述">
                    <el-input type="textarea" rows="4" placeholder="描述" v-model="form.name4"></el-input>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='isMenu = false' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改上级组织 -->
        <el-dialog width='40%' title='菜单' :visible.sync='dlgOrg'>
            <el-tree :data="dataMenu" accordion :expand-on-click-node="false">
            </el-tree>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgRelation = false'>选择</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style  lang="scss">
.emoji-box {
      position: absolute;
      z-index: 10;
      left: -10px;
      top: 24px;
      box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
      background: white;
      .el-button {
        position: absolute;
        border: none;
        color: #FF4949;
        right: 0px;
        top: 0px;
        z-index: 10;
      }
    }

</style>

<script>
import vueEmoji from "../../../components/common/emoji/emoji.vue";

    export default {
        name: 'baseform',
        components:{
           vueEmoji
        },
        data: function () {
            const generateData = _ => {
                const data = []
                const data2 = ['组织机构', '消息管理', '权限管理', '教务管理'];
                for (let i = 1; i < data2.length; i++) {
                    data.push({
                        key: i,
                        label: data2[i]
                    });
                }
                return data;
            };
            return {
                chooseEmoji:'',
                chooseEmoji2:'',
                showEmoji:false,
                showEmoji2:false,
                isMenu: false,
                dlgNew: false,
                dlgOrg: false,
                flag: false,
                editform: {
                    F_A: '系统首页',
                    F_B: '天立智慧校园平台',
                    F_C: 'system_main_view',
                    F_D: '系统首页',
                },
                form: {
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    type: '',
                    status: '',
                    type2: '2',
                    name33: '',
                    name34: 'pkg_after.xxx'
                },
                cities: [{
                    value: 'Beijing',
                    label: '',
                    icon: 'icon-gangweiguanli'
                }, {
                    value: 'Shanghai',
                    label: '',
                    icon: 'icon-xuexiaoguanli'
                }, {
                    value: 'Nanjing',
                    label: '',
                    icon: 'icon-zuzhijiagou'
                }, {
                    value: 'Chengdu',
                    label: '',
                    icon: 'icon-jituanguanli'
                }, {
                    value: 'Shenzhen',
                    label: '',
                    icon: 'icon-jituanguanli'
                }, {
                    value: 'Guangzhou',
                    label: '',
                    icon: 'icon-xitongshouye'
                }],
                value6: '',
                value7: 'Guangzhou',
                address: false,
                data: generateData(),
                dataMenu: [{
                    id: 2,
                    label: '天立智慧校园平台',
                    icon: 'el-icon-menu',
                    children: [{
                            id: 4,
                            label: '系统首页',
                            icon: 'icon-xitongshouye'
                        },
                        {
                            id: 5,
                            label: '系统管理',
                            icon: 'icon-jituanguanli',
                            children: [{
                                    id: 11,
                                    label: '组织架构',
                                    icon: 'icon-zuzhijiagou',
                                    children: [{
                                            id: 111,
                                            label: '新建组织',
                                            icon: 'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改组织',
                                            icon: 'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 12,
                                    label: '字典管理',
                                    icon: 'icon-xuexiaoguanli'
                                },
                                {
                                    id: 13,
                                    label: '职位管理',
                                    icon: 'icon-gangweiguanli',
                                    children: [{
                                            id: 111,
                                            label: '新建职位',
                                            icon: 'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改职位',
                                            icon: 'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 14,
                                    label: '岗位管理',
                                    icon: 'icon-zhiweiguanli-',
                                    children: [{
                                            id: 111,
                                            label: '新建岗位',
                                            icon: 'el-icon-tickets'
                                        },
                                        {
                                            id: 112,
                                            label: '修改岗位',
                                            icon: 'el-icon-tickets'
                                        }
                                    ]
                                },
                                {
                                    id: 141,
                                    label: '等级管理',
                                    icon: 'icon-zhiweiguanli-'
                                },
                            ]

                        },
                        {
                            id: 6,
                            label: '权限管理',
                            icon: 'icon-quanxian',
                            children: [{
                                    id: 15,
                                    label: '教职工管理',
                                    icon: 'icon-jiaozhigongguanli'
                                },
                                {
                                    id: 16,
                                    label: '角色管理',
                                    icon: 'icon-jiaoseguanli'
                                },
                                {
                                    id: 17,
                                    label: '菜单管理',
                                    icon: 'icon-zuzhijiagou'
                                },
                            ]
                        },
                        {
                            id: 7,
                            label: '消息管理',
                            icon: 'icon-xiaoxiguanli',
                            children: [{
                                id: 171,
                                label: '短信',
                                icon: 'icon-_yijicaidanduanxinguanli'
                            }, ]
                        },
                        {
                            id: 8,
                            label: '教务管理',
                            icon: 'icon-jiaowuguanli',
                            children: [{
                                    id: 18,
                                    label: '学期管理',
                                    icon: 'icon-xueqiguanli',
                                },
                                {
                                    id: 19,
                                    label: '学科管理',
                                    icon: 'icon-xuekeguanli',
                                },
                                {
                                    id: 210,
                                    label: '班级管理',
                                    icon: 'icon-banjiguanli',
                                },
                                {
                                    id: 20,
                                    label: '考试管理',
                                    icon: 'icon-zaixiankaoshiguanli',
                                },
                                {
                                    id: 21,
                                    label: '成绩管理',
                                    icon: 'icon-chengjiguanli'
                                },
                                {
                                    id: 22,
                                    label: '教室管理',
                                    icon: 'icon-classroom'
                                },
                                {
                                    id: 23,
                                    label: '课程表管理',
                                    icon: 'icon-kechengbiao'
                                },
                                {
                                    id: 24,
                                    label: '学生管理',
                                    icon: 'icon-kechengbiao'
                                },
                            ]
                        },
                        {
                            id: 9,
                            label: '应用管理',
                            icon: 'icon-yingyongguanli',
                            children: [{
                                    id: 91,
                                    label: '应用信息',
                                    icon: 'iconfont icon-ziyuan'
                                },
                                {
                                    id: 92,
                                    label: '应用范围配置',
                                    icon: 'iconfont icon-fanwei'
                                },
                                {
                                    id: 93,
                                    label: '应用接口配置',
                                    icon: 'iconfont icon-jiekoupeizhi'
                                },
                            ]
                        }
                    ]
                }]
            }
        },
        methods: {
            edit(data) {
                if (this.$refs.tree.getCurrentNode()) {
                    this.chooseEmoji2 = this.$refs.tree.getCurrentNode().icon
                    this.isMenu = true
                    this.editform.F_B = this.$refs.tree.getCurrentNode().label
                } else {
                    this.$message({
                        message: '请选择一条数据',
                        type: 'warning',
                        duration: '1000'
                    });
                }
            },
            add(data) {
                if (this.$refs.tree.getCurrentNode()) {
                    this.dlgNew = true
                    //this.form.name5 = this.$refs.tree.getCurrentNode().label

                    this.form.name1 = this.$refs.tree.getCurrentNode().label
                } else {
                    this.$message({
                        message: '请选择一条数据',
                        type: 'warning',
                        duration: '1000'
                    });
                }
            },
            //新增&修改所属类型
            handnameVisible(type) {
                if (type == 'new') {
                    if(this.showEmoji)  this.showEmoji = false
                    if (this.form.type == '1') {
                        this.flag = false
                        this.address = false
                    }
                    if (this.form.type == '2') {
                        this.flag = true
                        this.address = true
                    }
                    if (this.form.type == '3') {
                        this.flag = true
                        this.address = false
                    }
                }
                if (type == 'edit') {
                    if(this.showEmoji2)  this.showEmoji2=false
                    if (this.form.type2 == '1') {
                        this.flag = false
                        this.address = false
                    }
                    if (this.form.type2 == '2') {
                        this.flag = true
                        this.address = true
                    }
                    if (this.form.type2 == '3') {
                        this.flag = true
                        this.address = false
                    }
                }
            },
            //图标
            selectEmoji (code) {
                this.chooseEmoji = code.icon
                this.showEmoji = false
            },  
            //关闭弹窗
            closeNew(){
                if(this.showEmoji)  this.showEmoji = false
               
            },
            closeEdit(){
                if(this.showEmoji2)  this.showEmoji2=false
            }
        }
    }

</script>
