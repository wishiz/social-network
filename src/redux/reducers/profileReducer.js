const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likes: 2 },
        { id: 2, message: 'My first post here.', likes: 7 },
        { id: 3, message: 'Blah blah', likes: 5 },
        { id: 4, message: 'Hey-ho, lets go', likes: 15 },
        { id: 5, message: 'Hello world', likes: 47 },
        { id: 6, message: 'Cmon everyone', likes: 65 },
        { id: 7, message: 'Thats me', likes: 147 },
        { id: 8, message: 'Thank you for feedback', likes: 200 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 9, message: state.newPostText, likes: 0 }],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
});

export default profileReducer;