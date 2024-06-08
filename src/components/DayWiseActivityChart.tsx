import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

interface DayWiseActivityChartProps {
  data: DayWiseActivity[];
}

const DayWiseActivityChart: React.FC<DayWiseActivityChartProps> = ({ data }) => {
  // Flatten the data to fit the chart's expected format
  const flattenedData = data.map(day => {
    const dayData: { [key: string]: string | number } = { date: day.date };
    day.items.children.forEach(item => {
      dayData[item.label] = parseInt(item.count, 10);
    });
    return dayData;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={flattenedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data[0].items.children.map((item, index) => (
          <Bar key={index} dataKey={item.label} fill={item.fillColor} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DayWiseActivityChart;
