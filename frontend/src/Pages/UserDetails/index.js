import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';


export default function UserDetails(props){
    const [user, setUser] = useState([]);
    const { username } = props.match.params;

    useEffect(() => {
        async function loadUser(){
            
            const response = await api.get(`/api/users/${username}/details`);
            setUser(response.data);
        }
        loadUser();
    }, []);

    return (
        <>
        <h1>{username}'s Details</h1>
        <div className="content">
            <p>id: {user.id}</p>
            <p>login: {user.login}</p>
            <p>profile url: {user.url}</p>
            <p>date of login creation: {user.created_at}</p>
            <div className="buttons">
                <Link to="/">
                    <button className="btn">Back</button>
                </Link>
                <Link to={{pathname: `/${username}/userepos`}}>
                    <button className="btn">See User Repos</button>
                </Link>
            </div>
        </div>
        </>
    )
}