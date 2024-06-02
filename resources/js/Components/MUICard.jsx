import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function MUICard({index, header, detail1 ="", detail2="" , detail3="", detail4="",mdSize=4}) {
  return (
    <Grid  item xs={2} sm={mdSize} md={mdSize} >
      <Card variant="elevation" raised={true} >
        <CardContent>
          <Typography sx={{ fontSize: 14, color:'blue', fontWeight:'bold' }} color="text.secondary" gutterBottom>
            {header}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 , color:'grey'}} color="text.secondary">
            {detail1}
          </Typography>
          <Typography variant="body2">{detail2}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
