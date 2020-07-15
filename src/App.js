import React, {useState,useEffect} from 'react';
import styles from './App.module.css';
import image from './images/image.png';
import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';





function App(){
    
const [country,setCountry]=useState('Global')
const [countryData,setCountryData]=useState({})

const url='https://covid19.mathdro.id/api'

async function fetchData(url){
    
     let response = await fetch(url)
     let { confirmed, recovered, deaths, lastUpdate } = await response.json()
    
    
    setCountryData({ confirmed, recovered, deaths, lastUpdate })
}

useEffect(() => {
        fetchData(url)       
       }
       ,[])

     
    

      function selectCountry(countryName){
        
        if(countryName!=='Global')
          {
              fetchData(url+'/countries/'+countryName)
          }
          else
          {
            fetchData(url)
              
          }
         setCountry(countryName)
        
       
      
    }
  

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='COVID-19'/>
            <Cards data={countryData}/>
            <CountryPicker selectCountry={selectCountry}/>
            <Chart country={country} countryData={countryData}/>
        </div>
    )
}

export default App