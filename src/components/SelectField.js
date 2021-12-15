import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleCategoryChange, handleTypeChange, handleDifficultyChange}  from '../redux/actions'
const SelectField = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState(" ");

    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Dififculty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    };
    return (
        <div className="flex flex-col">
            <label className="font-medium text-md py-2">{label}</label>
            <select className="border border-gray-300 outline-none pl-3 pr-4 py-1 rounded-md" value={value} onChange={handleChange}>
                {options.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
