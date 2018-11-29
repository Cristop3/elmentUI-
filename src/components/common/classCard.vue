<template>
    <div style="">
        <!--查看-->
        <table v-if="!edit" class="look" border="1px" style="border-collapse:collapse;width:100%;">
            <tr style="background-color:#409EFF; color: #fff;">
                <th colspan="2">
                    <!-- <el-select v-model="week" placeholder="请选择周数" class="weekselect">
                       <el-option v-for="item in classData.weeks" :key="item.id" :label="item.text" :value="item.id"></el-option>
                   </el-select> -->
                </th>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
            </tr>
            <tr>
                <td>早自习</td>
                <td>
                    第一节
                    <p>7:30 ~ 8:10</p>

                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>
                <td rowspan="4">上午</td>
                <td>第一节
                    <p>8:30 ~ 9:10</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>
                <td>第二节<p>9:20 ~ 10:00</p>
                </td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>

                <td>第三节<p>10:20 ~ 11:00</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>

                <td>第四节<p>11:10 ~ 11:50</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="4">下午</td>
                <td>第一节<p>13:20 ~ 14:00</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
            </tr>
            <tr>

                <td>第二节<p>14:10 ~ 14:50</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
            </tr>
            <tr>

                <td>第三节<p>15:00 ~ 15:40</p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>

                <td>第四节<p>15:50 ~ 16:30</p>
                </td>
                <td></td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td></td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>
                <td rowspan='2'>晚自习</td>
                <td>第一节<p>19:00 ~ 19:40</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
            </tr>
            <tr>
                <td>第二节<p>19:50 ~ 20:30</p>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                </td>
                <td>
                </td>
                <td>
                </td>
            </tr>
        </table>

        <!--修改-->
        <table v-else class="edit" border="1px" style="border-collapse:collapse;width:100%;font-size:0.625rem">
            <tr style="background-color:#409EFF;color: #fff;">
                <th colspan="2">
                </th>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
            </tr>
            <tr>
                <td>早自习</td>
                <td>
                    第一节
                    <p>7:30 ~ 8:10</p>
                    <p>
                        <el-button type="text" @click="zaozixi" size="small">新建一节</el-button>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <!-- <el-cascader expand-trigger="hover" :change-on-select="true" :options="regionOptions"
                        :show-all-levels="true" clearable placeholder="课名/老师"></el-cascader>-->

                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <!--demo阶段-->
            <tr v-show='this.zaozixi1'>
                <td></td>
                <td>
                    第二节
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                <el-button type="text" @click="zaozixi1 = false" size="small">取消</el-button>

                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>
                <td rowspan="4">上午</td>
                <td>第一节<p>8:30 ~ 9:10</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>

                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>
                <td>第二节<p>9:20 ~ 10:00</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>

                <td>第三节<p>10:20 ~ 11:00</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>

                <td>第四节<p>11:10 ~ 11:50</p>
                    <p>
                        <el-button type="text" @click="shangwu" size="small">新建一节</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <!--demo阶段-->
            <tr v-show='this.shangwu1'>
                <td></td>
                <td>
                    第五节
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                <el-button type="text" @click="shangwu1 = false" size="small">取消</el-button>

                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>
                <td rowspan="4">下午</td>
                <td>第一节<p>13:20 ~ 14:00</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>

                <td>第二节<p>14:10 ~ 14:50</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>

                <td>第三节<p>15:00 ~ 15:40</p><el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>

                <td>第四节<p>15:50 ~ 16:30</p>
                    <p>
                        <el-button type="text" @click="xiawu" size="small">新建一节</el-button>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <!--demo阶段-->
            <tr v-show='this.xiawu1'>
                <td></td>
                <td>
                    第五节
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                        <el-button type="text" @click="xiawu1 = false" size="small">取消</el-button>

                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>
                <td rowspan='2'>晚自习</td>
                <td>第一节<p>19:00 ~ 19:40</p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <tr>
                <td>第二节<p>19:50 ~ 20:30</p><el-button type="text" @click="wanzixi" size="small">新建一节</el-button>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p>张三(语文)</p>
                    <p>三教1001室</p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
            <!--demo阶段-->
            <tr v-show='this.wanzixi1'>
                <td></td>
                <td>
                    第三节
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit3 = true" size="small">修改</el-button>
                        <el-button type="text" @click="wanzixi1 = false" size="small">取消</el-button>

                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
                <td>
                    <p></p>
                    <p></p>
                    <p>
                        <el-button type="text" @click="dlgEdit2 = true" size="small">修改</el-button>
                    </p>
                </td>
            </tr>
        </table>
        <!-- 新建课表节数 -->
        <el-dialog width='35%' title="修改时间" :visible.sync="dlgEdit3">
            <el-form ref="nameForm" label-width="100px">
                <el-form-item prop="username" label="时间">
                    <div style='display:inline-block;width:160px'>
                        <el-time-select style='width:100%' placeholder="起始时间" v-model="startTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }">
                        </el-time-select>
                    </div>
                    <div style='display:inline-block;width:160px'>
                        <el-time-select style='width:100%' placeholder="结束时间" v-model="endTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                        }">
                        </el-time-select>
                    </div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit3 = false" size="small">修改</el-button>
            </div>
        </el-dialog>

        <!-- 修改课表节数 -->
        <el-dialog width='35%' title="修改课程" :visible.sync="dlgEdit2">
            <el-form ref="nameForm" label-width="100px">
                <!--<el-form-item prop="username" label="类型">
                    <el-select style='width:100%' v-model="form.name11" placeholder="类型" clearable>
                        <el-option label="早自习" value="1"></el-option>
                        <el-option label="上午" value="2"></el-option>
                        <el-option label="下午" value="3"></el-option>
                        <el-option label="晚上" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="username" label="节数">
                    <el-select style='width:100%' v-model="form.name12" placeholder="节数" clearable>
                        <el-option label="第一节" value="1"></el-option>
                        <el-option label="第二节" value="2"></el-option>
                        <el-option label="第三节" value="3"></el-option>
                        <el-option label="第四节" value="4"></el-option>
                    </el-select>
                </el-form-item>-->
                <el-form-item prop="username" label="课名/老师">
                    <el-cascader style='width:100%' expand-trigger="hover" :change-on-select="true" :options="regionOptions"
                        :show-all-levels="true" clearable placeholder="课名/老师"></el-cascader>
                </el-form-item>
               <!-- <el-form-item prop="username" label="时间">
                    <div style='display:inline-block;width:160px'>
                        <el-time-select style='width:100%' placeholder="起始时间" v-model="startTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }">
                        </el-time-select>
                    </div>
                    <div style='display:inline-block;width:160px'>
                        <el-time-select style='width:100%' placeholder="结束时间" v-model="endTime" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                        }">
                        </el-time-select>
                    </div>
                </el-form-item>-->
                <el-form-item prop="username" label="地点">
                    <el-input placeholder="地点" v-model='form.name13' clearable></el-input>
                </el-form-item>
                <!--<el-form-item prop="username" label="星期">
                    <el-select style='width:100%' multiple v-model="form.name14" placeholder="星期" clearable>
                        <el-option label="周一" value="1"></el-option>
                        <el-option label="周二" value="2"></el-option>
                        <el-option label="周三" value="3"></el-option>
                        <el-option label="周四" value="4"></el-option>
                        <el-option label="周五" value="5"></el-option>
                    </el-select>
                </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit2 = false" size="small">修改</el-button>
            </div>
        </el-dialog>
    </div>



</template>
<script>
    export default {
        name: 'classCard',
        data() {
            return {
                zaozixi1:false,
                shangwu1:false,
                xiawu1:false,
                wanzixi1:false,
                week: 1,
                regionOptions: [{
                    value: '语文',
                    label: '语文',
                    children: [{
                        value: '张三',
                        label: '张三'
                    }, {
                        value: '李四',
                        label: '李四'
                    }, {
                        value: '宋五',
                        label: '宋五'
                    }]
                }, {
                    value: '数学',
                    label: '数学',
                    children: [{
                        value: '慕容',
                        label: '慕容'
                    }, {
                        value: '南宫',
                        label: '南宫'
                    }]
                }, {
                    value: '英语',
                    label: '英语',
                    children: [{
                        value: '钱五',
                        label: '钱五'
                    }, {
                        value: '赵芳',
                        label: '赵芳'
                    }]
                }],
                dlgNew: false,
                dlgEdit2: false,
                dlgEdit3: false,
                form: {
                    name1: '',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: [],
                    name7: '',
                    name8: [],
                    name9: '',
                    name10: '',
                    name11: '',
                    name12: '',
                    name13: '',
                    name14: [],
                },
                startTime: '',
                endTime: '',
            }
        },
        props: {
            classData: {
                type: Object
            },
            edit: {
                type: Boolean
            }
        },
        methods:{
            zaozixi(){
                this.zaozixi1 = true
            },
            shangwu(){

                this.shangwu1 = true
            },
            xiawu(){
                this.xiawu1 = true
            },
            wanzixi(){
                this.wanzixi1 = true
            }
        }


    }

</script>

<style lang="scss" scoped>
    .look {

        th,
        td {
            text-align: center;
            padding: 10px;
        }

        tr:nth-child(odd) {
            background-color: #f0f9eb;
        }

        .weekselect {
            width: 100px;
        }
    }

    .edit {

        th,
        td {
            text-align: center;
            width: 50px;
        }

        th {
            padding: 10px;
        }

        .weekselect {
            width: 100px;
        }

        input {
            width: 100%;
            height: 100%;
            line-height: 100%;
            text-align: center;
            font-size: 14px;
            padding: 10px 0;
            border: none;
            outline: none;
        }
    }

</style>
