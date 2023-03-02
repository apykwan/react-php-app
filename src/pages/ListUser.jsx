import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

import UserCard from '../components/UserCard';

export default function ListUser() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('/');
            setUsers(data);
        } catch (err) {
            toast.error('Failed to fetch users from database');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div className="user-container">
            {users.length > 1 && users.map(user => <UserCard key ={user.id} user={user} />)}
        </div>
    )
}