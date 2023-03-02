import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">List User</NavLink>
                </li>
                <li>
                   <NavLink to="user/create">Create User</NavLink> 
                </li>
            </ul>
        </nav>
    );
}