import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    };
    return (
        <div className="py-2">
            <label className="font-medium text-md py-2">Amount of Questions</label>
            <input className="border border-gray-300  w-full rounded-md outline-none pl-3 pr-4 py-1 placeholder-gray-400" onChange={handleChange} label="Amount of Questions" type="number" />
        </div>
    );
};

export default TextFieldComp;
