import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    defaults
} from 'chart.js';
import { color } from 'chart.js/helpers';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { mockData, stateLoc } from '../assets/Data/TemperatureData';
import Statedata from './Statedata';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TreemapController,
    TreemapElement
);
//so chart takes up all availble space
defaults.maintainAspectRatio = false;
defaults.responsive = true;


const options = {
    plugins: {
        title: {
            display: true,
            text: 'State Summary Map',
        },
        legend: {
            display: false,
            labels:{
                font:{
                    size:18
                }
            }
        },
        tooltip: {
            displayColors: false,
            callbacks: {
                title(items) {
                    return items[0].raw._data.state;
                },
                label(item) {
                    const {
                        _data: { temperature },
                    } = item.raw;
                    return [
                        `Export capacity: ${temperature} MW`,
                    ];
                },
            },
        },
        

    }
};
let config = {
    type: 'treemap',
    data: {
        datasets: [
            {
                tree: mockData,
                key: 'temperature',
                labels: {
                    display: true,
                    aligm: ' center',
                    position: "middle",
                    formatter: (context) => {
                        return context.raw._data.state
                    },
                    color:"#121212",
                    font:{
                        size:16
                    }
                },
                //   backgroundColor:['rgba(255,26,104,0.2)'],
                spacing: 1,
                backgroundColor(context) {
                    if (context.type !== 'data') return 'transparent';
                    const { temperature } = context.raw._data;
                    let al = 1 + Math.log(temperature) / 8;
                    return temperature >= 28
                        ? color('#ff4448').rgbString()
                        : color('#6363e0ba').alpha(al).rgbString();
                },
                borderColor:"#888",
                borderWidth:2,
                borderRadius:10,
            },
        ],
    }
};





export default function Treegraph() {

    const [selectedState, setSelectedState] = useState(null);
    defaults.onClick = (ele, arr) => {  
        const value = (arr[0].element.$context.element.$context.raw._data.state);
        if(value){
            setSelectedState(value)
        }
    }
    return (
        <div className="treemap-wrapper">
            <h1>Welcome to the State Summary Map</h1>
            <Chart type="treemap" data={config.data} options={options} />
            {
                selectedState && <Statedata selectedState={selectedState} setSelectedState={setSelectedState} />
            }
        </div>
    )
}
