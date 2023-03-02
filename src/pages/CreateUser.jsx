import { useRef, useEffect } from 'react';

import UerForm from '../components/UserForm';
import { generatePhoneNumber } from '../helpers/util';

export default function CreateUser() {
    const nameInput = useRef();
    const emailInput = useRef();
    const mobileInput = useRef();

    useEffect(() => {
        if (mobileInput.current) mobileInput.current.value = generatePhoneNumber();
    }, [mobileInput.current]);

    return (
        <>
            <h1>Create User</h1>
            <UerForm
                type="create" 
                nameInputRef={nameInput}
                emailInputRef={emailInput}
                mobileInputRef={mobileInput}
            />
        </>
       
    );
}