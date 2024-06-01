import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, property}) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: property.name || "",
    status: property.status || "",
    description: property.description || "",
    due_date: property.dueDate || "",
    _method:'PUT',
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Property::edit->onSubmit, data="+Object.entries(data));
    post(route("property.update",property.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Edit Properties : {property.name}
          </h2>
        </div>
      }
    >
      <Head title="Properties" />

      <div className="max-w-7xl mt-5 mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
           
            <div className="w-full px-2 py-2 m-auto">
              <img src={property.imgPath}></img>
            </div>

             <pre>{JSON.stringify(data, undefined, 4)}</pre>
            {/* <pre>{JSON.stringify(property,undefined,5)}</pre> */}

            <form
              onSubmit={e=>onSubmit(e)}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {}
              <div className="mt-4">
                <InputLabel
                  htmlFor="project_image_path"
                  value="Property Image"
                />
                <TextInput
                  id="project_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData({...data, "image":e.target.files[0]})}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="name" value="Property Name" />
                <TextInput
                  id="project_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="status" value="Property Status" />
                <SelectInput
                  className="w-full"
                  name="status"
                  defaultValue={data.status}
                  onChange={(e) => onChange(e)}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="status" value="Property Description" />
                <TextInput
                  id="description"
                  type="text"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="status" value="Property Due Date" />
                <TextInput
                  id="due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("property.index")}
                  className="text-gray- 800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-16"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm h-16">
                    Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
