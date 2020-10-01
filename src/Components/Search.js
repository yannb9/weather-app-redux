import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Styles} from '../StyledComponents'
import * as Actions from '../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLevelDownAlt} from '@fortawesome/free-solid-svg-icons'
import {Api} from '../Api'


class Search extends Component {

    state = {
        search:'',
        suggestions:[]
    }

    handleChange = event => {
         this.setState({
            search: event.target.value,
          })
          if(event.target.value){
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${Api.key}&q=${event.target.value}`)
            .then(res=>res.json())
            .then(json=> {
                this.setState({
                   suggestions: json
                })}
             )
          } else{
            this.setState({
                suggestions: [],
              })
          }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(Actions.setLocation(this.state.search))
    }

    setSearch = (term) =>{
        this.setState({
            search: term.LocalizedName,
          })
        this.props.dispatch(Actions.setLocation(term.LocalizedName))
    }

    render() {
        const {Container, Form, Input, Font, ErrorMessage, Suggestion, SuggestionItem} = Styles.Search;
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
                    {this.state.suggestions.length>0 && (
                        <Suggestion>
                            {this.state.suggestions.map((item, index)=>(
                            <SuggestionItem onClick={()=>this.setSearch(item)} key={index}>
                                {item.LocalizedName}
                            </SuggestionItem>
                            ))}
                        </Suggestion>
                    )}
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