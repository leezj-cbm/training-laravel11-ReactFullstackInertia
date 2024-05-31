import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import BarChart from "@/Components/BarChart";
import DoughnutChart from "@/Components/DoughnutChart";

export default function Dashboard({ auth, dashBoardData }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const now = new Date();
    const curTime = String(now.toLocaleString());
    setTime(curTime);
  }, []);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          CBM Web App Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h1>Here are the statistics as of : {time} </h1>
              <div className="max-w-lg align-middle justify-items-center rounded-2xl py-10 m-auto">
                <BarChart dashBoardData={dashBoardData} />
              </div>

              <div className="max-w-sm align-middle justify-items-center  rounded-2xl py-10 m-auto">
                {/* <DoughnutChart
                  taskPend={taskPend}
                  taskInProg={taskInProg}
                  taskComp={taskComp}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
