import TaskTable from "@/Pages/Task/TaskTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function Show({ auth, project, tasks,queryParams, routing }) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Project ${project.name}`}
        </h2>
      }
    >
      <pre>{JSON.stringify(project)}</pre>
      <Head title="Projects" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <img
                src={project.imgPath}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-4 text-white">
              <label className="font-bold text-lg">Project ID</label>
              <p className="mt-1">{project.id}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Project Name</label>
              <p className="mt-1">{project.name}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Project Description</label>
              <p className="mt-1">{project.description}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Project Status</label>
              <p className="mt-1">{project.status}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Due Date</label>
              <p className="mt-1">{project.dueDate}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Created By</label>
              <p className="mt-1">{project.createdBy.name}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Updated By</label>
              <p className="mt-1">{project.createdBy.name}</p>
            </div>
            <div className="mt-4  text-white">
              <label className="font-bold text-lg">Tasks</label>
              {/* <pre>{JSON.stringify(tasks)}</pre> */}
              <TaskTable queryParams={queryParams} routing={routing} tasks={tasks}/>
            </div>
          </div>
        </div> 
      </div>
    </AuthenticatedLayout>
  );
}
