import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css';





export default function Cards({data}) {
  
  
  
  
  
  


  if (!data.hasOwnProperty('confirmed')) {
    return <h3>Loading...</h3>
  }



  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        style={{ borderBottom: "10px solid rgba(0,0,255,0.7)" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
        </Typography>
          <Typography variant="h5" component="h2">

            {data.confirmed.value}
          </Typography>
          <Typography color="textSecondary">

            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of Infected cases of COVID-19
        </Typography>
        </CardContent>

      </Card>

      <Card className={styles.card} style={{ borderBottom: "10px solid rgba(0,255,0,0.7)" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
        </Typography>
          <Typography variant="h5" component="h2">

            {data.recovered.value}
          </Typography>
          <Typography color="textSecondary">

            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of Recovered cases of COVID-19
        </Typography>
        </CardContent>

      </Card>

      <Card className={styles.card} style={{ borderBottom: "10px solid rgba(255,0,0,0.7)" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
        </Typography>
          <Typography variant="h5" component="h2">

            {data.deaths.value}
          </Typography>
          <Typography color="textSecondary">

            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of Deaths from COVID-19
        </Typography>
        </CardContent>

      </Card>
    </div>
  );
}