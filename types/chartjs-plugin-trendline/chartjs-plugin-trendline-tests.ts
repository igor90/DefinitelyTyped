import { Chart } from 'chart.js';
import TrendlineLinearPlugin = require('chartjs-plugin-trendline');

const defaults: TrendlineLinearPlugin.TrendlineLinearOptions = {
    style: 'rgba(255,105,180,0.8)',
    lineStyle: 'solid',
    width: 2,
    projection: true,
};

const ctx = new CanvasRenderingContext2D();

let chart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [{ data: [], trendlineLinear: defaults }] },
});

chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
            {
                data: [],
                trendlineLinear: {
                    colorMin: 'red',
                    colorMax: 'green',
                    lineStyle: 'dotted',
                    width: 4,
                    projection: false,
                },
            },
        ],
    },
});
