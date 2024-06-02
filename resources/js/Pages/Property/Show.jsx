import MUICard from "@/Components/MUICard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Grid } from "@mui/material";

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
      <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          //justifyContent="center"
          alignItems="center"
        >
          <MUICard header={"Property ID"} detail1={property.id} detail2={""} mdSize={2}/>
          <MUICard header={"Client"} detail1={property.clientId} detail2={""} mdSize={4}/>
          
          <MUICard header={"Address"} detail1={property.address} detail2={""} mdSize={6} />
          <MUICard
            header={"Coordinates"}
            detail1={property.coordinates}
            detail2={""}
            mdSize={4}
          />
          <MUICard
            header={"TOP Date"}
            detail1={property.topDate}
            detail2={""}
            mdSize={4}
          />
          <MUICard
            header={"Total Assets"}
            detail1={property.assetsCount}
            detail2={""}
            mdSize={4}
          />
          <MUICard header={"Status"} detail1={property.status} detail2={""} mdSize={4}/>
          <MUICard
            header={"Description"}
            detail1={property.description}
            detail2={""}
            mdSize={8}
          />
        </Grid>
        </div>
      </div>
      </div>

      {/* <pre className="text-white">{JSON.stringify(property, undefined, 5)}</pre> */}
      <pre className="text-white">{JSON.stringify(assets, undefined, 4)}</pre>
    </AuthenticatedLayout>
  );
}
