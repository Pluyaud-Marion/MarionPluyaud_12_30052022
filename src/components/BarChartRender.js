import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartRender = ({ dataActivity }) => {

    const formatXAxis = (tickItem) => {
        return tickItem + 1;
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='container-payload-barchart'>
                    <p className='kg'>{`${payload[0].value}kg`}</p>
                    <p className='kcal'>{`${payload[1].value}kCal`}</p>
                </div>
            )
        }
    }


    return (
        <div className='BarChart'>
            <span className='title-barchart'>Activité quotidienne</span>
            <ResponsiveContainer width="90%" height={250} >
                <BarChart width={650} height={250} data={dataActivity?.data?.sessions} barCategoryGap={30} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 5" vertical={false} />
                    <Legend iconType="circle" iconSize={10} align='right' verticalAlign='top' height={50} wrapperStyle={{ fontSize: 12 }} />
                    <XAxis tickFormatter={formatXAxis} tickLine={false} tickSize="15" tick={{ fill: "#9B9EAC" }} padding={{ left: -30, right: -30 }} />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickSize="15" domain={['dataMin-5', 'dataMax+1']} tickCount={4} tick={{ fill: "#9B9EAC" }} />
                    <YAxis hide yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                    <Tooltip width={50} content={<CustomTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: "0.50" }} position={{ y: 20 }} />
                    <Bar dataKey="kilogram" yAxisId="right" fill='#282D30' name='Poids (kg)' maxBarSize={12} radius={[20, 20, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" fill='#E60000' name='Calories brûlées (kCal)' maxBarSize={12} radius={[20, 20, 0, 0]} margin={{ left: 0, right: 30 }} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartRender;