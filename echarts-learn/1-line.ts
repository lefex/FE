/**
 * @author 素燕（我有个公众号：素燕）
 * @description 折线图
 */

import * as echarts from 'echarts/core';
import {
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    TransformComponent,
    DatasetComponent,
    DatasetComponentOption
} from 'echarts/components';
import {
    LabelLayout,
    UniversalTransition
} from 'echarts/features';
import {
    CanvasRenderer
} from 'echarts/renderers';

(function () {
    let rootEl = document.querySelector('.sy-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        LineChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
    ]);

    type SYLineOption = echarts.ComposeOption<
        |LineSeriesOption
        |TitleComponentOption
        |TooltipComponentOption
        |GridComponentOption
        |DatasetComponentOption
    >;

    const option: SYLineOption = {
        title: {
            text: '折线图 Line'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            },
            {
                data: [10, 23, 120, 300, 90, 190, 260],
                type: 'line'
            }
        ],
        tooltip: {
            show: true
        }
    };

    let echart = echarts.init(rootEl);
    echart.setOption(option);
}());