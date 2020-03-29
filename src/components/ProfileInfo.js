import React from 'react';
import styled from 'styled-components';
import userPic from '../img/corgi.jpg';

const Section = styled.section`
    padding-left: 250px;
    display: flex;
    height: 250px;
    align-items: center;
    background-color: #fafafa;
    .profile-img {
        width: 250px;
        height: 200px;

        img {
            margin-top: 20px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    }
    h2 {
        font-weight: 600;
        font-size: 1.1250em;
    }
    .user-info {
        display: flex;
        align-items: center;
        color: #262626;
        button {
            border-radius: 4px; 
            border: 1px solid #ccc;
            padding: 7px;
            margin-left: 15px;
            background-color: #FFF;
        }
    }
    ul {
        display: flex;
        padding: 0;
        justify-content: space-between;
        li {
            list-style-type: none;
            a {
                text-decoration: none;
                color: #262626;
                span {
                    font-weight: 600;
                    padding-right: 5px;
                }
            }
            &:nth-child(2) {
                margin: 0 15px;
            }
        }
    }
`

const ProfileInfo = () => {
    return (
        <Section>
            <div className="profile-img">
                <img alt="User" src={userPic}/>
            </div>
            <div className="user-info-container">
                <div className="user-info">
                    <h2>cynthiamvico</h2>
                    <button type="button">Edit Profile</button>
                </div>
                <ul className="user-info-details">
                    <li><a href="#"><span>5</span>posts</a></li>
                    <li><a href="#"><span>296</span>followers</a></li>
                    <li><a href="#"><span>269</span>following</a></li>
                </ul>
                <div className="name">
                    <h2>Cynthia</h2>
                </div>
            </div>
        </Section>
    )
}

export default ProfileInfo;