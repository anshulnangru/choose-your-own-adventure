import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import LoadingStatus from "./LoadingStatus.jsx";

const API_BASE_URL="/api"

function StoryLoader()
{
    const {id}= useParams();
    const navigate=useNavigate();
    const [story,setStory]=useState(null);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    const loadStory = async (storyId) =>{
        setLoading(true);
        setError(null)

        try{
            const response= await axios.get(`${API_BASE_URL}/stories/{storyId}/complete`)
            setStory(response.Data)
        }
    }
}