import profileReducer from '../reducers/profileReducer';
import dialogsReducer from '../reducers/dialogsReducer';
import sidebarReducer from '../reducers/sidebarReducer';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: "What's up?" },
                { id: 3, message: 'Come with us tonigh. 7PM' },
                { id: 4, message: 'I will be there, bro' },
                { id: 5, message: 'See ya.' },
            ],
            newMessageText: '',
            dialogs: [
                { id: 1, name: 'Dima', img: 'https://res06.noxgroup.com/noxinfluencer/youtube/avatar/2c7e5d8058fb557b03fde13ae8358142.png' },
                { id: 2, name: 'Vasya', img: 'https://i1.sndcdn.com/artworks-ipQ4yMSsnoiJy7gw-F4yzgw-t3000x3000.jpg' },
                { id: 3, name: 'Masha', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGSzOjOedm3uA/profile-displayphoto-shrink_800_800/0?e=1609977600&v=beta&t=k2wdK-ltX9NCfw3dppuWXpkDv7dyYWrpw5NZtyK6TZw' },
                { id: 4, name: 'Lida', img: 'https://media-exp1.licdn.com/dms/image/C5603AQFx7qq1v6TaHw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=TLvHi-R1LXz3c2jS7vvhgln0ST25BzCutQ93yDSZR9s' }
            ]
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andre' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Sveta' },
            ]
        }
    },
    _callSubscriber() {
        console.log("State was changed.")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store;