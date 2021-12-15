import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    };
    return (
        <div>
            <input onChange={handleChange} label="Amount of Questions" type="number" />
        </div>
    );
};

export default TextFieldComp;
