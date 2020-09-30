import * as ActionTypes from './actionTypes'
import {Api} from '../Api'

export const fetchTodayForecast = key => {
    return dispatch => {
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${Api.key}`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: ActionTypes.FETCH_TODAY_FORECAST,
                    celcius: parseInt((json.DailyForecasts[0].Temperature.Minimum.Value - 32) * 5 / 9),
                    fahrenheit: json.DailyForecasts[0].Temperature.Minimum.Value,
                    status: json.DailyForecasts[0].Day.IconPhrase
                })
                dispatch(fetchFiveDayForecast(key))
            })
    }
}

export const fetchFiveDayForecast = key => {
    return dispatch => {
        var fivedays = [];
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${Api.key}`)
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
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${Api.key}&q=${location}`)
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
        if(!array.indexOf(location)>-1){
            fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${Api.key}`)
            .then(res=>res.json())
            .then(json=>{
                var stamp = {};
                stamp.city = location;
                stamp.fahrenheit = json[0].Temperature.Value;
                stamp.celcius = parseInt((json[0].Temperature.Value - 32) * 5 / 9);
                stamp.status = json[0].IconPhrase;
                dispatch({type:ActionTypes.FETCH_12H_FORECAST, data: stamp})
            })
        }
    }
}