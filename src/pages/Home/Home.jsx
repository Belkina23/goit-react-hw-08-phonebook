import {HomeDiv} from './Home.styled'
import React from 'react';
import welkom from './welcom.jpg'

export default function Home() {
    return (
        <HomeDiv>
            <h1>Welcome to your phonebook!</h1>
            <img src={welkom} alt="welkom" />
        </HomeDiv>
    )
}
