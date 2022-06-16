import React, {useEffect, useMemo, useRef, useState} from 'react';
import '../../styles/App.css';
import PostList from "../PostList";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount, getPagesArray} from "../../utils/pages";
// import Pagination from "../UI/pagination/Pagination";
import {useObserver} from "../../hooks/useObserver";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
    const [modal, setModalVis] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        setTotalPages(getPageCount(response.headers['x-total-count'], limit))
    })

    const changePage = page => {
        setPage(page)
        fetchPosts()
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVis(false)
    }

    useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPosts()
    }, [page])

    const removePost = (deletedPost) => {
        setPosts(posts.filter(p => p.id !== deletedPost.id))
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <MyButton onClick={() => setModalVis(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModalVis}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка: {postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }
            {/*<Pagination*/}
            {/*    page={page}*/}
            {/*    totalPages={totalPages}*/}
            {/*    changePage={changePage}*/}
            {/*/>*/}
        </div>
    );
}

export default Posts;
