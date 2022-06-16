import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const history = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <h2>{props.post.id}. {props.post.title}</h2>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => history(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => {props.remove(props.post)}}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;