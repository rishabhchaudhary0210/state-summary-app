/* eslint-disable react/prop-types */
import  { useEffect, useRef } from 'react'
import { economicData, economicLabel } from '../assets/Data/Economics'
import { populationData, populationLabel } from '../assets/Data/Population'

import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const Statedata = ({ selectedState, setSelectedState }) => {
    const containerRef = useRef(null);

    useEffect(()=>{
        window.scrollTo(0,0)
        const HandleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setSelectedState(null);
            }
        }
        document.addEventListener('mousedown', HandleClickOutside);
        return () => { document.removeEventListener('mousedown', HandleClickOutside); };
    },)

    const ecoObj = economicData.filter(ele => ele.state === selectedState);
    const popObj = populationData.filter(ele => ele.state === selectedState);

    const HandleCloseClick = () => {
        setSelectedState(null)
    }

    return (
        <div className="state-wrapper">

            <div className='specific-state-container' ref={containerRef}>
                <button onClick={HandleCloseClick}><IconClose/></button>
                <h1>{selectedState}</h1>
                <div className="charts-container">

                    <div className='chart-wrapper'>
                        <h2>Economic Statistics</h2>
                        <Bar
                            data={{
                                labels: economicLabel,
                                datasets: [
                                    {
                                        label: "Per Capita Income (₹)",
                                        data: ecoObj[0]?.perCapita,
                                    },
                                    {
                                        label: "Gross Domestic Product (₹ Lakh)",
                                        data: ecoObj[0]?.gdp,
                                    },
                                    {
                                        label: "Net Domestic Product (₹ Lakh)",
                                        data: ecoObj[0]?.ndp,
                                    },
                                ]
                            }}
                        />
                    </div>
                    <div className='chart-wrapper'>
                        <h2>Population Statistics</h2>
                        <Bar
                            data={{
                                labels: populationLabel,
                                datasets: [
                                    {
                                        label: "Total Population (thousands)",
                                        data: popObj[0]?.totalPop,
                                    },
                                    {
                                        label: "Sex-Ratio (Females per Thousand Males)",
                                        data: popObj[0]?.sexRatio,
                                    },
                                    {
                                        label: "Literacy Rate (Per cent)",
                                        data: popObj[0]?.litRate,
                                    },
                                ]
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="chart-behind"></div>
        </div>
    )
}

export default Statedata

function IconClose(props) {
    return (
      <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
        <path
          fill="currentColor"
          d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
        />
      </svg>
    );
  }