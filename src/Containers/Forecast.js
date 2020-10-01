import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Waves} from '../svg/waves.svg'
import * as Actions from '../store/actions'
import Search from '../Components/Search'
import AddToFavs from '../Components/AddToFavs'
import {Styles} from '../StyledComponents'

class Forecast extends Component {

    addToFavorites = () =>{
        this.props.dispatch(Actions.addToFavorites(this.props.weather.data.location))
    }

    componentDidMount() {
        // this.props.dispatch(Actions.setLocation(this.props.weather.data.location))
    }

    render() {
        const {Forecast, Today, Weather, Location, Degrees, Status} = Styles.Forecast;
        const {FiveDays, Wrapper, FiveDaysItem, Day, FiveFaysDegrees} = Styles.FiveDays;
        const fiveDaysForecast = this.props.weather.forecast.fiveDays;
        return (
            <Forecast className="Forecast">
                <Search />
                <Today className="Today">
                    <AddToFavs />
                    <Weather className="forecast">
                        <Location className="location">{this.props.weather.data.location}</Location>
                        <Degrees className="degrees">{this.props.weather.forecast.today.celcius}°</Degrees>
                        <Status className="status">{this.props.weather.forecast.today.status}</Status>
                    </Weather>
                </Today>
                <FiveDays className="5-day">
                    <Waves/>
                    <Wrapper className="forecast">
                        {fiveDaysForecast.map((item, index) => (
                            <FiveDaysItem  key={index}>
                                <Day  className="day">{item.day}</Day>
                                <FiveFaysDegrees className="degrees">{item.celcius}°</FiveFaysDegrees>
                            </FiveDaysItem>
                        ))}
                    </Wrapper>
                </FiveDays>
            </Forecast>
        )
    }
}

const mapStateToProps = state => {
    return {weather: state}
}

export default connect(mapStateToProps)(Forecast)