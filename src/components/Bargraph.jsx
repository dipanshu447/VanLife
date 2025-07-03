import { BarChart, Bar, Cell, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Bargraph() {
    const data = [
        { name: 'Ju', income: 4200, color: '#FFEAD0' },
        { name: 'Au', income: 1200, color: '#FFEAD0' },
        { name: 'Se', income: 3100, color: '#FFEAD0' },
        { name: 'Oc', income: 2900, color: '#FFEAD0' },
        { name: 'No', income: 1700, color: '#FF8C38' },
        { name: 'De', income: 700, color: '#FF8C38' },
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="10" horizontal={true} vertical={false} stroke="#B9B9B9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                    tickFormatter={(value) => value > 0 ? `$${value / 1000}k` : `$${value / 1000}`}
                    domain={[0, 5000]}
                    ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                    tick={{
                        fill: '#4D4D4D',
                        fontSize: 15,
                        fontWeight: 600,
                    }}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip
                    formatter={(value) => `$${value}`}
                    contentStyle={{
                        backgroundColor: "#FFF7ED",
                        border: "none",
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "10px",
                        fontFamily: "Inter",
                    }}
                    itemStyle={{
                        color: "#161616",
                        fontWeight: 600,
                        fontSize: "14px",
                    }}
                    labelStyle={{
                        color: "#4D4D4D",
                        fontWeight: 500,
                        marginBottom: "5px",
                    }}
                />
                <Bar dataKey="income" radius={[5, 5, 0, 0]} activeBar={<Rectangle stroke="black" />}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}