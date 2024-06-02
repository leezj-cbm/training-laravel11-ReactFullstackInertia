import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TaskTable from "@/Pages/Task/TaskTable.jsx";
export default function Index({ auth, tasks, queryParams = null, routing }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Task
        </h2>
      }
    >
      <Head title="tasks" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          
            <TaskTable
              queryParams={queryParams}
              routing={routing}
              tasks={tasks}
            />
          </div>
        </div>

    </AuthenticatedLayout>
  );
}
