import { Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TableHeading from "@/Components/TableHeading.jsx";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Pages/Constants";
import Pagination from "../../Components/Pagination";

export default function PropertyTable({properties, queryParams = null, routing}) {

    queryParams = queryParams || {}; // if queryParam is null, convert it into object! see ProjectController Note A!
    const searchFieldChanged = (name, value) => {
      if (value) {
        queryParams[name] = value;
      } else {
        delete queryParams[name];
      }
      console.log("queryParams:" + Object.entries(queryParams));
      router.get(route(routing, queryParams));
    };
  
    const onKeyPress = (name, e) => {
      if (e.key !== "Enter") return;
      searchFieldChanged(name, e.target.value);
    };
  
    const deleteProject=(theProperty)=>{
      if (!window.confirm("Are you sure you want to delete property?")){
        return;
      }
      router.delete(route('property.destroy',theProperty));
    }

  return (
    <div>
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
                          Property 
                        </TableHeading>
                      </th>
                      <th className="px-3 py-2">
                        <TableHeading
                          name={"client_id"}
                          queryParams={queryParams}
                          routing={routing}
                        >
                          Client 
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
                          name={"top_date"}
                          queryParams={queryParams}
                          routing={routing}
                        >
                          TOP Date
                        </TableHeading>
                      </th>
                      <th className="px-3 py-2">
                          Total Assets
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
                          placeholder="Property Name"
                          defaultValue={queryParams.name}
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
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
                      <th className="px-3 py-2 text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.data.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray 700"
                      >
                        <td className="px-3 py-2">{item.id}</td>
                        <td className="px-3 py-2">
                          <img
                            src={item.imgPath}
                            alt=""
                            style={{ width: 60 }}
                          />
                        </td>
                        <th className="px-3 py-2 text-white hover:underline">
                          <Link href={route("property.show", item)}>
                            {item.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">{item.clientId}</td>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              PROJECT_STATUS_CLASS_MAP[item.status]
                            }
                          >
                            {PROJECT_STATUS_TEXT_MAP[item.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {item.topDate}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {item.assetsCount}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("property.edit", item)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={e=>deleteProject(item)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> 
                <Pagination links={properties.meta.links} />
    </div>
  );
}
