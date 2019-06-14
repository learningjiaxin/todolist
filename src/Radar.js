import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/radar';

class Radar extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('radar'))
        let datas = ['5.0', '2.8', '1.8']
        let texts = [
            { text: '理解运用', max: 5 },
            { text: '介绍表达', max: 5 },
            { text: '编程代码', max: 5 }
        ]
        let option = {
            tooltip: {
                trigger: 'axis'
            },
            radar: [
                {
                    indicator: texts,
                    center: ['50%', '60%'],
                    axisLine: {//坐标轴线相关设置
                        show: true,
                        lineStyle: {
                            color: 'rgba(245, 166, 35, 0.5)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: ['rgba(245, 166, 35, 1)', 'rgba(245, 166, 35, 0.5)'] // 图表背景网格线的颜色
                        }
                    },
                    splitArea: {
                        show: false,
                    },
                    name: {
                        backgroundColor: 'blue',
                        width: 80,
                        height: 60,
                        color: '#fff',
                        borderRadius: 40,
                        lineHeight: 20,
                        padding: [20, 0, 0, 0],
                        shadowBlur: 10,
                        rich: {
                            a: {
                                fontSize: 14,
                                align: 'center',
                                verticalAlign: 'middle'
                            },
                            b: {
                                fontSize: 18,
                                align: 'center'
                            }
                        },
                        formatter: (a, b) => {
                            console.log(b, 'aaaaa', a)
                            let res
                            let color
                            switch (a) {
                                case '理解运用':
                                    color = '#FF7283'
                                    res = `{a|${a}}\n{b|${datas[0]}}`
                                    break;
                                case '介绍表达':
                                    color = '#34BEF9'
                                    res = `{a|${a}}\n{b|${datas[1]}}`
                                    break;
                                default:
                                    color = '#35CBC9'
                                    res = `{a|${a}}\n{b|${datas[2]}}`
                                    break;
                            }
                            b.nameTextStyle.backgroundColor = color
                            b.nameTextStyle.shadowColor = color
                            return res
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(245, 166, 35, 0.1)',
                            areaStyle: {
                                color: '#F5A623'
                            }
                        }
                    },
                    data: [
                        {
                            value: datas,
                            name: '某软件'
                        }
                    ],
                    cursor: 'default',
                    symbolSize: 0
                }
            ]
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
            <div id="radar" style={{ width: 600, height: 500, top: 100 }}></div>
        );
    }
}

export default Radar;