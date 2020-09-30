import React from 'react';
import {Link} from "react-router-dom";
import {Styles} from '../StyledComponents'


export default function Header(){
    const {Container, Title, Menu} = Styles.Header
    return(
        <Container>
            <Title>HEROLO WEATHER APP</Title>
            <Menu className="Menu">
                <Link style={{textDecoration:'none', color:'#fafafa', fontSize:'14px', fontWeight:500}} to="/">HOME</Link>
                <Link style={{textDecoration:'none', color:'#fafafa', fontSize:'14px', fontWeight:500}} from="/" to="/favorites">FAVORITES</Link>
            </Menu>
        </Container>
    )
}
