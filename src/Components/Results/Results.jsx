import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "name": "Student 1",
    "id": 101,
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "name": "Student 2",
    "id": 102,
    "physics": 74,
    "chemistry": 81,
    "math": 88
  },
  {
    "name": "Student 3",
    "id": 103,
    "physics": 90,
    "chemistry": 89,
    "math": 94
  },
  {
    "name": "Student 4",
    "id": 104,
    "physics": 67,
    "chemistry": 72,
    "math": 70
  },
  {
    "name": "Student 5",
    "id": 105,
    "physics": 76,
    "chemistry": 85,
    "math": 80
  },
  {
    "name": "Student 6",
    "id": 106,
    "physics": 91,
    "chemistry": 90,
    "math": 96
  },
  {
    "name": "Student 7",
    "id": 107,
    "physics": 58,
    "chemistry": 65,
    "math": 60
  },
  {
    "name": "Student 8",
    "id": 108,
    "physics": 82,
    "chemistry": 79,
    "math": 85
  },
  {
    "name": "Student 9",
    "id": 109,
    "physics": 88,
    "chemistry": 86,
    "math": 91
  },
  {
    "name": "Student 10",
    "id": 110,
    "physics": 64,
    "chemistry": 70,
    "math": 68
  }
]


const Results = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke="red"></Line>
            </LineChart>
            
        </div>
    );
};

export default Results;