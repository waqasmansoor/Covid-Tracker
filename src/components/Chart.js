import React, { useEffect,useState} from 'react';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';


        
    
    
        


    
    var url='https://covid19.mathdro.id/api'
    
    function Chart({country,countryData}){
      const [chartData,setChartData]=useState([])
      
      
      
      console.log('charts')
      useEffect(()=>{
        async function getChartData(){
          let response=await fetch(`${url}/daily`)
          let chartData=await response.json()
            setChartData(chartData)
            
      
            
          }
        
        if(country==='Global'){
          getChartData()

        }
        
        
      },[country])


      if(country==='Global'){
        
        
        const line_data={
            labels: chartData.map(i=>{return i.reportDate}),
            datasets: [
              {
                label: 'Infected',
                fill: true,
                
                //backgroundColor: 'rgba(0,0,255,0.1)',
                borderColor: 'rgba(0,0,255,1)',
                data: chartData.map(i=>{return i.confirmed.total}),
              },
              {
                label: 'Deaths',
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'rgba(255,0,0,1)',
                
                data: chartData.map(i=>{return i.deaths.total}),
              },
            ]
          }
      
      
          
          return (
            <div className={styles.container}>
              <Line
              data={line_data}/>
              
            </div>
          );
        
      }
      
      if(countryData.hasOwnProperty('confirmed')){
      
        
      
const bar_data = {
  labels: ['Infected','Recovered','Deaths'],
  datasets: [
    {
      label: country,
      backgroundColor: ['rgba(0,0,255,0.7)','rgba(0,255,0,0.7)','rgba(255,0,0,0.7)',],
      borderWidth: 1,
      data: [countryData.confirmed.value,countryData.recovered.value,countryData.deaths.value]
    }
  ]
};


    return (
      <div className={styles.container}>
        
        <Bar
          data={bar_data}
         
          
          options={{
            maintainAspectRatio: false,
            legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
          }}
        />
      </div>
    );
  
        }
    
      

else{
  return <div></div>
}
      
      }
  


export default Chart