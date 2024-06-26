import { TASK_STATUS_CLASS_MAP,TASK_STATUS_TEXT_MAP } from "@/Pages/Constants";
import SelectInput from "../../Components/SelectInput";
import TableHeading from "../../Components/TableHeading";
import TextInput from "../../Components/TextInput";
import { Link, router } from "@inertiajs/react";
import Pagination from "../../Components/Pagination";

export default function TaskTable({ queryParams, routing, tasks }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route(routing, queryParams));
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
      <div className="p-6 text-gray-900 dark:text-gray-100">
        {/* <pre> {JSON.stringify(tasks,undefined,2)}</pre> */}
        <div className="overflow-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
              <tr className="text-nowrap">
                <th className="px-3 py-2 ">
                  <TableHeading
                    name={"id"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    ID
                  </TableHeading>
                </th>
                <th className="px-3 py-2">Image</th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"name"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Name
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"description"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Description
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"project_id"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Project Id
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"status"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Status
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"priority"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Priority
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"assigned_user_id"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Assigned User ID
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"created_at"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Created At
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"due_date"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Due Date
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"created_by"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Created By
                  </TableHeading>
                </th>
                <th className="px-3 py-2">
                  <TableHeading
                    name={"updated_by"}
                    queryParams={queryParams}
                    routing={routing}
                  >
                    Updated By
                  </TableHeading>
                </th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
              <tr>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2">
                  <TextInput
                    className="w-full "
                    placeholder="Task Name"
                    defaultValue={queryParams.name}
                    onBlur={(e) => searchFieldChanged("name", e.target.value)}
                    onKeyPress={(e) => onKeyPress("name", e)}
                  />
                </th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2">
                  <SelectInput
                    className="w-full"
                    defaultValue={queryParams.status}
                    onChange={(e) =>
                      searchFieldChanged("status", e.target.value)
                    }
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </SelectInput>
                </th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.data.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray 700"
                >
                  <td className="px-3 py-2">{item.id}</td>
                  <td className="px-3 py-2">
                    <img src={item.imgPath} alt="" style={{ width: 60 }} />
                  </td>
                  <td className="px-3 py-2">{item.name}</td>
                  <td className="px-3 py-2">{item.description}</td>
                  <td className="px-3 py-2">{item.projectId}</td>
                  <td className="px-3 py-2">
                    <span
                      className={
                        "px-2 py-1 rounded text-white " +
                        TASK_STATUS_CLASS_MAP[item.status]
                      }
                    >
                      {TASK_STATUS_TEXT_MAP[item.status]}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-nowrap">{item.priority}</td>
                  <td className="px-3 py-2 text-nowrap">
                    {item.assignedUserId == null? "User Deleted" :item.assignedUserId.id}
                  </td>
                  <td className="px-3 py-2 text-nowrap">{item.createdAt}</td>
                  <td className="px-3 py-2 text-nowrap">{item.dueDate}</td>
                  <td className="px-3 py-2">{item.createdBy.name}</td>
                  <td className="px-3 py-2">{item.updatedBy.name}</td>
                  <td>
                    <Link
                      href={route("task.edit", item.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                    >
                      Edit
                    </Link>
                    <Link
                      href={route("task.destroy", item.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination links={tasks.meta.links} />
      </div>
    </div>
  );
}
