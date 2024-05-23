import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";

export default function TableHeading({ name, queryParams,children,routing }) {

  const sortChanged = () => {
    console.log("TableHeading A: Clicked! routing="+routing+" name="+name+" queryParams.sort_field="+queryParams.sort_field+" queryParams.sort_direction="+queryParams.sort_direction);
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction= "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    console.log("TableHeading B: Processed! routing="+routing+" name="+name+" queryParams.sort_Field="+queryParams.sort_field+" queryParams.sort_direction="+queryParams.sort_direction);
    router.get(route(routing, queryParams));
  };

  return (
    <div
      className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer"
      onClick={sortChanged}
    >
      {children}
      {/* <pre>{JSON.stringify(queryParams)}</pre> */}
      <div>
        <ChevronUpIcon
          className={
            "w-4 " +
            (queryParams.sort_field === name &&
            queryParams.sort_direction === "asc"
              ? "text-white"
              : "")
          }
        />
        <ChevronDownIcon
          className={
            "w-4 -mt-2 " +
            (queryParams.sort_field === name &&
            queryParams.sort_direction === "desc"
              ? "text-white"
              : "")
          }
        />
      </div>
    </div>
  );
}