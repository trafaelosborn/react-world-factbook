import React, { Component } from 'react';
import Factbook from '../data/factbook.json'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IntroCard from './IntroCard';
import GeoCard from './GeoCard';
import PeopleCard from './PeopleCard';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "antarctica"
    };
  }



  render() {
    const selectedCountryStr = JSON.stringify(this.state.selectedCountry)
    const selectedCountry = JSON.parse(selectedCountryStr);



    return (
      <Container>
        <div>
          {Factbook.map((dataDetail, index) => {
            const people = dataDetail.countries[selectedCountry.toLowerCase()].data.people;
            const peopleNotAvailable = !people;
            return (


              <div>
                <h1>{dataDetail.countries[selectedCountry.toLowerCase()].data.name} </h1>
                <IntroCard dataDetail={dataDetail} selectedCountry={selectedCountry} />
                <GeoCard dataDetail={dataDetail} selectedCountry={selectedCountry} />

                <div>
                  { !people ? null : <PeopleCard dataDetail={dataDetail} selectedCountry={selectedCountry} />}
                </div>
              </div>



            )

          })}
        </div>
      </Container>
    );
  }

}


export default Main;
