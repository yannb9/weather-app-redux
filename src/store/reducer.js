import * as ActionTypes from './actionTypes'
import {INITIAL_STATE} from './initialState'

export default function Root(state=INITIAL_STATE, action){
    switch (action.type) {
        case ActionTypes.SET_LOCATION:
            return {
                ...state,
                data: {
                    location: action.location
                }
            }

        case ActionTypes.FETCH_LOCATION_KEY:
            return {
                ...state,
                data: {
                    ...state.data,
                    key: action.key
                }
            }

        case ActionTypes.FETCH_TODAY_FORECAST:
            return {
                ...state,
                forecast: {
                    ...state.forecast,
                    today: {
                        celcius: action.celcius,
                        fahrenheit: action.fahrenheit,
                        status: action.status
                    }
                }

            }

        case ActionTypes.FETCH_FIVE_DAY_FORECAST:
            return {
                ...state,
                forecast: {
                    ...state.forecast,
                    fiveDays: action.fivedays
                }
            }

        case ActionTypes.FETCH_WEATHER_ERR:
            return {
                ...state,
                errors: action.error
            }

            case ActionTypes.IS_FAVORITE:
                return {
                    ...state,
                    favorites:{
                        ...state.favorites,
                        isFavorite: action.isFavorite
                    }
                }

            case ActionTypes.ADD_TO_FAVORITES:
                return {
                    ...state,
                    favorites:{
                        ...state.favorites,
                        cities:[...state.favorites.cities, action.city]
                    }
                }
            case ActionTypes.CLEAR_FAVORITES:
                return{
                    ...state,
                    favorites:{
                        ...state.favorites,
                        forecasts:[]
                    }
                }
            case ActionTypes.FETCH_12H_FORECAST:
                return{
                    ...state,
                    favorites:{
                        ...state.favorites,
                        forecasts:[...state.favorites.forecasts, action.data]
                    }
                }


        default:
            return state
    }
}