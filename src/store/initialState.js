export const INITIAL_STATE = {
    data: {
        location:'Tel-Aviv',
        key:''
    },
    forecast: {
        today: {
            fahrenheit:'',
            celcius:'22',
            status:''
        },
        fiveDays:[]
    },
    favorites:{
        isFavorite: false,
        cities:['Tel-Aviv', 'Montreal'],
        forecasts:[]
    },
    errors:''
}