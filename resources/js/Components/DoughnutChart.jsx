import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ taskData }) {

  const {taskPend,taskInProg,taskComp}=taskData;
  const data = {
    labels: ["Pending", "In Progress", "Completed"],
    datasets: [
      {
        label: "Task Update",
        data: [taskPend, taskInProg, taskComp],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 3,
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
        text: "Task Status",
      },
    },
  };

  return (
    <>
      
      <Doughnut data={data} options={options} />
      {/* <pre>{JSON.stringify(taskData,undefined,5)}</pre> */}
      <div className="text-white  text-center  m-auto">
        <h2>Pending : {taskPend}</h2>
        <h2>In Progress : {taskInProg}</h2>
        <h2>Completed : {taskComp}</h2>
      </div>
    </>
  );
}
