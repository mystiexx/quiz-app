import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
    const { score } = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        navigate("/");
    };
    return (
        <div>
            <div className="items-center justify-center flex flex-col py-2">
                <p className="font-medium text-4xl"> Final Score</p> 
                <p className="font-medium text-5xl">{score}</p>{" "}
                <button  className="bg-indigo-500 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white" onClick={handleBackToSettings}>Back to Home</button>
            </div>
        </div>
    );
};

export default FinalScreen;
