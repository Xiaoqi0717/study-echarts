// 模块1 柱状图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.bar1 .chart'));

      // 2.指定图表的配置项和数据
      option = {
        // 设置柱形颜色
        color:"#2f89cf",
        tooltip: {
          // 坐标轴指示器
          trigger: 'axis',
          axisPointer: {
            // 阴影指示，默认line线条
            type: 'shadow',
          }
        },
        // 图表大小定位
        grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top: '10px',
          // 是否显示轴数据
          containLabel: true
        },
        xAxis: [
          {
            // 数据刻度分类
            type: 'category',
            data: [
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',],
            axisTick: {
              alignWithLabel: true
            },
            // x轴的文字颜色和大小
            axisLabel: {color: "rgba(255,255,255,0.6)", fontSize:"12"},
            axisLine:{
              // x轴样式不显示
              show:false,
              // 如果想要设置单独的线条样式
              // lineStyle: {
              //   color: "rgba(255,255,255,0.11)",width:1,type:"solid"}
            }
          }
        ],
        yAxis: [
          {
            // 数据刻度值
            type: 'value',
            // 设置y轴文本颜色、字体大小
            axisLabel:{
              textStyle: {color:"rgba(255,255,255,0.6)",fontSize:"12"},
            },
            // 设置yAxis线条颜色透明
            axisLine:{
              lineStyle: {color:"rgba(255,255,255,0.2)"}
            },
            // 设置yAxis分割线颜色透明
            splitLine:{
              lineStyle: {color:"rgba(255,255,255,0.1)"}
            }
          },
        ],
        color:['#1089E7','#F57474'],
        series: [
          {
            // 图表名称name
            name: '考研人数',
            // 设置数据可视化样式
            type: 'bar',
            // 修改柱形宽度
            barWidth: '25%',
            barGap: 0,
            data: [238, 290, 341, 377, 457],
            // 修改柱形圆角
            itemStyle:{
              // barBorderRadius:5
            },
          },
            {
              // 图表名称name
              name: '招生人数',
              // 设置数据可视化样式
              type: 'bar',
              // 修改柱形宽度
              barWidth: '25%',
              barGap: 0.1,
              data: [85.8, 91.7, 110.7, 117, 110],
              // 修改柱形圆角
              itemStyle:{
                // barBorderRadius:5
              }
              
          }
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();

// 模块2 柱状图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.bar2 .chart'));
var data= [28, 25, 18, 15, 14];
var titlename=['经济学', '工学', '理学', '教育学', '管理学'];
var barColor=['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
      // 2.指定图表的配置项和数据
      option = {
        // 设置图表的大小与位置
        grid: {
          top:'10%',
          left: '22%',
          right: '4%',
          bottom: '3%',
          // 图表大小内是否容纳刻度内容，默认false
          containLabel: false
        },
        xAxis: {
          // x轴代表数据值
          type: 'value',
          // 刻度分界线区域间
          boundaryGap: [0, 0.01],
          // 不显示x轴标签和刻度
          show:false
        },
        yAxis: [{
          // y轴刻度文本,默认false
          show:true,
          // 数据分类逆排序
          inverse: true,
        // y轴代表数据分类
          type: 'category',
          data: titlename,
          // y轴分割线,默认false
          splitLine:{show:false},
          axisLabel: {color: '#FFF',
        },
        },{
          type: 'category'
        }],
        series: [
          {
            // 数据1命名
            name: '条',
            // 数据表展现样式
            type: 'bar',
            // yAxisIndex: 0,
            // barCategoryGap:50,
            // 数据引用
            data:data,
            // 修改柱形宽度
            barWidth: 10,
            // 修改柱形样式
            itemStyle:{
              // 修改柱形圆角
              barBorderRadius:20,
              color:function(params){
                var num=barColor.length;
                return barColor[params.dataIndex % num];
              }
            },
            // 柱形内添加文本
            label:{
              normal:{
                show:true,
                position:'inside',
                formatter:'{c}%'
              }
            }
          },
          {
            name:"框",
            type:"bar",
            yAxisIndex: 1,
            // barCategoryGap:50,
            // 柱形宽度
            barWidth:15,
            data:[100,100,100,100,100],
            itemStyle:{
              normal:{
                barBorderRadius:15,
                color:'none',
                borderWidth:3,
                borderColor:"#00c1de"
              }
            }
          }
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();

// 模块3 折线图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.line1 .chart'));

      // 2.指定图表的配置项和数据
      option = {
        color: ["#00f2f1", "#ed3f35"],

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '10%',
          textStyle:{
            color:"rgba(255,255,255,0.6)",
            fontSize:"12",
          }
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          axisLabel: {color: 'rgba(255,255,255,0.7)'},
          axisTick:{
            show:false,
          },
          // axisLine:{show:false},
          // boundaryGap: false,
          data: ['2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          min: 235,
          max: 275,
          interval: 5,
          type: 'value',
          axisTick:{
            show: false,
          },
          axisLabel: {color: 'rgba(255,255,255,0.7)'},
          splitLine:{
            lineStyle: {color: 'rgba(255,255,255,0.1)'},
          }
        },
        series: [
          {
            name: 'A区',
            type: 'line',
            data: [260,270,264,263,273]
          },
          {
            name: 'B区',
            type: 'line',
            data: [250,260,254,253,263]
          },
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();

// 模块4 折线图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.line2 .chart'));

      // 2.指定图表的配置项和数据
      option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'cross',
            // label: {
            //   backgroundColor: '#6a7985'
            // },
            lineStyle:{color: '#dddc6b'},
          }
        },
        legend: {
          top:"0%",
          textStyle:{
            color: 'rgba(255,255,255,0.5)',
            fontSize:"12",
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {color: 'rgba(255,255,255,0.7)'},
            // 以刻度0点为起点
            boundaryGap: false,
            data: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30"]
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max:1,
            interval:0.1,
            axisLabel: {color: 'rgba(255,255,255,0.7)'},
            // axisLine:{
            //   lineStyle: {color: 'rgba(255,255,255,0.1)'},
            // }
            splitLine:{
              lineStyle: {color: 'rgba(255,255,255,0.1)'},
            }
          },
        ],
        series: [
          {
            name: '成功率',
            type: 'line',
            smooth:true,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2
              }
            },
            // position: "bottom",
            showSymbol: false,
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(1, 132, 213, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(1, 132, 213, 0.1)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [
                0,
                0.11,
                0.12,
                0.13,
                0.20,
                0.24,
                0.26,
                0.28,
                0.18,
                0.32,
                0.22,
                0.19,
                0.28,
                0.24,
                0.29,
                0.28,
                0.32,
                0.38,
                0.66,
                0.65,
                0.74,
                0.72,
                0.87,
                0.78,
                0.85,
                0.67,
                0.74,
                0.84,
                0.33,
                0.33]
          },
          {
            name: '时间利用率',
            type: 'line',
            smooth:true,
            showSymbol: false,
            emphasis: {
              focus: 'series'
            },
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 216, 135, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 216, 135, 0.1)'
                }
              ])
            },
            data: [
                0.11,
                0.22,
                0.24,
                0.35,
                0.37,
                0.57,
                0.33,
                0.77,
                0.65,
                0.48,
                0.24,
                0.81,
                0.66,
                0.35,
                0.67,
                0.64,
                0.71,
                0.82,
                0.74,
                0.95,
                0.55,
                0.62,
                0.66,
                0.87,
                0.74,
                0.32,
                0.81,
                0.17,
                0.55,
                0.54,
                0.48]
          }
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();

// 模块5 饼图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.pie1 .chart'));

      // 2.指定图表的配置项和数据
      option = {
        // 悬浮时提示框
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {d}%',
          // 提示框跟随鼠标
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          }
        },
        // 图示样式
        legend: {
          // top:'90%',
          bottom: '2%',
          left: 'center',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:"rgba(255,255,255,0.6)",
            fontSize:"12",
          }
        },
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        // 核心数据
        series: [
          {
            // 数据名称
            name: '年龄分布',
            // 图表样式
            type: 'pie',
            // 图表定位
            center: ['50%', '40%'],
            // 环形角度
            radius: ['35%', '70%'],

            // avoidLabelOverlap:true,
            label: {
              // 刻度标签文本默认不显示，悬浮显示
              show: false,
              // 刻度标签文本显示居中
              position: 'center'
            },
            labelLine: {
              show: false
            },
            // 核心数据
            data: [
              { value: 0.04, name: '20岁以下' },
              { value: 64.79, name: '20-24岁' },
              { value: 13.83, name: '25-29岁' },
              { value: 10.67, name: '30-34岁' },
              { value: 7.55, name: '35-40岁' },
              { value: 3.12, name: '40岁以上' }
            ]
          }
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();

// 模块6 饼图
(function(){
  // 1.实例化对象
var myChart = echarts.init(document.querySelector('.pie2 .chart'));

      // 2.指定图表的配置项和数据
      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            '山东',
            '河南',
            '江苏',
            '四川',
            '广东',
            '其它'
          ],
          bottom: '1%',
          left: 'center',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:"rgba(255,255,255,0.6)",
            fontSize:"12",
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        
        series: [
          {
            name: '地区分布',
            type: 'pie',
            radius: [20, 70],
            // 注意颜色写的位置,series里面和外面效果都能实现?
            color: [
              "#006cff",
              "#60cda0",
              "#ed8884",
              "#ff9f7f",
              "#0096ff",
              "#9fe6b8",
              "#32c5e9",
              "#1d9dff"
            ],
            // 图表定位
            center: ['50%', '45%'],
            // 按角度/半径来划分区域
            roseType: 'radius',
            label: {
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 41.6, name: '山东' },
              { value: 37.9, name: '河南' },
              { value: 29.9, name: '江苏' },
              { value: 26.5, name: '四川' },
              { value: 26.3, name: '广东' },
              // { value: 294.8, name: '其它' }
            ]
          },
        ]
      };

      // 3.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    //   4.让图表跟随屏幕自适应
    window.addEventListener('resize', function() {myChart.resize();});
})();