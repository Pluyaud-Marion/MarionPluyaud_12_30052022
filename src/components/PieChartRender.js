import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';


const PieChartRender = ({ dataTodayScore }) => {

    const todayScore = dataTodayScore?.score || dataTodayScore?.todayScore
    const delta = 100 - (todayScore * 100)

    const score = [
        { name: "full", value: todayScore * 100, fill: "#E60000" },
        { name: "empty", value: delta, fill: "white" }
    ]
    const middle = [{
        name: 'middle', value: 100
    }]

    return (
        <div className='PieChart'>
            <span className='titleChart'>Score</span>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart >
                    <Pie data={middle} dataKey="value" innerRadius={0} outerRadius={80} fill="white" />
                    <Pie data={score} dataKey="value" innerRadius={69} outerRadius={80} startAngle={90} endAngle={500} cornerRadius="50%" />
                </PieChart>
            </ResponsiveContainer>
            <div className='legend'>
                <span>{todayScore * 100 + "%"}  </span>
                <p>de votre <br />
                    objectif</p>
            </div>

        </div>
    );
};

export default PieChartRender;