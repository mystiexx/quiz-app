import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
    const { score } = useSelector((state) => state);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(50))
        navigate('/')
    }
    return (
        <div>
            Final Score {score}
            <button onClick={handleBackToSettings}>Back to Home</button>
        </div>
    );
};

export default FinalScreen;
