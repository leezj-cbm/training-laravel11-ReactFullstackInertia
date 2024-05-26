import TaskTable from "@/Pages/Task/TaskTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, user, tasks, queryParams, routing }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`User ${user.name}`}
        </h2>
      }
    >
      {/* <pre className="text-white">{JSON.stringify(user, undefined, 5)}</pre> */}
      <Head title="Users" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className=" text-gray-900 dark:text-gray-100 text-nowrap">
              <img
                src={user.imgPath}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="px-5 py-5 mx-auto text-nowrap">
              <div className="mt-4 text-white">
                <label className="font-bold text-lg">User ID</label>
                <p className="mt-1">{user.id}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">User Name</label>
                <p className="mt-1">{user.name}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">User Description</label>
                <p className="mt-1">{user.description}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">User Status</label>
                <p className="mt-1">{user.status}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">Due Date</label>
                <p className="mt-1">{user.dueDate}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">Created By</label>
                <p className="mt-1">{user.createdBy.name}</p>
              </div>
              <div className="mt-4  text-white">
                <label className="font-bold text-lg">Updated By</label>
                <p className="mt-1">{user.createdBy.name}</p>
              </div>
            </div>

            <div className="mt-4  text-white px-5 py-5 mx-auto text-nowrap">
              <label className="font-bold text-lg">Tasks</label>
              {/* <pre>{JSON.stringify(tasks)}</pre> */}
              <TaskTable
                queryParams={queryParams}
                routing={routing}
                tasks={tasks}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
