import React from "react";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    const history = useNavigate();

    if (loading) {
        return (
            <div>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                Loading...
            </div>
        );
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        { id: "multiple", name: "Mutiple Choice" },
        { id: "boolean", name: "True/False" },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        history("/questions");
    };
    return (
        <div className="container mx-auto">
            <div className="items-center h-screen block  justify-center p-4 md:flex">
                <div className="bg-white max-w-screen-sm p-4 space-y-8 overflow-hidden shadow-md items-center">
                    <h2 className="text-center text-4xl">Trivia Questions</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <SelectField options={response.trivia_categories} label="Category" />
                        <SelectField options={difficultyOptions} label="Difficulty" />
                        <SelectField options={typeOptions} label="Type" />
                        <TextFieldComp />
                        <button className="bg-indigo-500 p-4 rounded-lg text-white">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
