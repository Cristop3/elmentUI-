<template>
    <div class="emoji">
        <ul class="emoji-container">
            <li style="padding: 0">
                <a  v-for="(emoji, index) in dsEmoji" :key="index" :class="emoji.icon" :title="emoji.icon" @click="selectItem(emoji)"></a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'emoji',
        data() {
            return {
                dsEmoji: [{
                        id: 1,
                        icon: 'iconfont icon-gangweiguanli'
                    },
                    {
                        id: 2,
                        icon: 'iconfont icon-xuexiaoguanli'
                    },
                    {
                        id: 3,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 4,
                        icon: 'iconfont icon-jituanguanli'
                    },
                    {
                        id: 5,
                        icon: 'iconfont icon-jituanguanli'
                    },
                    {
                        id: 6,
                        icon: 'iconfont icon-xitongshouye'
                    },
                    {
                        id: 7,
                        icon: 'iconfont icon-zhiweiguanli-'
                    },
                    {
                        id: 8,
                        icon: 'iconfont icon-quanxian'
                    },
                    {
                        id: 9,
                        icon: 'iconfont icon-jiaozhigongguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                    {
                        id: 7,
                        icon: 'iconfont icon-zhiweiguanli-'
                    },
                    {
                        id: 8,
                        icon: 'iconfont icon-quanxian'
                    },
                    {
                        id: 9,
                        icon: 'iconfont icon-jiaozhigongguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                    {
                        id: 7,
                        icon: 'iconfont icon-zhiweiguanli-'
                    },
                    {
                        id: 8,
                        icon: 'iconfont icon-quanxian'
                    },
                    {
                        id: 9,
                        icon: 'iconfont icon-jiaozhigongguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                    {
                        id: 10,
                        icon: 'iconfont icon-jiaoseguanli'
                    },
                    {
                        id: 11,
                        icon: 'iconfont icon-zuzhijiagou'
                    },
                    {
                        id: 12,
                        icon: 'iconfont icon-jiaowuguanli'
                    },
                    {
                        id: 13,
                        icon: 'iconfont icon-xueqiguanli'
                    },
                    {
                        id: 14,
                        icon: 'iconfont icon-xuekeguanli'
                    },
                ]
            }
        },
        methods: {
            selectItem(emoji) {
                this.$emit('select', emoji)
            }
        },
        computed: {

        }
    }

</script>

<style lang='scss' scoped>
    .emoji {
        width: 380px;
        height: 146px;
        bottom: 30px;
        background: #fff;
        z-index: 10;
        padding: 10px;
        margin-right: 10px;

        .emoji-container {
            height: 140px;
            overflow-y: auto;
            overflow-x: hidden;
            position: relative;

            li {
                padding: 5px;

                a {
                    font-size: 24px;
                    float: left;
                    overflow: hidden;
                    height: 30px;
                    transition: all ease-out .2s;
                    border-radius: 4px;
                    cursor: pointer;

                    &:hover {
                        background-color: #1E90FF;
                        border-color: #1E90FF;
                    }
                }
            }
        }
    }

</style>
