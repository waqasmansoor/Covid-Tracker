import React, {useState } from 'react';
import styles from './App.module.css';
import image from './images/image.png';

import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';





function App(){
    
const [country,setCountry]=useState('Global')
const [chartData,setChartData]=useState({})

    
    function selectCountry(country){
        setCountry(country)
    }    

    async function countryData(countryData){
        setChartData(countryData)
    }
    

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='COVID-19'/>
            <Cards country={country} countryData={countryData}/>
            <CountryPicker selectCountry={selectCountry}/>
            <Chart countryData={chartData} country={country}/>
        </div>
    )
}

export default App