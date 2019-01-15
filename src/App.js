import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './weatherBox/weatherBox';
import "./style.css";
import SideBar from "./sidebar";

const URL = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1685bde351f4760e5c742a11817431a6`;
}
// const URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=1685bde351f4760e5c742a11817431a6';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city1: {},
      city2: {},
      city3: {},
      city4: {},
      city5: {}
    };
  }
  componentDidMount() {
    this.getCity1Data();
    this.getCity2Data();
    this.getCity3Data();
    this.getCity4Data();
    this.getCity5Data();
  }
  getCity1Data= () => {
    // mumbai 19.0825223,72.7411004
    axios({
      method: 'GET',
      // url: 'https://api.darksky.net/forecast/096f53ec1bd1f9718df65da21af39589/19.0825223,72.7411004?exclude=currently,minutely,hourly,alerts',
      url: URL('Shanghai')

    }).then(res => this.setState({ city1: res.data}));

  }
  getCity2Data = () => {
    //california 37.1930761,-123.7975049
    axios({
      method: 'GET',
      url: URL('London')

    }).then(res => this.setState({ city2: res.data}));

  }
  getCity3Data = () => {
    //London  51.5287718,-0.2416813
    axios({
      method: 'GET',
      // url: 'https://api.darksky.net/forecast/096f53ec1bd1f9718df65da21af39589/51.5287718,-0.2416813?exclude=currently,minutely,hourly,alerts',
      url: URL('Mumbai')

    }).then(res => this.setState({ city3: res.data }));

  }
  getCity4Data = () => {
    //sweden 61.7524149,8.4396449
    axios({
      method: 'GET',
      url: URL('California')

    }).then(res => this.setState({ city4: res.data }));

  }
  getCity5Data = () => {
      //nepal 28.3838381,81.8863335
      axios({
        method: 'GET',
        url: URL('Kathmandu')
  
      }).then(res => this.setState({ city5: res.data }));
  }
 render() {
   let dataAvailable = false;
   const { city1, city2, city3, city4, city5 } = this.state;
   const data = [];
   if(Object.keys(city1).length && Object.keys(city2).length && Object.keys(city3).length && Object.keys(city4).length && Object.keys(city5).length) {
      dataAvailable = true;
      data.push(city1);
      data.push(city2);
      data.push(city3);
      data.push(city4);
      data.push(city5);
      // data.push(city5);
      // data.push(city5);

   }
  return (
          <div id="App">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap">
              <h1>Simple Weather App</h1>
              <h2>Live Weather of 5 Countries</h2>
              {dataAvailable ? <WeatherBox data={data}/> : <h2 className="w-100" style={{textAlign: 'center'}}>Loading....</h2>}
              
        </div>
      </div>  
  );
 }
}

export default App;
