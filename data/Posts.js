import { USERS } from './User';

export const POSTS = [
    {
        image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        user: USERS[0].user,
        likes: 9999,
        profilePicture: USERS[0].image,
        captions: 'Dekh kya rha hai Lawde... Apna kaam kr 😏😏😏',
        comments: [
            {
                user: 'Bawli Gand',
                comment: 'Nice Pic Dear....',
            },
            {
                user: 'Shubhand Randi',
                comment: 'Awesome Pic...',
            },
        ],
    },
    {
        image: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        user: USERS[0].user,
        likes: 9999,
        profilePicture: USERS[0].image,
        captions: 'Train to Hogwarts',
        comments: [
            {
                user: 'Bawli Gand',
                comment: 'Nice Pic Dear....',
            },
            {
                user: 'Shubhand Randi',
                comment: 'Awesome Pic...',
            },
        ],
    },
]