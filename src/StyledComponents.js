import styled from 'styled-components'

export const Styles = {
    Header: {
        Container: styled.div `
            background: #634cff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5%;
            font-family: Manrope;
        `,
        Title: styled.span `
            font-size: 14px;
            font-weight: 500;
            color:#fafafa
        `,
        Menu: styled.menu `
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 10%;
            padding: 0 5px;
            font-size: 14px;
        `
    },
    Forecast: {
        Forecast: styled.div `
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(99, 76, 255);
        `,
        Today: styled.div `
        height: 50%;
        background-color: #634cff;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        `,
        Weather: styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Manrope;
        `,
        Location: styled.div `
        font-size: 18px;
        letter-spacing:1;
        color:#fafafa;
        `,
        Degrees: styled.div `
        font-size: 62px;
        font-weight: 600;
        letter-spacing:1;
        color:#fff;
        `,
        Status: styled.div `
        font-size: 16px;
        letter-spacing:1;
        color:#fafafa;
        `
    },
    FiveDays:{
        FiveDays:styled.div`
        height:50%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        `,
        Wrapper:styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
        background-color: #fff;
        padding-top: 5%;
        font-family:'Manrope';
        `,
        FiveDaysItem:styled.div`
        font-weight:600;
        color:#252525;
        letter-spacing:1px;
        width:100px;
        `,
        Day:styled.div`
        font-weight:14px;
        `,
        FiveFaysDegrees:styled.div`
        font-weight:18px;
        `,
    },
    Favorites: {
        Favorites: styled.div `
            width: 100%;
            height: 100vh;
            display: block;
            // flex-direction: column;
            // justify-content: center;
            background-color: rgb(99, 76, 255);
        `,
        Container: styled.div `
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
        `,
        Box: styled.div `
            background: #fafafa;
            border: 1px solid #cacaca;
            border-radius: 10px;
            padding: 5%;
            margin: 20px;
            font-family: Manrope;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            `,
        City: styled.div `
            font-size: 18px;
            color:#9f9898;
        `,
        Temperature: styled.div `
            font-size: 28px;
            font-weight: 500;
            color:#252525;
        `,
        Status: styled.div `
            font-size: 18px;
            color:#9f9898;
        `
    },
    Search: {
        Container: styled.div `
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            font-family: Manrope;
        `,
        Form: styled.form `
            position: relative;
            display: flex;
            align-items: center;
        `,
        Input: styled.input `
            width: 300px;
            height: 20px;
            border: none;
            border-radius: 100px;
            padding: 10px;
            font-family: Manrope;
            color: #949090;
        `,
        Font: styled.div `
            position:absolute;
            right:0;
            margin-right:30px;
            color: #c3c1c1;
            font-size:12px;
        `,
        ErrorMessage: styled.span `
            color:#900048;
            font-weight:700;
            font-size:12px;
        `,
        Suggestion:styled.ul`
        width: 300px;
        background: #fff;
        padding: 10px 0;
        margin: 0;
        margin: -5px;
        border-radius: 0 0 10px 10px;
        `,
        SuggestionItem:styled.li`
        list-style:none;
        padding:5px 20px;
        color:#949090;
        font-size:14px;
        cursor:pointer;
        `,
    },
    Favs: {
        Container: styled.div `
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        `,
        Favorite: styled.button `
        background: transparent;
        border:none;
        cursor:pointer;
        outline:none;
        margin: 0 0 0 15%;
    `,
        FavSpan: styled.span `
            font-family: Manrope;
            color: #c3c1c1;
            font-size:12px;
            color: #fafafa;
            margin-left:5px;
        `
    }
}