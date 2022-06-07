import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartRender = ({ id }) => {
    const [dataBarChart, setDataBarChart] = useState([])

    useEffect(() => {
        axios.get("../user_activity.json")
            .then(res => {
                setDataBarChart(res.data.find(dataUser => dataUser.userId === Number(id)))
            })
    }, [id])

    const formatXAxis = (tickItem) => {
        return tickItem + 1;
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <BarChart width={800} height={300} data={dataBarChart.sessions}>
                <Legend iconType="circle" />
                <XAxis tickFormatter={formatXAxis} />
                <YAxis orientation="right" />
                <Tooltip width={50} content={<CustomTooltip />} />
                <Bar dataKey="kilogram" fill='#282D30' name='Poids (kg)' />
                <Bar dataKey="calories" fill='#E60000' name='Calories brûlées (kCal)' />

            </BarChart>
        </div>
    );
};

export default BarChartRender;