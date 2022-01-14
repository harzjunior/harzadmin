import "./chart.css";
//https://recharts.org/en-US/examples/SimpleLineChart
import {
  LineChart,
  Line,
  XAxis,
  //   YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";

// props from Home page
export default function Chart({ title, data, dataKeyValue, grids }) {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      {/* aspect={4/1} if the widrh is 4 unit then the height will be 1 unit */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          //   margin={{
          //     top: 5,
          //     right: 30,
          //     left: 20,
          //     bottom: 5,
          //   }}
        >
          {/* if we have grid then we can use CartesianGrid */}
          {grids && <CartesianGrid strokeDasharray="3 3" stroke="#e0dfdf  " />}
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          {/* dataKey="activeUser" */}
          <Line type="monotone" dataKey={dataKeyValue} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
