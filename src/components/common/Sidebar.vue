<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            <i :class="subItem.icon"></i>
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'iconfont icon-xitongshouye',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'iconfont icon-jituanguanli',
                        index: '3',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'VgroupManage',
                                title: '组织架构',
                                icon: 'iconfont  icon-zuzhijiagou',
                            },
                            
                            {
                                index: 'dicZhiwei',
                                title: '职位管理',
                                icon: 'iconfont icon-bumenguanli',
                            },
                            {
                                index: 'dicGangwei',
                                title: '岗位管理',
                                icon: 'iconfont icon-gangweiguanli',
                            },
                            {
                                index: 'dicDengji',
                                title: '等级管理',
                                icon: 'iconfont icon-zhiweiguanli-',
                            },{
                                index: 'dicManage',
                                title: '字典管理',
                                icon: 'iconfont icon-xuexiaoguanli',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-quanxian',
                        index: 'table',
                        title: '权限管理',
                        subs:[
                            {
                                index: 'staffManageNew',
                                title: '教职工管理',
                                icon: 'iconfont icon-jiaozhigongguanli',
                            },
                             {
                                index: 'roleManage',
                                title: '角色管理',
                                icon: 'iconfont icon-jiaoseguanli',
                            },
                            {
                                icon: 'iconfont icon-zuzhijiagou',
                                index: 'menuManage',
                                title: '菜单管理'
                            }
                        ]
                    },
                    {
                        icon: 'iconfont icon-jiaowuguanli',
                        index: 'charts',
                        title: '教务管理',
                         subs: [
                            {
                                index: 'semesterManage',
                                title: '学期管理',
                                icon: 'iconfont icon-xueqiguanli',
                            },
                            {
                                index: 'subjectManage',
                                title: '学科管理',
                                icon: 'iconfont icon-xuekeguanli',
                            },
                            {
                                index: 'banjiManage',  // conflict with 'classManage'
                                title: '班级管理',
                                icon: 'iconfont icon-banjiguanli',
                            },
                            {
                                index: 'examManage',
                                title: '考试管理',
                                icon: 'iconfont icon-zaixiankaoshiguanli',
                            },
                            {
                                index: 'scoreManage',
                                title: '成绩管理',
                                icon: 'iconfont icon-chengjiguanli',
                            },
                            {
                                index: 'roomManage',
                                title: '教室管理',
                                icon: 'iconfont icon-classroom',
                            },
                            {
                                index: 'classManage',
                                title: '课程表管理',
                                icon: 'iconfont icon-kechengbiao',
                            },
                            {
                                index: 'nianjiManage',
                                title: '年级管理',
                                icon: 'iconfont icon-nianji',
                            },
                            {
                                index: 'studentManage',
                                title: '学生管理',
                                icon: 'iconfont icon-nianji',
                            }
                        ]
                    },
                    {
                        icon: 'iconfont icon-xiaoxiguanli',
                        index: 'tabs',
                        title: '消息管理',
                        subs:[
                            {
                                index: 'messManage',
                                title: '短信',
                                icon: 'iconfont icon-_yijicaidanduanxinguanli',
                            }
                        ]
                    },
                    
                    
                    {
                        icon: 'iconfont icon-yingyongguanli',
                        index: '4',
                        title: '应用管理',
                        subs:[
                            {
                                index:'appManage',
                                title:'应用信息',
                                icon:'iconfont icon-ziyuan'
                            },
                            {
                                index:'scopeConfig',
                                title:'应用范围配置',
                                icon:'iconfont icon-fanwei'
                            },
                            {
                                index:'apiConfig',
                                title:'应用接口配置',
                                icon:'iconfont icon-jiekoupeizhi'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
