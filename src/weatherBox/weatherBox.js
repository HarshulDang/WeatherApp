import React, {Component} from 'react';


class WeatherBox extends Component {

    farenhiteToCelcius = (F) => {                      //<img src={require('../assets/fonts/cloud.png')} alt="cloud"/>
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
                                <h6 className="col-5" style={{margin: '0 auto'}}>{Math.round(this.farenhiteToCelcius(city.main.temp) * 100)/100}{'C'}</h6>
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
                                        <img src={require('../assets/fonts/cloud64.png')} alt="cloud" style={{height: '100%', margin: '10px'}}/>
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
            </div>
            

        );
    }
}

export default WeatherBox;