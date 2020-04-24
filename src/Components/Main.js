import React, { Component } from 'react';
import Factbook from '../data/factbook.json'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedCountry: "uruguay"
        };
      }

    render () {
      const selectedCountryStr = JSON.stringify(this.state.selectedCountry)
      console.log(selectedCountryStr);
      
      const selectedCountry = JSON.parse(selectedCountryStr);
      console.log(selectedCountry);
        return (
         
            <div>
            {Factbook.map((dataDetail, index)=>{
                

                return ( 
                  
                    <div>
               
                <h1>{dataDetail.countries[selectedCountry.toLowerCase()].data.name} </h1>
                <p>{dataDetail.countries[selectedCountry.toLowerCase()].data.introduction.background}</p>              
                <p>{dataDetail.countries[selectedCountry.toLowerCase()].data.communications.broadcast_media}</p>
                    </div>                        
                    )
                
            })}
            </div>
          );
        }
        
    }


export default Main;
