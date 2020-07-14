import React, {useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom:'10px',
    },
    
  }));
  
  const url='https://covid19.mathdro.id/api'

function CountryPicker({selectCountry}){
    const classes = useStyles();
    const [countries,setCountries]=useState([])
    
    

    useEffect(()=>{
    async function getCountries(){
          let response=await fetch(`${url}/countries`)
          let {countries}=await response.json()
          setCountries(countries)
      }
      getCountries()
    },[]
          
    )
      
  

    
    
      const handleChange = (event) => {
        
        selectCountry(event.target.value)
        
        
        
      };    
      
      return (
          <div>
    <FormControl className={classes.formControl}>
        <InputLabel>Chose Countries</InputLabel>
        <NativeSelect
          
          onChange={handleChange}
          
        >
          
          <option value='Global'>Global</option>
           {countries.map((i,index)=>{return (<option  key={index}
           value={i.name}>
              {i.name}
              </option>)})}
          
          
        </NativeSelect>
        
      </FormControl>
</div>
      )



}

export default CountryPicker