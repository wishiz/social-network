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
    {
      id: 1,
      name: 'Dima',
      img:
        'https://res06.noxgroup.com/noxinfluencer/youtube/avatar/2c7e5d8058fb557b03fde13ae8358142.png',
    },
    {
      id: 2,
      name: 'Vasya',
      img:
        'https://i1.sndcdn.com/artworks-ipQ4yMSsnoiJy7gw-F4yzgw-t3000x3000.jpg',
    },
    {
      id: 3,
      name: 'Masha',
      img:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGSzOjOedm3uA/profile-displayphoto-shrink_200_200/0/1533187933250?e=1622678400&v=beta&t=n624_H7OxBiHVcc31KPA1opyiMdMvIoOUfbqgqYX9rY',
    },
    {
      id: 4,
      name: 'Anya',
      img:
        'https://www.deadline.ru/data/cache/2020oct/14/16/1628471_34515-650x0.jpg',
    },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    case SEND_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: text }],
        newMessageText: '',
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
});

export default dialogsReducer;
