import React from 'react';
import styled from 'styled-components';
import home from '../img/compass.svg';
import like from '../img/heart.svg';
import user from '../img/user.svg';

const Nav = styled.nav`
    padding: 20px 60px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #CCC;
    h1 {
        margin: 0;
        font-weight: 600;
    }
    .icons {
        margin-top: 3px;
        a {
            &:nth-child(2) {
                margin: 0 15px;
            }
            img {
                width: 20px;
                height: 20px;      
            }
        }        
    }
    input {
        background-color: #fafafa;
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 3px;
        &::placeholder {
            text-align:  center;
        }
    }   
    
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <h1>Stylagram</h1>
            </div>
            <form>
                <input type="Search" placeholder="search"></input>
            </form>
            <div className="icons">
                <a href="#"><img alt="Icono Home" src={home}/></a>
                <a href="#"><img alt="Icono Like" src={like}/></a>
                <a href="#"><img alt="Icono User Profile" src={user}/></a>
            </div>
        </Nav>
    )
}

export default Navbar;