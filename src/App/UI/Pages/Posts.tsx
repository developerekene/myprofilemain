import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Posts: React.FunctionComponent = () => {
    const location = useLocation();
    const { post } = location.state || {}; // Retrieve the passed post object
    const { articleId } = useParams(); // Dynamic route parameter for the article ID

    return (
        <div>
            <Navbar />
            <h1>Article Details</h1>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Author: {post.author.name}</p>
                    <p>Article ID: {articleId}</p>
                </div>
            ) : (
                <p>No article details available</p>
            )}
        </div>
    );
};

export default Posts;