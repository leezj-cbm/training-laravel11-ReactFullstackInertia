import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TableHeading from "@/Components/TableHeading.jsx";

export default function Index({
  auth,
  users,
  queryParams = null,
  routing,
  success = null,
}) {
  //const [sortAsc, setsortAsc] = useState(true);

  queryParams = queryParams || {}; // if queryParam is null, convert it into object! see UserController Note A!
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

  const deleteUser=(theUser)=>{
    if (!window.confirm("Are you sure you want to delete user?")){
      return;
    }
    router.delete(route('user.destroy',theUser));

  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Users
          </h2>
          <Link
            href={route("user.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Users" />

      {success && (
        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
          {success}
        </div>
      )}
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {/* <pre> {JSON.stringify(users,undefined,2)}</pre> */}
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
                          name={"email"}
                          queryParams={queryParams}
                          routing={routing}
                        >
                          Email
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
                          name={"updated_at"}
                          queryParams={queryParams}
                          routing={routing}
                        >
                          Updated At
                        </TableHeading>
                      </th>
                      <th className="px-3 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2">
                        <TextInput
                          className="w-full "
                          placeholder="User Name"
                          defaultValue={queryParams.name}
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2 text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.data.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray 700"
                      >
                        <td className="px-3 py-2">{item.id}</td>
                        <th className="px-3 py-2 text-white hover:underline">
                          <Link href={route("user.show", item)}>
                            {item.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">{item.email}</td>
                        <td className="px-3 py-2 text-nowrap">
                          {item.createdAt}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {item.updatedAt}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("user.edit", item)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={e=>deleteUser(item)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={users.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
