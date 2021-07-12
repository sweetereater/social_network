import { rerenderEntireTree } from "./render";

const data = {
    profilePage: {
        posts: [
            {
                id: 1,
                text: "Hello World!",
                likesCount: 5,
                imgSrc: "http://www.thaicybergames.com/dota/images/heroes/72.jpg"
            },
            {
                id: 2,
                text: "По-тихонечку едем",
                likesCount: 8,
                imgSrc: "http://www.thaicybergames.com/dota/images/heroes/101.jpg"
            },
            {
                id: 3,
                text: "React is nice",
                likesCount: 12,
                imgSrc: "http://www.thaicybergames.com/dota/images/heroes/80.jpg"
            },
            {
                id: 4,
                text: "Как Ваши дела?",
                likesCount: 6,
                imgSrc: "http://www.thaicybergames.com/dota/images/heroes/55.jpg"
            },
            {
                id: 5,
                text: "Почти 25% пути самурая, юхууу!",
                likesCount: 9,
                imgSrc: "http://www.thaicybergames.com/dota/images/heroes/43.jpg"
            },

        ],
        newPostText: "it-kamasutra :)"
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Nadya" },
            { id: 2, name: "Oleg" },
            { id: 3, name: "Artem" },
            { id: 4, name: "Elya" },
            { id: 5, name: "Ilya" },
        ],
        messages: [
            { id: 1, text: "Heyyooo!" },
            { id: 2, text: "How do you do you?" },
            { id: 3, text: "Dzzzip Dzaaap" },
            { id: 4, text: "Piu piu... piu piu piu!" },
            { id: 5, text: 'Meeeowww ~~' },
        ]
    }
};

const addPost = (postText) => {
    const randomNum = Math.floor(Math.random() * 100);
    const newPost = {
        id: data.profilePage.posts.length + 1,
        text: postText,
        likesCount: 0,
        imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
    }

    data.profilePage.posts.push(newPost);
    rerenderEntireTree(data);
}

const onPostTextChange = (e) => {
    data.profilePage.newPostText = e.currentTarget.value;
    rerenderEntireTree(data);
}

export { addPost, onPostTextChange };


export default data;
