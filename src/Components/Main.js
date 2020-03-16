import React, { Component } from 'react';
import Factbook from '../data/factbook.json'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedCountry: "bahrain"
        };
      }

    render () {
        return (
            <div>
            {Factbook.map((dataDetail, index)=>{
                console.log(dataDetail.countries)

                return ( 
                    <div>
                <h1>{dataDetail.countries.united_kingdom.data.name}</h1>
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
