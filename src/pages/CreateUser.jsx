import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import { generatePhoneNumber } from '../helpers/util';

export default function CreateUser() {
    const nameInput = useRef();
    const emailInput = useRef();
    const mobileInput = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputs = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            mobile: mobileInput.current.value
        };

        if (!inputs.name || !inputs.email) return toast.error("please enter name and email!");

        try {
            const { data } = await axios.post('http://localhost:8088/reactphp/api/', inputs);

            if (data.status == 1) {
                toast.success(data.message);
                navigate('/');
            } else {
                toast.error(data.message);
            }
            
        } catch (err) {
            toast.error(data.message);
        }

        nameInput.current.value = "";
        emailInput.current.value = "";
        mobileInput.current.value = generatePhoneNumber();
    }

    useEffect(() => {
        if (mobileInput.current) mobileInput.current.value = generatePhoneNumber();
    }, [mobileInput.current]);

    return (
        <>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className="user-form">
                <label>Name:</label>
                <input type="text" ref={nameInput} />
                <br /><br />
                <label>Email:</label>
                <input type="email" ref={emailInput} />
                <br /><br />
                <label>Mobile:</label>
                <input type="number" ref={mobileInput} maxLength="10" minLength="10"/>
                <br /><br />
                <button>Save</button>
            </form>
        </>
       
    );
}