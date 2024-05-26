import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    email: "",
    password:"",
  });

  const [confirmPassword,setconfirmPassword]=useState("");

  const passwordMismatch = data.password !== confirmPassword;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(passwordMismatch){
      alert("Password must be the same as Confirm Password");
      return;
    }
    console.log("User::create->onSubmit, data="+Object.entries(data));
    post(route("user.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Create Users
          </h2>
        </div>
      }
    >
      <Head title="Users" />

      <div className="max-w-7xl mt-5 mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <pre>{JSON.stringify(data, undefined, 4)}</pre>

            <form
              onSubmit={e=>onSubmit(e)}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div className="mt-4">
                <InputLabel htmlFor="name" value="User Name" />
                <TextInput
                  id="user_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="email" value="User Email" />
                <TextInput
                  id="email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Password" />
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => onChange(e)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Confirm Password" />
                <TextInput
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  className="mt-1 block w-full"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                <InputError message={errors.confirmPassword} className="mt-2" />
                {passwordMismatch && <p className="text-red-500 font-weight-bold"> Password must match Confirm Password</p>}
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("user.index")}
                  className="text-gray- 800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-16"
                >
                  Cancel
                </Link>
                <button disabled={passwordMismatch} className={passwordMismatch? "bg-red-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-red-600 text-sm h-16"  :"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm h-16"}>
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
