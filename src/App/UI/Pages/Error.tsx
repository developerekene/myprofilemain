import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/ErrorPage.css"

const ErrorPage: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <div className='error-parent'>
            <div>
                <h2 className='header'>Wrong Path</h2>
                <p className='text'>The page you are looking for is not avaliable</p>
                <button onClick={() => navigate("/")} className="btn">
                    Back Home
                </button>
            </div>
        </div>
    )
}

export default ErrorPage