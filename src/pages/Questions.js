import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { handleScoreChange } from "../redux/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
    const { question_category, question_difficulty, question_type, amount_of_questions, score } =
        useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let apiUrl = `/api.php?amount=${amount_of_questions}`;

    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&ype=${question_type}`);
    }

    const { response, loading } = useAxios({ url: apiUrl });
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response, questionIndex]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate("/score");
        }
    };

    return (
        <div>
            <div className="block h-screen items-center justify-center p-4 md:flex">
            <div className="bg-white rounded-md flex flex-col py-2 items-center max-w-screen-sm p-4 space-y-8 shadow-md">
                <h4 className="font-medium text-3xl">Question {questionIndex + 1}</h4>
                <p className="text-md">{decode(response.results[questionIndex].question)}</p>

                {options.map((data, id) => (
                    <button
                        className="bg-indigo-500 font-medium inline-flex px-3 py-1 rounded-md text-white"
                        key={id}
                        onClick={handleClickAnswer}
                    >
                        {decode(data)}
                    </button>
                ))}

                <p>
                    Score: {score} / {response.results.length}{" "}
                </p>
            </div>
            </div>
        </div>
    );
};

export default Questions;
