import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";

export default function TableHeading({ name, queryParams,children }) {

  const sortChanged = () => {
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
    router.get(route("project.index", queryParams));
  };

  return (
    <div
      className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer"
      onClick={sortChanged}
    >
      {children}
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
