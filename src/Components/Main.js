import React, { Component } from 'react';
import Factbook from '../data/factbook.json'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedCountry: "Afghanistan"
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
                <h1>{selectedCountry}</h1>
                <h1>{dataDetail.countries.bahrain.data.name} </h1>
                <p>{dataDetail.countries.mexico.data.introduction.background}</p>
                <p>{dataDetail.countries.afghanistan.data.communications.broadcast_media}</p>
                    </div>                        
                    )
                
            })}
            </div>
          );
        }
        
    }


export default Main;
