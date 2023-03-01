import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
    return (
        <div className="user-card">
            <Link to={`user/${user.id}/edit`}>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <h4>{user.mobile}</h4>
            </Link>
            <button className="user-delete__btn">Delete</button>
        </div>
    );
}