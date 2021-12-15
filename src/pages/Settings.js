import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const {response, error, loading } = useAxios({ url: "/api_category.php"})
    const history = useNavigate()

    if ( loading ) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (error ) {
        return (
            <div>
                Something went wrong
            </div>
        )
    }

    const difficultyOptions = [
        {id: "easy", name:"Easy"},
        {id: "medium", name:"Medium"},
        {id: "hard", name:"Hard"},
    ]

    const typeOptions = [
        { id: "multiple", name: "Mutiple Choice"},
        { id: "boolean", name: "True/False"},
    ]
    const  handleSubmit = (e) => {
        e.preventDefault()
        history("/questions")
    }
    return (
       <form style={{ marginTop: '100px', justifyContent: 'center'}} onSubmit={handleSubmit}>
           <SelectField options={response.trivia_categories} label="Category"/>
           <SelectField options={difficultyOptions} label="Difficulty"/>
           <SelectField options={typeOptions} label="Type"/>
           <TextFieldComp/> 
           <button>Get Started</button>
       </form>
    )
}

export default Settings
