import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/pie';

class Pie extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pie'))
        let option = {
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 0.3 },
                        { value: 0.7 }
                    ],
                    cursor: 'default'
                }
            ],
            color: ['#7ED321', 'rgba(126,211,33,.4)']
        }
        // 绘制图表
        myChart.setOption(option)
        myChart.on("mouseover", function (params) {
            myChart.dispatchAction({
                type: 'downplay'
            })
        })
    }
    render() {
        return (
            <div id="pie" style={{ width: 600, height: 500, top: 100 }}></div>
        );
    }
}

export default Pie;