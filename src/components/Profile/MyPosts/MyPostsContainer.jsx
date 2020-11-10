import React from 'react';
import MyPosts from './MyPosts';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';

const MyPostsContainer = ({ store }) => {
    let posts = store.getState().profilePage.posts;
    let newPostText = store.getState().profilePage.newPostText;

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    }
    
    let updateNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={posts} newPostText={newPostText} />
}

export default MyPostsContainer;