import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function UserForm({
    type = "create", 
    nameInputRef, 
    emailInputRef, 
    mobileInputRef,
    userId = null
}) {
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const inputs = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            mobile: mobileInputRef.current.value
        };

        if (!inputs.name || !inputs.email || !inputs.mobile) 
            return toast.error("please enter name and email!");

        try {
            let data = null;
            if(type === 'create') 
                data = await axios.post('/', inputs);
            
            if(type === 'update') 
                data = await axios.put(`/user/${userId}/edit`, inputs);

            const { status , message } = data.data;
            if (status == 1) {
                toast.success(message);
                navigate('/');
            } else {
                toast.error(message);
            }
        } catch (err) {
            toast.error(err);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <label>Name:</label>
            <input type="text" ref={nameInputRef} />
            <br /><br />
            <label>Email:</label>
            <input type="email" ref={emailInputRef} />
            <br /><br />
            <label>Mobile:</label>
            <input type="number" ref={mobileInputRef} maxLength="10" minLength="10"/>
            <br /><br />
            <button>{type === 'create' ? 'Save' : 'Update'}</button>
        </form>
    );
}