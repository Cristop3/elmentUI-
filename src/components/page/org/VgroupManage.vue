<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>组织架构</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


        <el-tabs value='集团信息'>
            <el-tab-pane label="集团信息" name='集团信息'>
                <div class="container">
                    <div>
                        <el-button style='float:right' type="text" @click='dlgEdit = true'>修改</el-button>
                    </div>
                    <div class='both' style="clear:both">
                        <div class='left'>
                            <img style='width:200px;height:200px' src='../../../assets/header.jpg' />
                        </div>
                        <div class='right'>
                            
                            <table class='info'>
                                <tr>
                                    <td>公司名称</td>
                                    <td>神州天立投资集团有限公司</td>
                                    <td>公司性质</td>
                                    <td>民营</td>
                                </tr>
                                <tr>
                                    <td>外文名称</td>
                                    <td>Shenzhoutianli Investment Group Co.,Ltd.</td>
                                    <td>公司口号</td>
                                    <td>做行业领跑者，成就幸福人生</td>
                                </tr>
                                <tr>
                                    <td>总部地点</td>
                                    <td>中国成都</td>
                                    <td>员工数</td>
                                    <td>4000余人</td>
                                </tr>
                                <tr>
                                    <td>成立时间</td>
                                    <td>1999年</td>
                                    <td>创始人</td>
                                    <td>罗实</td>
                                </tr>
                                <tr>
                                    <td>经营范围</td>
                                    <td colspan='3'>地产、教育、酒店旅游、建材、高科技研发、物管、金融等</td>

                                </tr>
                            </table>
                        </div>
                    </div>
                    <p style='font-size:14px;padding:1rem 0.5rem;clear:both; line-height:1.6rem'>
                           <span v-html="note"></span>
                            <!--<span :html='notes'></span>-->
                            <!--<span v-html='xx()'></span>-->
                            <el-button v-if='!onOff' type="text" @click='open(1)'><i class="el-icon-d-arrow-right el-icon--right"></i></el-button>
                            <el-button v-if='onOff' type="text" @click='open(2)'><i class="el-icon-d-arrow-left el-icon--right"></i></el-button>
                        </p>
                        <div class="add">地址：中国四川省成都市青羊工业园T25座 &nbsp;&nbsp;&nbsp;&nbsp;电话：+86-28-87016688 &nbsp;&nbsp;&nbsp;&nbsp; 邮箱：sztljt@sztljt.com
                        </div>
                </div>
            </el-tab-pane>
            <!--
            <el-tab-pane label="大区管理" name='大区管理'>
                <areaManage></areaManage>
            </el-tab-pane>
            <el-tab-pane label="学区管理" name='学区管理'>
                <schoolAreaManage></schoolAreaManage>
            </el-tab-pane>
            <el-tab-pane label="部门管理" name='部门管理'>
                <bumen></bumen>
            </el-tab-pane>-->
            <el-tab-pane label="组织结构" name='组织结构'>
                <orgZhuzhi></orgZhuzhi>
            </el-tab-pane>
        </el-tabs>

         <!-- 修改基础 -->
        <el-dialog width='60%' title='修改基础信息'  :visible.sync='dlgEdit'>
                <el-form :label-position="labelPosition" label-width="130px" :model="form">

            <el-row type="flex" class="row-bg">
                    <el-col :span='12'>
                    <el-form-item label="集团logo">
                        <el-upload  id='baseInfo'  action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                            >
                            <img v-if="imageUrlEdit" :src="imageUrlEdit" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="公司名称">
                        <el-input style='width:100%' v-model="form.name20" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="外文名称">
                        <el-input style='width:100%' v-model="form.name21" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="总部地点">
                        <el-input style='width:100%' v-model="form.name22" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="成立时间" >
                        <el-date-picker style='width:100%' v-model="form.name23" type="date" clearable placeholder="成立时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="公司性质">
                         <el-select style='width:100%' v-model="form.name24" placeholder="公司性质"  clearable>
                        <el-option label="民营" value="1"></el-option>
                        <el-option label="有限责任公司" value="2"></el-option>
                        <el-option label="国有独资公司" value="3"></el-option>
                        <el-option label="股份有限公司" value="4"></el-option>
                    </el-select>
                    </el-form-item>
                     <el-form-item label="公司口号">
                        <el-input style='width:100%' v-model="form.name25" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="员工数">
                        <el-input style='width:100%' v-model="form.name26" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="创始人">
                        <el-input style='width:100%' v-model="form.name27" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="经营范围">
                        <el-select style='width:100%' v-model="form.name28" placeholder="经营范围" collapse-tags multiple clearable>
                        <el-option label="地产" value="1"></el-option>
                        <el-option label="教育" value="2"></el-option>
                        <el-option label="旅游" value="3"></el-option>
                        <el-option label="建材" value="4"></el-option>
                        <el-option label="高科技研发" value="5"></el-option>
                        <el-option label="物管" value="6"></el-option>
                        <el-option label="金融" value="7"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input style='width:100%' v-model="form.name29" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input style='width:100%' v-model="form.name30" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                         <el-input style='width:100%' v-model="form.name31" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span='24'>
                     <el-form-item label="简介">
                        <el-input type='textarea' style='width:94%' rows='5' v-model="form.name32" clearable></el-input>
                     </el-form-item>
                </el-col>
            </el-row>
                  </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dlgEdit = false"   size="small">修改</el-button>
            </div>
        </el-dialog>


    </div>
</template>



<script>
// import areaManage from "../../../components/page/org/areaManage.vue";
// import schoolAreaManage from "../../../components/page/org/schoolAreaManage.vue";
// import bumen from "../../../components/page/org/bumen.vue";
//import orgManage from "../../../components/page/org/orgManage.vue";
import orgZhuzhi from "../../../components/page/org/orgZhuzhi.vue";
    export default {
        components:{orgZhuzhi},
        name: 'baseform',
        data: function () {
            return {
                imageUrlEdit: './static/img/header.jpg',
                dlgEdit:false,
                labelPosition: 'right',
                allContent: `
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;神州天立投资集团旗下地产产业以“立足成都，
                    放眼全国”为战略发展方向，目前已在成都、泸州、宜宾、
                    广元、西昌、内江、西宁等地成功开发众多高品质的民生住宅、
                    商业综合体、文旅地产、 部分天立国际学校 部分天立国际学校(3张)
                     产业地产、教育综合体等项目。
                        先后开发和正在开发泸州墨香苑、天立水晶城、
                        外滩一号、一品上城，以及龙泉天立广场和彭州世纪华府、
                        郫县香缇华府、宜宾学府华庭、天立酒街、广元学府华庭、
                        玉蟾国际温泉度假区、黄荆假日酒店、宜宾临港总部基地、
                        中国西南机械装备贸易城等一大批高品质项目。
                        旗下教育产业秉承“天之骄子，立己达人”的校训，实施“国际化、
                        民族化、个性化”发展战略，坚持以国家级示范性学校规格打造每一份作品，
                        立志成为中国基础教育的改革者与创新者。 
                        <p style="margin:1rem 0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，天立国际学校已落
                        户成都、泸州、宜宾、内江、广元、西昌、西宁等城市，教育领域涵盖学前、
                        小学、初中、高中，以高水平的教育质量及突出的教学成绩，在省内外享有
                        较高声誉，天立教育规模逐年壮大，教育领域不断拓展，教育品位愈益提升，
                        川滇黔渝众多学子均以接受天立教育为荣。 历经十余年的发展，
                        集团以高水平的教育质量及突出的教学成绩，获得社会高度认可。
                        同时集团总结了“天立教育理论体系”、聚集了大批优秀人才、
                        形成了体系化的管理模式，并经历无数学校成功的检验，为未来持续办学的成功奠定了坚实基础
                        旗下建设科技产业下辖天宇智源、盛众节能、南苑建筑三家公司。</p>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天宇智源专业从事互联网科技产品研发，在智慧社区、智慧教育、行业安全领域的产品技术研发和大型智能工程实施中成果卓著。盛众节能作为“四川省住建厅川南地区节能环保建材示范基地”，其生产的优质混凝土、彩色砂浆、节能门窗等绿色建材产品获得了市场充分认可，南苑建筑连续15年获得省级荣誉，专业从事房建、市政工程建设，年施工面积近百万平米。
 旗下金融产业积极开展投资银行、证券、融资租赁等金融业务，竭诚为客户提供灵活高效的金融管理服务，为集团实业的发展保驾护航
 继往开来，神州天立将始终不渝地践行“做行业领跑者，成就幸福人生”的企业使命，努力成长为一家持续经营、有社会责任感，核心员工都是股东的多元化标杆企业。
                `,
                form: {
                    name20: '神州天立投资集团有限公司',
                    name21: 'Shenzhoutianli Investment Group Co.,Ltd.',
                    name22: '中国成都',
                    name23: '1999-09-01',
                    name24: '1',
                    name25: '做行业领跑者，成就幸福人生',
                    name26: '4000余人',
                    name27: '罗实',
                    name28: ['1','2','3','4','5','6'],
                    name29: '中国四川省成都市青羊工业园T25座',
                    name30: '+86-28-87016688',
                    name31: 'sztljt@sztljt.com',
                    name32: `神州天立投资集团旗下地产产业以“立足成都，放眼全国”为战略发展方向，目前已在成都、泸州、宜宾、广元、西昌、内江、西宁等地成功开发众多高品质的民生住宅、商业综合体、文旅地产、 部分天立国际学校 部分天立国际学校(3张)产业地产、教育综合体等项目。`,
                },
                note:'',
                onOff:false
            }
        },
        mounted(){
            this.note = this.allContent.substr(0,380)
        },
        computed:{
            
        },
        methods: {
            open(type){
                if(type == 1){
                    this.onOff = true
                    this.note = this.allContent
                }
                if(type == 2){
                    this.onOff = false
                    this.note = this.allContent.substr(0,380)
                }
            }
        }
    }

</script>

<style>
#baseInfo .el-upload--text {
        width: 175px;
        height: 175px;
    }

    #baseInfo .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    #baseInfo .el-upload:hover {
        border-color: #409EFF;
    }

    #baseInfo  .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 175px;
        height: 175px;
        line-height: 175px;
        text-align: center;
    }

    #baseInfo .avatar {
        width: 175px;
        height: 175px;
        display: block;
    }
    .both::after {
        clear: both
    }

    .left {
        /*width: 20%;*/
        float: left;
        height: 210px;
        text-align: right;
    }

    .right {
        width: 78%;
        float: left;
        height: 200px;
        text-align: left;
        padding-top: 10px;
    }

    h4 {
        display: inline-block;
        margin-right: 20px;
    }

    .info {
        width: 100%;
    }

    .info td {
        border-bottom: 1px dashed #E3E3E3;
    }

    .info th,
    td {
        padding: 8px;
    }

    .info td:nth-child(odd) {
        color: #999;
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        font-size: 14px;
    }

    .info td:nth-child(even) {
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        font-size: 14px;
    }

    .add {
        margin-top: 40px;
        text-align: center;
        color: black;
        opacity: .6;
        line-height: 2.4rem;
        font-size: 14px;
    }
    .open{
        color:blue;
        font-weight:700;
        cursor:pointer;
    }

</style>
