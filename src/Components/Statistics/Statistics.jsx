import React from "react";
import { useLoaderData } from "react-router-dom";
import { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const data = useLoaderData();
  console.log(data)

  
  return (
    <div>
      <div className="bg-purple text-center py-8 px-40 mb-14">
        <h3 className="mb-4 text-white font-bold text-4xl">Statistics</h3>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <h5 className="font-bold text-2xl mb-8">Statistics</h5>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis dataKey="price"/>
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
