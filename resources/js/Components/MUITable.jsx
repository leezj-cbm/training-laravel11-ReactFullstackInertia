import { DataGrid } from "@mui/x-data-grid";

export default function({headers, data}){

    //property
    /*
    const propertyColumns=[
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'client', headerName: 'CLient ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'description', headerName: 'Description', width: 70 },
        { field: 'imgPath', headerName: 'Image Path', width: 70 },
        { field: 'address', headerName: 'Address', width: 70 },
        { field: 'coordinates', headerName: 'Coordinates', width: 70 },
        { field: 'top_date', headerName: 'TOP Date', width: 70 },
        { field: 'status', headerName: 'Status', width: 70 },
        { field: 'createdAt', headerName: 'Created At', width: 70 },
        { field: 'updatedAt', headerName: 'Updated At', width: 70 },
      ]
    */

    return(
        <DataGrid
                  rows={data}
                  columns={headers}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
    );
}