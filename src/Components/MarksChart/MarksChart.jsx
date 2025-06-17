import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;

    const marksChartData = marksData.map(studentsData => {
        const student = {
            id : studentsData.id,
            name : studentsData.name,
            physics : studentsData.marks.physics,
            chemistry : studentsData.marks.chemistry,
            math : studentsData.marks.math
        }
        // const avg = (student.math + student.physics + student.chemistry) /3;
        // student.avg = avg;
        return student;
    })
    console.log(marksChartData);

    
    return (
        <div>
            <BarChart width={800} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="chemistry" fill='yellow'></Bar>
                <Bar dataKey="math" fill="blue"></Bar>

            </BarChart>
            <BarChart width={700} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="physics" fill='green'></Bar>
                <Bar dataKey="chemistry" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;