import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function MUICard({index, header, detail1, detail2 ,mdSize}) {
  return (
    <Grid  item xs={2} sm={mdSize} md={mdSize} >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {header}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {detail1}
          </Typography>
          <Typography variant="body2">{detail2}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
