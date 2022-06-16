import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import {isCompositeComponent} from "react-dom/test-utils";

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async id => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async id => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
        console.log(comments)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsByPostId(params.id)
    }, [])

    return (
        <div>
            <h1>Пост № {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <h2>{post.title}</h2>
                    <div>{post.body}</div>
                </div>
            }
            <h3>Комментарии</h3>
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    {comments.map(com =>
                        <div key={com.id}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Post;