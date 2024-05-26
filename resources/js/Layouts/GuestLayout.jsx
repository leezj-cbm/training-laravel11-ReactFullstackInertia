import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white rounded-lg w-60">
        {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}

        <a href="https://www.cbm.com.sg/">
          <img
            src="https://i.ibb.co/G55g01c/CBM-Logo.png"
            alt="CBM-Logo"
            className="align-middle justify-center w-auto"
          />
        </a>
      </div>

      <div>
        <h1 className="mt-3 text-white font-bold ">
          Your Partner in Facilities Management
        </h1>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
