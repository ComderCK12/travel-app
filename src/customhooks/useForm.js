import { useState } from "react";

const useForm = (callBack, initialState) => {
    const [value, setValue] = useState(initialState);

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setValue(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callBack(value);
    };

    return { onChange, onSubmit, value };  // Correctly return 'value' here
};

export default useForm;
