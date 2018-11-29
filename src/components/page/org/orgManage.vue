<template>
    <div @click='curRootClick'>
        <div class="text-center">
            <org-tree :data="data" :horizontal="horizontal" :collapsable="true" :label-class-name="labelClassName"
                :render-content="renderContent" @on-expand="onExpand" @on-node-click="onNodeClick">
            </org-tree>
        </div>
    </div>
</template>

<style>

    .text-center{
        padding-bottom:200px;
    }
    .bg-color {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        font-size: 13px;
    }

    #menu li {
        list-style: none;
        padding: 5px;
        color: #000;
    }

    #menu li:hover {
        background-color: #409eff;
        color: #fff;
        cursor: pointer;
    }

</style>

<script>
    // import {
    //     VoBasic
    // } from 'vue-orgchart'
    import OrgTree from '../../common/org-tree'
    import {
        renderNode
    } from '../../common/org-tree/node';

    export default {
        name: 'baseform',
        data: function () {
            return {
                data: {
                    id: 0,
                    label: '天立教育集团',
                    children: [{
                        id: 1,
                        label: '总裁办',
                        children: [{
                            id: 11,
                            label: '计划运营中心'
                        }, {
                            id: 12,
                            label: '信息体系部'
                        }, {
                            id: 13,
                            label: '对外交流及行政部'
                        }]
                    }, {
                        id: 2,
                        label: '资金财务中心',
                        children: [{
                            id: 21,
                            label: '财务部'
                        }, {
                            id: 22,
                            label: '资金部'
                        }, {
                            id: 23,
                            label: '上市办公室'
                        }]
                    }, {
                        id: 3,
                        label: '人力资源中心',
                        children: [{
                            id: 31,
                            label: '人事部'
                        }, {
                            id: 32,
                            label: '培训部'
                        }, {
                            id: 33,
                            label: '宣传及品牌部'
                        }]
                    }, {
                        id: 100, // virtual
                        label: '下划学区',
                        children: [{
                            id: 101,
                            label: '四川',
                            children: [{
                                id: 1001,
                                label: '成都学区',
                                children: [{
                                        id: 10010,
                                        label: '成都东区天立学校',
                                        children: [{
                                            id: 10011,
                                            label: '财务部',
                                        }, {
                                            id: 10012,
                                            label: '行政部',
                                        }, {
                                            id: 10013,
                                            label: '招宣部'
                                        }, {
                                            id: 10014,
                                            label: '后勤部'
                                        }]
                                    },
                                    {
                                        id: 100101,
                                        label: '成都天立小学'
                                    }
                                ]
                            }, {
                                id: 6,
                                label: '泸州学区'
                            }, {
                                id: 9,
                                label: '宜宾学区'
                            }]
                        }, {
                            id: 1113,
                            label: '湖南',
                            children: [{
                                id: 11117,
                                label: '湘潭学区',
                                children: [{
                                    id: 11112,
                                    label: '湘潭天立国际学校'
                                }]
                            }]
                        }]
                    }],

                },
                horizontal: true,
                collapsable: false,
                labelClassName: 'bg-color',
                lastId: -1
            }
        },
        components: {
            OrgTree
        },
        methods: {
            //新增同级
            addSiblings(){
                alert(1)
            },
            change(target) {
                if (target.label === '大区管理') {
                    this.$router.push('/areaManage')
                }
                if (target.label === '学区管理') {
                    this.$router.push('/schoolAreaManage')
                }
                if (target.label === '基础信息') {
                    this.$router.push('/VgroupManage')
                }
                if (target.label === '部门管理') {
                    this.$router.push('/bumen')
                }
            },
            renderContent(h, data) {
                return data.label
            },
            onExpand(data) {
                //去掉菜单
                let myMenu = document.getElementById('menu')
                if (myMenu) {
                    document.getElementsByClassName('node-position-' + this.lastId)[0].removeChild(myMenu)
                }
                if ('expand' in data) {
                    data.expand = !data.expand

                    if (!data.expand && data.children) {
                        this.collapse(data.children)
                    }
                } else {
                    this.$set(data, 'expand', true)
                }
            },
            onNodeClick(e, data) {
                // if (e && e.stopPropagation) {
                //     e.stopPropagation();
                // } else {
                //     window.event.cancelBubble = true;
                // }

                // let myMenu = document.getElementById('menu')
                // if (myMenu) {
                //     document.getElementsByClassName('node-position-' + this.lastId)[0].removeChild(myMenu)
                // }
                // this.lastId = data.id
                // let x = document.getElementsByClassName('node-position-' + data.id)
                // let newd = document.createElement('div')
                // newd.style.width = '70px'
                // newd.style.backgroundColor = '#D9D9D9'
                // newd.style.position = 'absolute'
                // newd.style.borderRadius = '5px'
                // newd.style.left = e.layerX + 'px'
                // newd.style.top = e.layerY + 'px'
                // newd.style.zIndex = 999
                // newd.id = 'menu'

                // //创建ul li
                // let ul = '<ul><li>新增同级</li><li>新增下级</li><li>修改</li><li>删除</li><li>岗位</li><li>职位</li></ul>'
                // newd.innerHTML = ul
                // x[0].appendChild(newd)

                // //给li添加点击事件
                // let i = 0
                // let len = newd.getElementsByTagName('li').length
                // let lis = newd.getElementsByTagName('li')
                // for (i; i < len; i++) {
                //     let _i = i;
                //     // lis[i].addEventListener('click', function (e) {
                //     //     if (e && e.stopPropagation) {
                //     //         e.stopPropagation();
                //     //     } else {
                //     //         window.event.cancelBubble = true;
                //     //     }
                //     //     alert(index)
                //     // },false)
                //     lis[i].onclick = function(e){
                //         if (e && e.stopPropagation) {
                //             e.stopPropagation();
                //         } else {
                //             window.event.cancelBubble = true;
                //         }
                //         _i == 0 && addSiblings()
                //     }
                // }
            },
            collapse(list) {
                //去掉菜单
                let myMenu = document.getElementById('menu')
                if (myMenu) {
                    document.getElementsByClassName('node-position-' + this.lastId)[0].removeChild(myMenu)
                }

                list.forEach(child => {
                    if (child.expand) {
                        child.expand = false
                    }
                    child.children && this.collapse(child.children)
                })
            },
            //当前页面root节点事件
            curRootClick() {
                let myMenu = document.getElementById('menu')
                if (myMenu) {
                    document.getElementsByClassName('node-position-' + this.lastId)[0].removeChild(myMenu)
                }
            },
            
        }
    }

</script>
