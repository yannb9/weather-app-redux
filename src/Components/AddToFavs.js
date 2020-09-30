import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../store/actions'
import {Styles} from '../StyledComponents'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart as farHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as fasHeart} from '@fortawesome/free-regular-svg-icons'

class AddToFavs extends Component {

    addToFavorites = () =>{
        this.props.dispatch(Actions.addToFavorites(this.props.weather.data.location))
    }

    render() {
        const {Container, Favorite, FavSpan} = Styles.Favs;
        const favorites = this.props.weather.favorites.cities;
        return (
            <Container className="Favorites">
                {favorites.indexOf(this.props.weather.data.location)>-1 ? (
                    <Favorite>
                        <FontAwesomeIcon icon={farHeart} size="lg" color="#b83b5e"/>
                        <FavSpan>Added to Favorites</FavSpan>
                    </Favorite>
                ):(
                    <Favorite onClick={this.addToFavorites}>
                        <FontAwesomeIcon icon={fasHeart} size="lg" color="#fff"/>
                        <FavSpan>Add to Favorites</FavSpan>
                    </Favorite>
                )}
            </Container>

        )
    }
}

const mapStateToProps = state => {
    return {weather: state}
}

export default connect(mapStateToProps)(AddToFavs)