
import React, {Component} from 'react';
import { VictoryChart } from 'victory';
import { VictoryLine } from 'victory';
import { VictoryAxis } from 'victory';
import { VictoryBar } from 'victory';


class WeatherBox extends Component {

    farenhiteToCelcius = (F) => {                      
        return F - 273.15;
    }

    
    renderCard = (data) => {
        return(
            data.map(city => {
                return(
                    <div className="card" style={{width: '18rem', margin: '10px'}}>
                        <div className="card-body">
                            <div className="d-flex justify-content-around">
                                <h5 className="card-title" style={{textAlign: 'center', paddingTop: '13px'}}>{city.name}</h5>
                                <div className="d-flex flex-column">
                                    <img id="wicon" src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}/>
                                    <h6 style={{textAlign: 'end'}}>{city.weather[0].main}</h6>
                                </div>
                            </div>
                            <div className="col-12 d-flex" style={{textAlign: 'end'}}>
                                <h6 className="col-5" style={{margin: '0 auto'}}>{Math.round(this.farenhiteToCelcius(city.main.temp) * 100)/100}{'°C'}</h6>
                                <div className="col-7 d-flex flex-column">
                                    <span>Max: {Math.round(this.farenhiteToCelcius(city.main.temp_max) * 100)/100}</span>
                                    <span>Min: {Math.round(this.farenhiteToCelcius(city.main.temp_min) * 100)/100}</span>
                                    <span>Humidity: {city.main.humidity}</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                );
            })
        );
    }
    renderMobileCard = (data) => {
        return(
            data.map(city => {
                return(
                    <div className="col-12">
                        <div className="card" style={{width: '100%', margin: '10px'}}>
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <div className="col-8">
                                        <h2 className="card-title" style={{textAlign: 'center', paddingTop: '13px'}}>{city.name}</h2>
                                        <div className="col-12 d-flex" style={{textAlign: 'end', marginTop: '28px'}}>
                                        <h3 className="col-5" style={{margin: '0 auto'}}>Temperature: {Math.round(this.farenhiteToCelcius(city.main.temp) * 100)/100}{'C'}</h3>
                                        <div className="col-7 d-flex flex-column">
                                            <span style={{fontSize: '24px'}}>Max: {Math.round(this.farenhiteToCelcius(city.main.temp_max) * 100)/100}</span>
                                            <span style={{fontSize: '24px'}}>Min: {Math.round(this.farenhiteToCelcius(city.main.temp_min) * 100)/100}</span>
                                            
                                        </div>
                                </div>
                                    </div>
                                    <div className="col-4 d-flex flex-column">
                                        <img id="wicon" src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}/>
                                        <h5 style={{textAlign: 'center'}}>{city.weather[0].main}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    render() {
        console.log('11111: ', this.props.data);
        console.log('2222: ', window.outerWidth);
        const { data } = this.props;
        return(
            <div>
                
                {window.outerWidth < 400 ? <div className="d-flex flex-row">{this.renderMobileCard(data)}</div> : <div className="d-flex flex-wrap">{this.renderCard(data)}</div>}
                <div className="col-6 offset-3">
                    <VictoryChart 
                         domainPadding={{x: 40}}>
                         <VictoryBar
                           barRatio={0.5}
                           cornerRadius={10}
                           height={200}
                           animate={{
                               duration: 2000,
                               onLoad: { duration: 1000 }
                           }}
                           data={[
                             { City: "Shanghai", actual: data[0].main.temp },
                             { City: "London",  actual: data[1].main.temp },
                             { City: "Mumbai",  actual: data[2].main.temp },
                             { City: "California",  actual: data[3].main.temp },
                             { City: "Kathmandu",  actual: data[4].main.temp }
                           ]}
                           x="City"
                           y={(d) => (d.actual - 273.15)}
                         />
                         <VictoryAxis
                           label="Cities"
                           style={{
                             axisLabel: { padding: 30 }
                           }}
                         />

                         <VictoryAxis dependentAxis
                           label="Temperature in °C"
                           style={{
                             axisLabel: { padding: 35 }
                           }}

                         />
                    </VictoryChart>
                </div>
            </div>
            

        );
    }
}

export default WeatherBox;