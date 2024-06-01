import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ dashBoardData }) {
  const labels = ["Properties", "Clients", "Users", "Assets","Tasks","Sensors","Readings"];
  const {
    propNum,
    clientNum,
    userNum,
    assetNum,
    taskNum,
    sensorNum,
    readingNum,
  } = dashBoardData;

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: [
          propNum,
          clientNum,
          userNum,
          assetNum,
          taskNum,
          sensorNum,
          readingNum,
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 3,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Main Dashboard",
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data} />
      <div className="text-white align-middle text-center  m-auto">
        <h2>Clients: {clientNum}</h2>
        <h2>Properties: {propNum}</h2>
        <h2>Users: {userNum}</h2>
        <h2>Assets: {assetNum}</h2>
        <h2>Tasks: {taskNum}</h2>
        <h2>Sensors: {sensorNum}</h2>
        <h2>Readings: {readingNum}</h2>
      </div>
    </>
  );
}
