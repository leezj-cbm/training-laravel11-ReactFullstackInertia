import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Grid ,Card, CardContent, Typography } from "@mui/material";

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
      <pre className="text-white">{JSON.stringify(assets, undefined, 4)}</pre>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >


        <Grid item>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
          
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  );
}
