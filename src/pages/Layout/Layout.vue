<style scoped>
    .content {
        height: 100%;
        width: 100%;
        background-color: #eeeeee;
    }
    .three {
        width: 100%;
        height: 130px;
        background-color: #fff;
        display: flex;
        align-items: center;
    }
    .circle {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #f8d9e3;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
    }
    .el-icon-eleme {
        color: #f8d9e3;
        font-size: 50px;
    }
    .patient {
        width: 150px;
        height: 100%;
        margin-left: 20px;
        position: relative;
    }
    .patient>div:nth-child(1) {
        color: #f8d9e3;
        position: absolute;
        top: 22px;
    }
    .patient>div:nth-child(2) {
        color: #f8d9e3;
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top: 40px;
    }
    .patient>div:nth-child(3) {
        position: absolute;
        top: 80px;
    }
    .el-icon-arrow-up {
        color: #3eb472;
    }
    .el-icon-arrow-down {
        color: #ff8484;
    }
    .one {
        width: 90%;
        margin: auto;
        margin-top: 20px;
    }
    .two {
        width: 90%;
        margin: auto;
        margin-top: 20px;
    }
    .curve {
        width: 100%;
        background-color: #ffffff;
        position: relative;
        padding-top: 10px;
    }
    .crack {
        margin: auto;
        height: 100%;
        width: 20px;
        background-color: #eeeeee;
    }
    .title {
        height: 10%;
        width: 90%;
        margin: auto;
        border-bottom: 1px solid #eeeeee;
        color: #3eb472;
        font-size: 30px;
        cursor: pointer;
    }
    .statistics {
        width: 90%;
        margin: auto;
        height: 88%;
        margin-top: 10px;
    }
    .herd {
        width: 90%;
        height: 60px;
        background-color: #3f4c56;
        margin: auto;
        color: #deebe6;
        font-size: 30px;
        line-height: 60px;
        padding-left: 20px;
    }
    .statisticsHead {
        width: 100%;
        background-color: #ffffff;
        margin: auto;
        padding-top: 10px;
    }
    .table {
        width: 95%;
        margin: auto;
        margin-top: 20px;
    }
</style>
<template>
    <div class="content">
        <headComponents></headComponents>
        <div style="height:20px;"></div>
        <div class="herd">快速统计</div>
        <!-- 第一部分 -->
        <el-row type="flex" class="one" justify="space-between">
            <el-col :span="7">
                <div class="three">
                    <div class="circle">
                        <i class="el-icon-eleme"></i>
                    </div>
                    <div class="patient">
                        <div>钻石</div>
                        <div>348</div>
                        <div><i class="el-icon-arrow-up"></i> +20%增长</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="three">
                    <div class="circle" style="border: 2px solid #3eb472;">
                        <i class="el-icon-loading" style="color:#3eb472;font-size: 50px;"></i>
                    </div>
                    <div class="patient">
                        <div style="color:#3eb472">黄金</div>
                        <div style="color:#3eb472">348</div>
                        <div><i class="el-icon-arrow-down"></i> -15%减少</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="three">
                    <div class="circle" style="border: 2px solid #ffb166;">
                        <i class="el-icon-sunny" style="color:#ffb166;font-size: 50px;"></i>
                    </div>
                    <div class="patient">
                        <div style="color:#ffb166" v-on:click="pushEcharts">青铜</div>
                        <div style="color:#ffb166">348</div>
                        <div><i class="el-icon-arrow-up"></i> +20%增长</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 第二部分 -->
        <el-row type="flex" class="two" @click="pushEcharts" justify="space-between">
            <el-col :span="12">
                <div class="curve">
                    <div class="title" @click="pushEcharts">比赛按年统计</div>
                    <div class="statistics">
                        <div id="main" style="width:100%;height:300px;"></div>
                    </div>
                </div>
            </el-col>
            <div class="crack"></div>
            <el-col :span="12">
                <div class="curve">
                    <div class="title" @click="pushEcharts2">训练按年统计</div>
                    <div class="statistics">
                        <div id="main2" style="width:100%;height:300px;"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 第三部分 -->
        <el-row type="flex" class="one" justify="space-between">
            <div class="statisticsHead">
                <div class="title" style="width:95%">统计</div>
                <el-table :data="tableData" style="cursor:pointer;" border class="table">
                    <el-table-column prop="date" label="发售日期" width="180">
                    </el-table-column>
                    <el-table-column prop="pictures" label="logo" width="180">
                        <template slot-scope="scope">
                                        <img  v-for="item in scope.row.pictures" :src="item"  style="width:50px;height:50px;margin-left:54px;"/>
</template>
                    </el-table-column>
                    <el-table-column prop="name" label="品牌" width="180">
                    </el-table-column>
                    <el-table-column prop="modelNumber" label="型号" width="180">
                    </el-table-column>
                    <el-table-column prop="paint" label="车漆" width="180">
                    </el-table-column>
                    <el-table-column prop="sellingPrice" label="售价">
                    </el-table-column>
                </el-table>
                <div style="height:20px"></div>
                <div style="margin:auto;width:32%">
                    <el-pagination @size-change="changeSize" @current-change="current" layout="prev, pager, next" :total="70">
                    </el-pagination>
                </div>
                <div style="height:20px"></div>
            </div>
        </el-row>
         <!-- 第四部分 -->
             <el-row type="flex" class="two" @click="pushEcharts" justify="space-between">
            <el-col :span="12">
                <div class="curve">
                    <div class="title" @click="pushEcharts">状态饼</div>
                    <div class="statistics">
                        <div id="main3" style="width:100%;height:300px;"></div>
                    </div>
                </div>
            </el-col>
            <div class="crack"></div>
            <el-col :span="12">
                <div class="curve">
                    <div class="title" @click="pushEcharts2">训练情况</div>
                    <div class="statistics" >
                   <el-table
      :data="tableData2"
      style="width: 100%;height:300px;">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
<div style="height:20px"></div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    import axios from "axios";
    import headComponents from "../../components/head";
    export default {
        name: "HelloWorld",
        data() {
            return {
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }],
                src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810196378,1988348898&fm=26&gp=0.jpg",
                random11: 34,
                random12: 54,
                random13: 12,
                random14: 76,
                random1: 34,
                random2: 54,
                random3: 12,
                random4: 76,
                random5: 56,
                random6: 65,
                random7: 21,
                drawLineDate: 10,
                charts: '',
                month: [2016, 2017, 2018, 2019],
                tableData: [{
                    date: '2016-05-02',
                    name: '兰博基尼',
                    modelNumber: 'LP-700-4SV',
                    paint: '哑光黑',
                    sellingPrice: "7200000RMB",
                    pictures: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810196378,1988348898&fm=26&gp=0.jpg'],
                }, {
                    date: '2016-09-04',
                    name: '法拉利',
                    modelNumber: '488',
                    paint: '豪气红',
                    sellingPrice: "2600000RMB",
                    pictures: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3209512919,3367505845&fm=26&gp=0.jpg'],
                }, {
                    date: '2016-07-01',
                    name: '保时捷',
                    modelNumber: '911',
                    paint: '亮丽白',
                    sellingPrice: "3900000RMB",
                    pictures: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1316720971,3171628749&fm=26&gp=0.jpg'],
                }, {
                    date: '2016-10-03',
                    name: '阿斯顿·马丁',
                    modelNumber: 'one77',
                    paint: '帅气灰',
                    sellingPrice: "8500000RMB",
                    pictures: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1314908816,2361369027&fm=26&gp=0.jpg'],
                }]
            };
        },
        components: {
            headComponents,
        },
        methods: {
            changeSize(e) {
                console.log(e)
            },
            current(e) {
                console.log(e)
            },
            pushEcharts() {
                console.log("push1")
                this.random1 = Math.floor(Math.random() * 10);
                this.random2 = Math.floor(Math.random() * 10);
                this.random3 = Math.floor(Math.random() * 10);
                this.random4 = Math.floor(Math.random() * 10);
                this.random5 = Math.floor(Math.random() * 10);
                this.random6 = Math.floor(Math.random() * 10);
                this.random7 = Math.floor(Math.random() * 10);
                this.drawLine('main')
            },
            pushEcharts2() {
                console.log("push")
                this.random11 = Math.floor(Math.random() * 10);
                this.random12 = Math.floor(Math.random() * 10);
                this.random13 = Math.floor(Math.random() * 10);
                this.random14 = Math.floor(Math.random() * 10);
                this.drawLine2('main2')
            },
            drawLine(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    color: ['#e57498'],
                    legend: {
                        data: ['年趋势']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '年趋势',
                        type: 'line',
                        stack: '总量',
                        data: [this.random1, this.random2, this.random3, this.random4, this.random5, this.random6, this.random7]
                    }]
                })
            },
            drawLine2(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    grid: {
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ['#3eb472'],
                    legend: {
                        data: ['月趋势']
                    },
                    xAxis: {
                        type: 'category',
                        data: this.month
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [this.random11, this.random12, this.random13, this.random14, ],
                        type: 'bar'
                    }]
                })
            },
            drawLine3(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [{
                        name: '状态',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        color: ['#22c6ab', '#ef6e6e', '#ffaa2a'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '第一季度'
                            },
                            {
                                value: 310,
                                name: '第二季度'
                            },
                            {
                                value: 234,
                                name: '第三季度'
                            }
                        ]
                    }]
                })
                 // 饼图默认高亮(只高亮一次，没什么卵用)
      let index = 0; // 高亮索引
      this.charts.dispatchAction({
        type: "highlight",
        seriesIndex: index,
        dataIndex: index
      });
      this.charts.on("mouseover", function(e) {
        if (e.dataIndex != index) {
          this.charts.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index
          });
        }
      });
      this.charts.on("mouseout", function(e) {
        index = e.dataIndex;
        this.charts.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      });
            },
        },
        mounted() {
            // for(let i =1; i<31; i++){
            //     this.month.push(i)
            // }
            this.drawLine('main')
            this.drawLine2('main2')
            this.drawLine3('main3')
        }
    };
</script>


