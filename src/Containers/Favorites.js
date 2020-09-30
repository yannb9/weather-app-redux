import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../store/actions'
import {Api} from '../Api'
import {Styles} from '../StyledComponents'
import {Route} from 'react-router-dom'

class Favorites extends Component {

    fecthWeather = (history, city) =>{
        this.props.dispatch(Actions.setLocation(city))
        history.push('/')
    }

    componentDidMount() {
        this.props.dispatch(Actions.clearFavorites())
        var favs = this.props.weather.favorites.cities;
        favs.map(location => {
           return fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${Api.key}&q=${location}`)
                .then(res => res.json())
                .then(json => this.props.dispatch(Actions.fetch12HForecast(location, json[0].Key, this.props.weather.favorites.cities)))
        })
    }

    render() {
        const {
            Favorites,
            Container,
            Box,
            City,
            Temperature,
            Status
        } = Styles.Favorites;
        const favorites = this.props.weather.favorites.forecasts;
        return (
            <Favorites>
                <Container>
                    {favorites.map((item, index) => {
                        return <Route key={index} render={({history}) => (
                            <Box onClick={()=>{this.fecthWeather(history, item.city)}}>
                                <City className="location">{item.city}</City>
                                <Temperature className="degrees">{item.celcius}°</Temperature>
                                <Status className="status">{item.status}</Status>
                            </Box>
                            )} />

                    })}
                </Container>
            </Favorites>
        )
    }
}

const mapStateToProps = state => {
    return {weather: state}
}

export default connect(mapStateToProps)(Favorites)