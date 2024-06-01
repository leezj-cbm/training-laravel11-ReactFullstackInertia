import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Grid } from '@mui/material';

export default function Show({ auth, property, assets, queryParams, routing }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Property ${property.name}`}
        </h2>
      }
    >
      <Head title="Properties" />
      <pre className="text-white">{JSON.stringify(property, undefined, 5)}</pre>
      <pre className="text-white">{JSON.stringify(assets,undefined, 4)}</pre>
      <div className="py-12">
        
      </div>
    </AuthenticatedLayout>
  );
}
