# echarts
*title：myEcharts-2022年全国考研数据可视化展示*
## 涉及技术
基于flexible.js+rem智能大屏适配
vs code 插件 cssrem
flex布局
less使用
基于ECharts数据可视化展示
ECharts柱状图数据设置
ECharts地图引入

## log
### flexible.js有哪些作用？
### less的作用？思考：使得css结构清晰
### 如何在写less文件时自动生成修改css文件？【已解决】
VScode插件less
### 字体没更换，添加的字体没有显示，什么原因？【已解决】
1.字体没有引入；2.引入的font-family命名不一致
### 下方有空白，且scroll会自动变大变小
### jQuery引入的作用是什么
### x轴刻度文本未显示全【已解决】
### 需要给图表设置合适宽度让刻度文本显示出来
### 放大图表会跑出去。【已解决】
使用resize()根据屏幕自适应大小即可
### 放大后背景图没有放大，导致右侧的图表背景空白
### 地图没有可以单独放大
### 功能点击2019/2020多种图表可切换【留着】
  // 数据变化
```
var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];
```
### 带不同颜色柱形的柱状图，函数
```
color:function(params){
                var num=barColor.length;
                return barColor[params.dataIndex % num];
              }
```
### 一个柱形图如何置于另一个柱形图之上？【已解决】
创建另一个yaxis
### 7个图表的一些细节问题整理
