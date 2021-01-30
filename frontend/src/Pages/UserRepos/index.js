import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import './styles.css';

export default function UserRepos(props){
    const [userRepos, setUserRepos] = useState([]);
    const { username } = props.match.params;

    useEffect(() => {
        async function loadUserRepos(){
            
            const response = await api.get(`/api/users/${username}/repos`);
            setUserRepos(response.data.repos);
        }
        loadUserRepos();
    }, []);
    console.log(userRepos);
    return (
        <>  
            <h1>{username}'s Repositories</h1>
            <table>
                <thead>
                    <tr>
                    <th>Repo ID</th>
                    <th>Repo Name</th>
                    <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {userRepos.map(repo => (
                        <tr key={repo.id}>
                            <td> {repo.id}</td>
                            <td> {repo.name}</td>
                            <td> <a href={repo.html_url}>{repo.html_url}</a></td>
                        </tr>
                    ))}
                </tbody>
                <Link to="/">
                    <button className="btn">Back</button>
                </Link>        
            </table>
        </>
    )
}