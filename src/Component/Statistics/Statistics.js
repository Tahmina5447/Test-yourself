import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../Root/Root';
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const quizDatas=useContext(QuizContext);
    console.log(quizDatas)
    
    return (
        <div className='mx-auto mt-10' style={{ width: '50%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={quizDatas}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey='total' stroke="black" fill="#86efac" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;