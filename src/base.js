option = {
    tooltip: {
        trigger: 'axis'
    },
    radar: [
        {
            indicator: [
                {text: '品牌', max: 100},
                {text: '内容', max: 100},
                {text: '可用性', max: 100}
            ]
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: { normal: {color: 'rgba(245, 166, 35, 0.1)'}},
            areaStyle: { color: '#F5A623'},
            data: [
                {
                    value: [60,23,85],
                    name: '某软件'
                }
            ]
        }
    ]
};