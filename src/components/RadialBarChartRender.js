import React from 'react';
import { RadialBar, RadialBarChart } from 'recharts';

const RadialBarChartRender = ({ todayScore }) => {
    console.log(todayScore);
    return (
        <div>
            <RadialBarChart data={todayScore}>
                {/* <RadialBar dataKey="todayScore" /> */}
            </RadialBarChart>
        </div>
    );
};

export default RadialBarChartRender;