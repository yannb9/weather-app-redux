import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Styles} from '../StyledComponents'
import * as Actions from '../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLevelDownAlt} from '@fortawesome/free-solid-svg-icons'

class Search extends Component {

    state = {
        search:'',
    }

    handleChange = event => {
        this.setState({
            search: event.target.value,
          });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(Actions.setLocation(this.state.search))
    }

    render() {
        const {Container, Form, Input, Font, ErrorMessage} = Styles.Search;
        return (
            <Container className="search">
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        placeholder="Search a location" 
                        type="text" 
                        name="location" 
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                    <Font>Press Enter<FontAwesomeIcon icon={faLevelDownAlt} style={{marginLeft:'5px'}} color="#c3c1c1" rotation={90}/></Font>
                </Form>
                {this.props.weather.errors && <ErrorMessage>{this.props.weather.errors}</ErrorMessage>}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather: state
    }
}

export default connect(mapStateToProps)(Search)