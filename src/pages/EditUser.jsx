import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import UerForm from '../components/UserForm';

export default function EditUser() {
    const nameInput = useRef();
    const emailInput = useRef();
    const mobileInput = useRef();
    const { id } = useParams();

    const getUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8088/reactphp/api/user/${id}`)
            nameInput.current.value = data.name;
            emailInput.current.value = data.email;
            mobileInput.current.value = data.mobile;
        } catch (err) {
            toast.error('Failed to fetch users from database');
        }
    };

    useEffect(() => {
        getUser();
    }, []);
    return (
        <UerForm
            type="update" 
            nameInputRef={nameInput}
            emailInputRef={emailInput}
            mobileInputRef={mobileInput}
            userId={id}
        />
    );
}