const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "What's up?" },
        { id: 3, message: 'Come with us tonigh. 7PM' },
        { id: 4, message: 'I will be there, bro' },
        { id: 5, message: 'See ya.' },
    ],
    dialogs: [
        { id: 1, name: 'Dima', img: 'https://res06.noxgroup.com/noxinfluencer/youtube/avatar/2c7e5d8058fb557b03fde13ae8358142.png' },
        { id: 2, name: 'Vasya', img: 'https://i1.sndcdn.com/artworks-ipQ4yMSsnoiJy7gw-F4yzgw-t3000x3000.jpg' },
        { id: 3, name: 'Masha', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGSzOjOedm3uA/profile-displayphoto-shrink_800_800/0?e=1609977600&v=beta&t=k2wdK-ltX9NCfw3dppuWXpkDv7dyYWrpw5NZtyK6TZw' },
        { id: 4, name: 'Lida', img: 'https://media-exp1.licdn.com/dms/image/C5603AQFx7qq1v6TaHw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=TLvHi-R1LXz3c2jS7vvhgln0ST25BzCutQ93yDSZR9s' }
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
});


export default dialogsReducer;