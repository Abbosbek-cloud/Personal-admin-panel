import React from 'react'

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./chart.css";



export default function Chart({title, data, dataKey, grid}) {


  return (
    <div classNam="chart">
      <h3 classNam="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


