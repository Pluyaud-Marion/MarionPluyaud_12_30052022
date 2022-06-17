import PropTypes from "prop-types"
import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

/**
 * chart about performance details of one user
 * @param {Array} dataPerformances -  - props of component parent Profile / infos about performance details
 * @returns {JSX} - React component
 */
const RadarChartRender = ({ dataPerformances }) => {

    RadarChartRender.propTypes = {
        dataPerformances: PropTypes.array
    }

    const french = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    }
    const translation = (el) => french[el]

    return (
        <div className='RadarChart'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="60%" data={dataPerformances}>
                    <PolarGrid radialLines={false} />
                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                    <PolarAngleAxis dataKey="kind" tickSize={7} tickFormatter={translation} stroke="#FFF" style={{ fontSize: 10 }} tickLine={false} />
                    <Radar dataKey="value" fill='#FF0101B2' fillOpacity={0.8} />

                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarChartRender;