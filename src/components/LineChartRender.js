import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartRender = ({ dataAverageSessions }) => {

    const day = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D"
    }
    const weekFormat = (el) => day[el]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='container-payload-linechart'>
                    <p className='mn'>{`${payload[0].value}min`}</p>
                </div>
            )
        }
    }

    return (
        <div className='LineChart'>
            <span className='title-linechart'>Durée moyenne des sessions</span>
            <ResponsiveContainer width="100%" height={230}>
                <LineChart width={200} data={dataAverageSessions?.data?.sessions} margin={{ top: 50, bottom: 20, left: 10, right: 10 }}  >

                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickSize="15" tick={{ fill: "#FFF", opacity: 0.5, fontSize: 12 }} tickFormatter={weekFormat} />
                    <YAxis hide />
                    <Tooltip width={50} content={<CustomTooltip />} cursor={{ stroke: "#000000", strokeOpacity: "0.1", strokeWidth: 50, }} position={{ y: 100 }} />
                    <Line type="monotone" dataKey="sessionLength" stroke='#FFF' opacity="0.5" dot={false} activeDot={{ r: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartRender;