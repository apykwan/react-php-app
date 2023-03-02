import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { AiFillEdit } from "react-icons/ai";

import { formatPhoneNumber } from '../helpers/util';

export default function UserCard({ user }) {
    const handleDelete = id => async (event) => {
        event.stopPropagation();
        try {
            const { data } = await axios.delete(`/user/${id}/delete`);
            if (data.status == 1) {
                toast.success(data.message);
                location.reload();
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err);
        }
    }
    
    return (
        <div className="user-card">
            <Link to={`user/${user.id}/edit`}>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <h4>{formatPhoneNumber(user.mobile)}</h4>
            
                <button
                    id={user.id} 
                    className="user-delete__btn"
                    onClick={handleDelete(user.id)}
                >
                    Delete
                </button>
                
                <AiFillEdit className="user-update__logo" />
            </Link>
        </div>
    );
}