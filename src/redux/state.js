const data = {
    profilePage: {
        postsData: [
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
        id: data.profilePage.postsData.length + 1,
        text: postText,
        likesCount: 0,
        imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
    }

    data.profilePage.postsData.push(newPost)
    console.log(data.profilePage.postsData);
}


export { addPost };


export default data;
