<template>
    <div>
        <div class="container">
            <el-row :gutter='4'>
                <!--<el-col :span='4'>
                    <el-input placeholder="组织名称" v-model="form.name9" clearable>
                    </el-input>
                </el-col>
                <el-col :span='2'>
                    <el-button type="primary">搜索</el-button>
                </el-col>-->
                <el-col :span='24'>
                    <el-button type="primary" @click='add'>新建</el-button>
                    <el-button type="primary" @click='edit'>修改</el-button>
                </el-col>
            </el-row>
            <div style="margin-top:20px;">
                <el-tree :highlight-current='true' :data="dataMenu" draggable :default-expanded-keys="[2]" :indent='14'
                    :expand-on-click-node="false" node-key="id" @node-click='nodeClick' ref="tree">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>
                            <i style='margin-right:3px' class="iconfont" :class="node.icon"></i>{{ node.label }}</span>
                        <!--<span>
                             <el-button type="text" size="mini" @click="() => add(data)">
                                新建
                            </el-button>
                            <el-button type="text" size="mini" @click="() => edit(data)">
                                修改
                            </el-button>
                        </span>-->
                    </span>
                </el-tree>
            </div>
        </div>

        <!--修改-->
        <!--<el-dialog width='30%' title='修改组织' :visible.sync='dlgEdit'>
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="上级组织">
                    <el-input v-model="form.name16" disabled clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="名称">
                    <el-input v-model="form.name1" placeholder="名称" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="编码">
                    <el-input v-model="form.name18" placeholder="编码" clearable></el-input>
                </el-form-item>
                <el-form-item prop="username" label="负责人">
                    <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name2" clearable
                        placeholder="负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="虚拟负责人">
                    <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name3" clearable
                        placeholder="虚拟负责人">
                        <el-option label="张三" value="1"></el-option>
                        <el-option label="李四" value="2"></el-option>
                        <el-option label="王五" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="类型">
                    <el-select filterable style='width:100%' v-model="form.name4" clearable placeholder="类型">
                        <el-option label="一体化" value="8"></el-option>
                        <el-option label="大区" value="1"></el-option>
                        <el-option label="学区" value="2"></el-option>
                        <el-option label="学校" value="7"></el-option>
                        <el-option label="部门" value="3"></el-option>
                        <el-option label="高中" value="4"></el-option>
                        <el-option label="初中" value="5"></el-option>
                        <el-option label="小学" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="角色">
                    <el-button @click='dlgRelation = true' type="text" size="small">
                        配置
                    </el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false' size="small">修改</el-button>
            </div>
        </el-dialog>-->

        <!--修改-->
        <el-dialog width='50%' :title='titleForUpdate' :visible.sync='dlgEdit'>
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form ref="nameForm" label-width="100px">
                        <el-form-item prop="username" label="上级组织">
                            <el-input v-model="form.name16" disabled clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="username" label="编码">
                            <el-input v-model="form.name18" placeholder="编码" clearable></el-input>
                        </el-form-item>
                        <!--<el-form-item prop="username" label="虚拟负责人">
                            <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name3"
                                clearable placeholder="虚拟负责人">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                                <el-option label="王五" value="3"></el-option>
                            </el-select>
                        </el-form-item>-->
                        <el-form-item prop="username">
                            <slot slot="label">
                                <el-tooltip class="item" effect="dark" content="在负责人实际不真正管理业务的情况下，可设置虚拟负责人代为管理。"
                                    placement="bottom-start">
                                    <el-button type="text" class="el-form-item--tip-label el-form-item__label">虚拟负责人<i
                                            class="el-icon-info el-icon--right"></i></el-button>
                                </el-tooltip>
                            </slot>
                            <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name3"
                                clearable placeholder="虚拟负责人">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                                <el-option label="王五" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        
                        <el-form-item v-show='showFiled' prop="username" label="公司名称">
                            <el-input v-model="baseedit.name1" placeholder="公司名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="经营范围">
                            <el-select style='width:100%' v-model="baseedit.name9" placeholder="经营范围" collapse-tags
                                multiple clearable>
                                <el-option label="地产" value="1"></el-option>
                                <el-option label="教育" value="2"></el-option>
                                <el-option label="旅游" value="3"></el-option>
                                <el-option label="建材" value="4"></el-option>
                                <el-option label="高科技研发" value="5"></el-option>
                                <el-option label="物管" value="6"></el-option>
                                <el-option label="金融" value="7"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="公司口号">
                            <el-input style='width:100%' placeholder="公司口号" v-model="baseedit.name6" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="username">
                            <slot slot="label" >
                                <el-tooltip class="item" effect="dark" content="配置该组织的公共角色，组织中的每一个人都有这些角色。"
                                    placement="bottom-start">
                                    <el-button type="text" class="el-form-item--tip-label el-form-item__label" style='text-align:right'>公共角色<i
                                            class="el-icon-info el-icon--right"></i></el-button>
                                </el-tooltip>
                            </slot>
                            <el-button @click='dlgRelation = true' type="text" size="small">
                                配置
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form ref="nameForm" label-width="100px">
                        <el-form-item prop="username" label="名称">
                            <el-input v-model="form.name1" placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="username" label="负责人">
                            <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name2"
                                clearable placeholder="负责人">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                                <el-option label="王五" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="username" label="类型">
                            <el-select filterable style='width:100%' v-model="form.name4" clearable placeholder="类型">
                                <el-option label="大区" value="1"></el-option>
                                <el-option label="学区" value="2"></el-option>
                                <!--<el-option label="学校" value="7"></el-option>-->
                                <el-option label="部门" value="3"></el-option>
                                <el-option label="一体化" value="8"></el-option>
                                <el-option label="高中" value="4"></el-option>
                                <el-option label="初中" value="5"></el-option>
                                <el-option label="小学" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="username" label="成立时间">
                            <el-date-picker style='width:100%' v-model="baseedit.name4" type="year" clearable
                                placeholder="成立时间">
                            </el-date-picker>
                        </el-form-item>
                        <!-- <el-form-item prop="username" label="总部地点">
                            <el-input v-model="baseedit.name3" placeholder="总部地点" clearable></el-input>
                        </el-form-item> -->
                        <el-form-item v-show='showFiled' prop="username" label="外文名称">
                            <el-input v-model="baseedit.name2" placeholder="外文名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="公司性质">
                            <el-select style='width:100%' v-model="baseedit.name5" placeholder="公司性质" clearable>
                                <el-option label="民营" value="1"></el-option>
                                <el-option label="有限责任公司" value="2"></el-option>
                                <el-option label="国有独资公司" value="3"></el-option>
                                <el-option label="股份有限公司" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="员工数">
                            <el-input style='width:100%' placeholder="员工数" v-model="baseedit.name7" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="创始人">
                            <el-input style='width:100%' placeholder="创始人" v-model="baseedit.name8" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgEdit = false' size="small">修改</el-button>
            </div>
        </el-dialog>

        <!--新增-->
        <el-dialog width='50%' title='新建组织' :visible.sync='dlgNew' @close='close'>
            <el-row type="flex" class="row-bg">
                <el-col :span='12'>
                    <el-form ref="nameForm" label-width="100px">
                        <el-form-item prop="username" label="上级组织">
                            <el-input v-model="form.name15" disabled clearable></el-input>
                        </el-form-item>

                        <el-form-item prop="username" label="编码">
                            <el-input v-model="form.name17" placeholder="编码" clearable></el-input>
                        </el-form-item>

                        <el-form-item prop="username">
                            <slot slot="label">
                                <el-tooltip class="item" effect="dark" content="在负责人实际不真正管理业务的情况下，可设置虚拟负责人代为管理。"
                                    placement="bottom-start">
                                    <el-button type="text" class="el-form-item--tip-label el-form-item__label">虚拟负责人<i
                                            class="el-icon-info el-icon--right"></i></el-button>
                                </el-tooltip>
                            </slot>
                            <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name7"
                                clearable placeholder="虚拟负责人">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                                <el-option label="王五" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        
                        <el-form-item v-show='showFiled' prop="username" label="公司名称">
                            <el-input v-model="base.name1" placeholder="公司名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="经营范围">
                            <el-select style='width:100%' v-model="form.name28" placeholder="经营范围" collapse-tags
                                multiple clearable>
                                <el-option label="地产" value="1"></el-option>
                                <el-option label="教育" value="2"></el-option>
                                <el-option label="旅游" value="3"></el-option>
                                <el-option label="建材" value="4"></el-option>
                                <el-option label="高科技研发" value="5"></el-option>
                                <el-option label="物管" value="6"></el-option>
                                <el-option label="金融" value="7"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="公司口号">
                            <el-input style='width:100%' placeholder="公司口号" v-model="base.name6" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="username">
                            <slot slot="label" >
                                <el-tooltip class="item" effect="dark" content="配置该组织的公共角色，组织中的每个人都拥有这些角色。"
                                    placement="bottom-start">
                                    <el-button type="text" class="el-form-item--tip-label el-form-item__label" style='text-align:right'>公共角色<i
                                            class="el-icon-info el-icon--right"></i></el-button>
                                </el-tooltip>
                            </slot>
                            <el-button @click='dlgRelation = true' type="text" size="small">
                                配置
                            </el-button>
                        </el-form-item>

                    </el-form>
                </el-col>
                <el-col :span='12'>
                    <el-form ref="nameForm" label-width="100px">
                        <el-form-item prop="username" label="名称">
                            <el-input v-model="form.name5" placeholder="名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="username" label="负责人">
                            <el-select filterable style='width:100%' multiple collapse-tags v-model="form.name6"
                                clearable placeholder="负责人">
                                <el-option label="张三" value="1"></el-option>
                                <el-option label="李四" value="2"></el-option>
                                <el-option label="王五" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="username" label="类型">
                            <el-select filterable style='width:100%' v-model="form.name8" clearable placeholder="类型">
                                <el-option label="大区" value="1"></el-option>
                                <el-option label="学区" value="2"></el-option>
                                <!--<el-option label="学校" value="7"></el-option>-->
                                <el-option label="部门" value="3"></el-option>
                                <el-option label="一体化" value="8"></el-option>
                                <el-option label="高中" value="4"></el-option>
                                <el-option label="初中" value="5"></el-option>
                                <el-option label="小学" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="username" label="成立时间">
                            <el-date-picker style='width:100%' v-model="base.name4" type="date" clearable placeholder="成立时间">
                            </el-date-picker>
                        </el-form-item>
                        <!-- <el-form-item prop="username" label="总部地点">
                            <el-input v-model="base.name3" placeholder="总部地点" clearable></el-input>
                        </el-form-item> -->
                        <el-form-item v-show='showFiled' prop="username" label="外文名称">
                            <el-input v-model="base.name2" placeholder="外文名称" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="公司性质">
                            <el-select style='width:100%' v-model="base.name5" placeholder="公司性质" clearable>
                                <el-option label="民营" value="1"></el-option>
                                <el-option label="有限责任公司" value="2"></el-option>
                                <el-option label="国有独资公司" value="3"></el-option>
                                <el-option label="股份有限公司" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="员工数">
                            <el-input style='width:100%' placeholder="员工数" v-model="base.name7" clearable></el-input>
                        </el-form-item>
                        <el-form-item v-show='showFiled' prop="username" label="创始人">
                            <el-input style='width:100%' placeholder="创始人" v-model="base.name8" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgNew = false' size="small">新建</el-button>
            </div>
        </el-dialog>

        <!-- 修改角色 -->
        <el-dialog width='40%' title='角色' :visible.sync='dlgRelation'>
            <el-table border :data="dataScope" max-height="250" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="角色名" prop="label">
                </el-table-column>
                <el-table-column label="描述" prop="desc">
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgRelation = false'>关联</el-button>
            </div>
        </el-dialog>

        <!-- 修改上级组织 -->
        <el-dialog width='40%' title='组织' :visible.sync='dlgOrg'>
            <el-tree :data="dataMenu" accordion :expand-on-click-node="false">
            </el-tree>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click='dlgRelation = false'>选择</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style scoped>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

    .el-form-item--tip-label {
        color: #606266;
        /* reset to normal color */
        font-size: 14px;
        /* vue use px as unit, which is bad */
        padding-top: 0;
        padding-bottom: 0;
    }

    .el-form-item--tip-label:hover {
        color: #409EFF;
    }

</style>

<script>
    export default {
        name: 'baseform',
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
                dlgEdit: false,
                dlgNew: false,
                dlgRelation: false,
                dlgOrg: false,
                form: {
                    name1: '总裁办',
                    name2: ['1', '2'],
                    name3: ['1'],
                    name4: '2',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: '',
                    name15: '',
                    name16: '',
                    name17: '',
                    name18: 'treenode1101'

                },
                base: {
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                },
                data: generateData(),
                dataMenu: [{
                    id: 2,
                    label: '神州天立集团',
                    icon: 'el-icon-menu',
                    children: [{
                            id: 4,
                            label: '总裁办',
                            icon: 'icon-ziyuan',
                            children: [{
                                    id: 11,
                                    label: '计划运营部',
                                    icon: 'icon-ziyuan'
                                },
                                {
                                    id: 12,
                                    label: '信息体系部',
                                    icon: 'icon-ziyuan'
                                },
                            ]
                        },
                        {
                            id: 5,
                            label: '人力资源中心',
                            icon: 'icon-ziyuan',
                            children: [{
                                    id: 11,
                                    label: '人事部',
                                    icon: 'icon-ziyuan'
                                },
                                {
                                    id: 12,
                                    label: '培训部',
                                    icon: 'icon-ziyuan'
                                },
                                {
                                    id: 13,
                                    label: '宣传及品牌部',
                                    icon: 'icon-ziyuan'
                                },
                            ]

                        },
                        {
                            id: 6,
                            label: '资金财务中心',
                            icon: 'icon-ziyuan',
                            children: [{
                                    id: 15,
                                    label: '财务部',
                                    icon: 'icon-ziyuan'
                                },
                                {
                                    id: 16,
                                    label: '资金部',
                                    icon: 'icon-ziyuan'
                                }
                            ]
                        },
                        {
                            id: 7,
                            label: '四川大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [{
                                    id: 172,
                                    label: '财务部',
                                    icon: 'icon-ziyuan'
                                },
                                {
                                    id: 17,
                                    label: '成都学区',
                                    icon: 'icon-_yijicaidanduanxinguanli',
                                    children: [{
                                            id: 1712,
                                            label: '成都东区天立学校',
                                            icon: 'icon-classroom',
                                            children: [{
                                                id: 15,
                                                label: '财务部',
                                                icon: 'icon-ziyuan'
                                            }]
                                        },
                                        {
                                            id: 1713,
                                            label: '成都南区天立学校',
                                            icon: 'icon-classroom',
                                            children: [{
                                                id: 15,
                                                label: '招生部',
                                                icon: 'icon-ziyuan'
                                            }]
                                        },
                                        {
                                            id: 172,
                                            label: '招生部',
                                            icon: 'icon-ziyuan'
                                        }
                                    ]
                                },
                                {
                                    id: 171,
                                    label: '泸州学区',
                                    icon: 'icon-_yijicaidanduanxinguanli'
                                },
                            ]
                        },
                        {
                            id: 8,
                            label: '重庆大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [{
                                id: 17,
                                label: '沙坪坝学区',
                                icon: 'icon-_yijicaidanduanxinguanli',
                                children: [{
                                    id: 1712,
                                    label: '沙坪坝天立学校',
                                    icon: 'icon-classroom',
                                    children: [{
                                        id: 15,
                                        label: '财务部',
                                        icon: 'icon-ziyuan'
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 9,
                            label: '湖南大区',
                            icon: 'icon-xuexiaoguanli',
                            children: [{
                                id: 17,
                                label: '湘潭学区',
                                icon: 'icon-_yijicaidanduanxinguanli'
                            }]
                        }
                    ]
                }],
                //角色绑定
                dataScope: [{
                        id: 1,
                        label: '教务',
                        desc: '创建教务角色'
                    },
                    {
                        id: 3,
                        label: '行政',
                        desc: '创建行政角色'
                    }, {
                        id: 5,
                        label: '财务',
                        desc: '创建财务角色'
                    }
                ],
                showFiled: false,
                baseedit: {
                    name1: '神州天立投资集团有限公司',
                    name2: 'Shenzhoutianli Investment Group Co.,Ltd.',
                    name3: '中国成都',
                    name4: '2001',
                    name5: '1',
                    name6: '做行业领跑者，成就幸福人生',
                    name7: '4000余人',
                    name8: '罗实',
                    name9: ['1', '2', '3', '4', '5', '6', '7']
                }
            }
        },
        mounted() {
            this.$refs.tree.setCurrentKey("2")
        },
        methods: {
            edit(data) {
                if (this.$refs.tree.getCurrentNode()) {
                    this.dlgEdit = true
                    if (this.$refs.tree.getCurrentNode().id == 2) {
                        this.showFiled = true
                        this.titleForUpdate = '修改集团';
                    } else {
                        this.showFiled = false
                        this.titleForUpdate = '修改组织';
                    }
                    this.form.name1 = this.$refs.tree.getCurrentNode().label
                } else {
                    this.$message({
                        message: '请选择一条数据',
                        type: 'warning',
                        duration: '1000'
                    });
                }
            },
            add(data) {
                this.showFiled = false
                if (this.$refs.tree.getCurrentNode()) {
                    this.dlgNew = true
                    //this.form.name5 = this.$refs.tree.getCurrentNode().label
                    this.form.name15 = this.$refs.tree.getCurrentNode().label
                } else {
                    this.$message({
                        message: '请选择一条数据',
                        type: 'warning',
                        duration: '1000'
                    });
                }
            },
            //点击树
            nodeClick(data, node, isSelf) {
                this.form.name15 = data.label
                this.form.name16 = data.label
                this.form.name1 = data.label
                //this.form.name5 = data.label
                if (data.id == 2) {
                    this.showFiled = true
                } else {
                    this.showFiled = false
                }
            },
            //关闭dlg
            close() {}
        }
    }

</script>
