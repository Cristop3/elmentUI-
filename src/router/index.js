import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/system_main/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/VgroupManage',
                    component: resolve => require(['../components/page/org/VgroupManage.vue'], resolve),
                    meta: { title: '组织结构' }
                },
                {
                    path: '/dicZhiwei',
                    component: resolve => require(['../components/page/org/dicZhiwei.vue'], resolve),
                    meta: { title: '职位管理' }
                },
                {
                    path: '/dicGangwei',
                    component: resolve => require(['../components/page/org/dicGangwei.vue'], resolve),
                    meta: { title: '岗位管理' }
                },
                {
                    path: '/dicDengji',
                    component: resolve => require(['../components/page/org/dicDengji.vue'], resolve),
                    meta: { title: '等级管理' }
                },
                {
                    path: '/NEgroup',
                    component: resolve => require(['../components/page/org/NEgroup.vue'], resolve),
                    meta: { title: '修改集团' }
                },
                {
                    path: '/dicManage',
                    component: resolve => require(['../components/page/org/dicManage.vue'], resolve),
                    meta: { title: '字典管理' },
                    // children:[{
                    //     path:'dicList/:type',
                    //     component:resolve => require(['../components/page/org/dicList.vue'], resolve),
                    //     meta: { title: '字典数据' }
                    // }
                    // ]
                },
                {
                    path: '/dicList',
                    component: resolve => require(['../components/page/org/dicList.vue'], resolve),
                    meta: { title: '字典数据' }
                },
                {
                    path:'/Vschool',
                    component:resolve => require(['../components/page/org/Vschool.vue'],resolve),
                    meta:{title:'查看学校'}
                },
                {
                    path:'/NEschool',
                    component:resolve => require(['../components/page/org/NEschool.vue'],resolve),
                    meta:{title:'修改学校'}
                },
                {
                    path:'/Nschool',
                    component:resolve => require(['../components/page/org/Nschool.vue'],resolve),
                    meta:{title:'新增学校'}
                },
               /* {
                    path: '/deptManage',
                    component: resolve => require(['../components/page/org/deptManage.vue'], resolve),
                    meta: { title: '岗位管理' }
                },
                {
                    // 职位管理
                    path: '/jobManage',
                    component: resolve => require(['../components/page/org/jobManage.vue'], resolve),
                    meta: { title: '职位管理' }
                },
                {
                    // 教职工管理
                    path: '/staffManage',
                    component: resolve => require(['../components/page/permission/staffManage.vue'], resolve),
                    meta: { title: '教职工管理' }    
                },*/
                {
                    // 新教职工管理
                    path: '/staffManageNew',
                    component: resolve => require(['../components/page/permission/staffManageNew.vue'], resolve),
                    meta: { title: '教职工管理' }    
                },
                {
                    // 新增教职工
                    path: '/NEstaff',
                    component: resolve => require(['../components/page/permission/NEstaff.vue'], resolve),
                    meta: { title: '新增教职工' }    
                },
                {
                    // 修改教职工
                    path: '/Estaff',
                    component: resolve => require(['../components/page/permission/Estaff.vue'], resolve),
                    meta: { title: '修改教职工' }    
                },
                {
                    // 查看教职工管理
                    path: '/Vstaff',
                    component: resolve => require(['../components/page/permission/Vstaff.vue'], resolve),
                    meta: { title: '查看教职工管理' }    
                },
                {
                    // 角色管理
                    path: '/roleManage',
                    component: resolve => require(['../components/page/permission/roleManage.vue'], resolve),
                    meta: { title: '角色管理' }   
                },
                {
                    // 学期管理
                    path: '/semesterManage',
                    component: resolve => require(['../components/page/dean/semesterManage.vue'], resolve),
                    meta: { title: '学期管理' }
                },
                {
                    // 学科管理
                    path: '/subjectManage',
                    component: resolve => require(['../components/page/dean/subjectManage.vue'], resolve),
                    meta: { title: '学科管理' }
                },
                {
                    // 考试管理
                    path: '/examManage',
                    component: resolve => require(['../components/page/dean/examManage.vue'], resolve),
                    meta: { title: '考试管理', permission: true }
                },
                {
                    // 成绩管理
                    path: '/scoreManage',
                    component: resolve => require(['../components/page/dean/scoreManage.vue'], resolve),
                    meta: { title: '成绩管理' }
                },
                {
                    // 成绩详情
                    path: '/scoreList',
                    component: resolve => require(['../components/page/dean/scoreList.vue'], resolve),
                    meta: { title: '成绩详情' }
                },
                {
                    // 教室管理
                    path: '/roomManage',
                    component: resolve => require(['../components/page/dean/roomManage.vue'], resolve),
                    meta: { title: '教室管理' }
                },
                {
                    // 课程表管理
                    path: '/classManage',
                    component: resolve => require(['../components/page/dean/classManage.vue'], resolve),
                    meta: { title: '课程表管理', permission: true }
                },
                {
                    // 课程表详情
                    path: '/classDetails',
                    component: resolve => require(['../components/page/dean/classDetails.vue'], resolve),
                    meta: { title: '课程表详情', permission: true }
                },
                {
                    // 年级管理
                    path: '/nianjiManage',
                    component: resolve => require(['../components/page/dean/nianjiManage.vue'], resolve),
                    meta: { title: '年级管理', permission: true }
                },
                {
                    // 学生管理
                    path: '/studentManage',
                    component: resolve => require(['../components/page/dean/studentManage.vue'], resolve),
                    meta: { title: '学生管理', permission: true }
                },
                {
                    // 短信
                    path: '/messManage',
                    component: resolve => require(['../components/page/message/messManage.vue'], resolve),
                    meta: { title: '短信', permission: true }
                },
                {
                    // 查看短信
                    path: '/Vmess',
                    component: resolve => require(['../components/page/message/Vmess.vue'], resolve),
                    meta: { title: '查看短信', permission: true }
                },
                {
                    // 新建短信
                    path: '/Nmess',
                    component: resolve => require(['../components/page/message/Nmess.vue'], resolve),
                    meta: { title: '新建短信', permission: true }
                },
                {
                    // 修改短信
                    path: '/Emess',
                    component: resolve => require(['../components/page/message/Emess.vue'], resolve),
                    meta: { title: '修改短信', permission: true }
                },
                {
                    // 系统消息
                    path: '/messageList',
                    component: resolve => require(['../components/page/system_main/messageList.vue'], resolve),
                    meta: { title: '系统消息', permission: true }
                },
                {
                    // 个人资料
                    path: '/changePsd',
                    component: resolve => require(['../components/page/system_main/changePsd.vue'], resolve),
                    meta: { title: '个人资料', permission: true }
                },
                {
                    // 所有公告
                    path: '/adsList',
                    component: resolve => require(['../components/page/system_main/adsList.vue'], resolve),
                    meta: { title: '所有公告', permission: true }
                
                },
                {
                    // 应用管理
                    path: '/appManage',
                    component: resolve => require(['../components/page/app/appManage.vue'], resolve),
                    meta: { title: '所有公告', permission: true }
                
                },
                {
                    // 部门管理
                    path: '/bumen',
                    component: resolve => require(['../components/page/org/bumen.vue'], resolve),
                    meta: { title: '部门管理', permission: true }
                
                },
                {
                    // 大区管理
                    path: '/areaManage',
                    component: resolve => require(['../components/page/org/areaManage.vue'], resolve),
                    meta: { title: '大区管理', permission: true }
                
                },
                {
                    // 学区管理
                    path: '/schoolAreaManage',
                    component: resolve => require(['../components/page/org/schoolAreaManage.vue'], resolve),
                    meta: { title: '学区管理', permission: true }
                
                },
                {
                    // 组织结构
                    path: '/orgManage',
                    component: resolve => require(['../components/page/org/orgManage.vue'], resolve),
                    meta: { title: '组织结构', permission: true }
                
                },
                {
                    // 菜单管理
                    path: '/menuManage',
                    component: resolve => require(['../components/page/system_main/menuManage.vue'], resolve),
                    meta: { title: '菜单管理', permission: true }
                
                },
                {
                    // 学校部门管理
                    path: '/bumenschool',
                    component: resolve => require(['../components/page/org/bumenschool.vue'], resolve),
                    meta: { title: '学校部门管理', permission: true }
                
                },
                {
                    // 班级管理
                    path: '/banjiManage',
                    component: resolve => require(['../components/page/dean/banjiManage.vue'], resolve),
                    meta: { title: '班级管理', permission: true }
                
                }
                ,
                {
                    // 应用范围配置
                    path: '/scopeConfig',
                    component: resolve => require(['../components/page/app/scopeConfig.vue'], resolve),
                    meta: { title: '应用范围配置', permission: true }
                
                }
                ,
                {
                    // 应用接口配置
                    path: '/apiConfig',
                    component: resolve => require(['../components/page/app/apiConfig.vue'], resolve),
                    meta: { title: '应用接口配置', permission: true }
                
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/system/Login.vue'], resolve)
        },
        {
            path: '/forgetPsd',
            component: resolve => require(['../components/page/system/forgetPsd.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/status/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/status/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
