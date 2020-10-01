import * as ActionTypes from './actionTypes'
import {Api} from '../Api'

export const fetchTodayForecast = key => {
    return dispatch => {
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${Api.key}`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: ActionTypes.FETCH_TODAY_FORECAST,
                    celcius: parseInt(json[0].Temperature.Metric.Value),
                    fahrenheit: json[0].Temperature.Imperial.Value,
                    status: json[0].WeatherText
                })
                dispatch(fetchFiveDayForecast(key))
            })
    }
}

export const fetchFiveDayForecast = key => {
    return dispatch => {
        var fivedays = [];
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${Api.key}`)
            .then(res => res.json())
            .then(json => {
                var forecast = json.DailyForecasts;
                forecast.map(item=>{
                    var stamp = {};
                    var date = item.Date;
                    stamp.day = new Date(date.split('T')[0]).toDateString().split('2020')[0];
                    stamp.fahrenheit =  item.Temperature.Minimum.Value;
                    stamp.celcius = parseInt((item.Temperature.Minimum.Value - 32) * 5 / 9);
                    return fivedays.push(stamp)
                })
                dispatch({
                    type: ActionTypes.FETCH_FIVE_DAY_FORECAST,
                    fivedays:fivedays
                })
            })
    }
}

export const setLocation = (location) =>{
    return dispatch => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${Api.key}&q=${location}`)
        .then(res=> res.json())
        .then(json=>dispatch(fetchTodayForecast(json[0].Key)))
        .then(()=> dispatch({type:ActionTypes.SET_LOCATION, location:location}))
        .catch(err=>dispatch({type:ActionTypes.FETCH_WEATHER_ERR, error:err.message}))
    }
}

export const addToFavorites = city =>{
    return dispatch => {
        dispatch({type:ActionTypes.ADD_TO_FAVORITES, city:city})
        dispatch(isFavorite(true))
    }
}

export const isFavorite = bool =>{
    return dispatch =>{
        dispatch({type:ActionTypes.IS_FAVORITE, isFavorite: !bool})
    }
}

export const clearFavorites = () =>{
    return dispatch =>{
        dispatch({type:ActionTypes.CLEAR_FAVORITES})
    }
}

export const fetch12HForecast = (location, key, array) =>{
    return dispatch =>{
            fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${Api.key}`)
            .then(res=>res.json())
            .then(json=>{
                var stamp = {};
                stamp.city = location;
                stamp.fahrenheit = json[0].Temperature.Imperial.Value;
                stamp.celcius = parseInt(json[0].Temperature.Metric.Value);
                stamp.status = json[0].WeatherText;
                dispatch({type:ActionTypes.FETCH_12H_FORECAST, data: stamp})
            })
    }
}