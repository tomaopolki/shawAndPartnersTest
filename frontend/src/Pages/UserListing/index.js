import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';

import './styles.css';

var prev = [];

export default function UserListing() {
    const [users, setUsers] = useState([]);
    const [since, setSince] = useState(0);
    const [page, setPage] = useState(1);

    

    const loadUsers = async (x) => {
        //setPrev(since);
        const response = await api.get(`/api/users?since=${x}`);
            
            if (prev.indexOf(response.data.firstId) === -1 ){
                prev.push(response.data.firstId);
            }

            setUsers(response.data.data);
            setSince(response.data.since);
    }
    
    console.log(prev);
    console.log(page);
    useEffect(() => {
        loadUsers(0);
    }, []);
    
    return (
        <>
            <h1>User Listing</h1>
            <div className="content">
                <ul className="user-list" >
                    {users.map(user => (
                        <Link to={{pathname: `/userdetails/${user.login}`}}>
                            <li className="single-user" style={{cursor: 'pointer'}}  key={user.id}>
                                <p>id: {user.id}</p>
                                <p>login: {user.login}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className="buttons">
                    <button className="btn"
                        onClick={() => {loadUsers(prev[page-2]-1); if (page > 0) setPage(page - 1);}}>Prev Page
                    </button>
                    <button className="btn"
                        onClick={() => {loadUsers(since); setPage(page + 1); }}>Next Page
                    </button>
                </div>        
            </div>
        </>
    )
}