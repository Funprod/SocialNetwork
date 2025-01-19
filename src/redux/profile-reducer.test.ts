import { addPostActionCreator, deletePost, profileReducer } from './profile-reducer';

it('length of posts should be incremented', () => {
    const action = addPostActionCreator('hello');
    const state = {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 15 },
            { id: 2, message: 'it`s my first post', likeCount: 20 },
            { id: 3, message: 'it`s my second post', likeCount: 20 },
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: { large: '', small: '' },
            userId: 1,
        },
        status: '',
        isLoading: false,
    };

    const newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
});
it('message of new posts should be correct', () => {
    const action = addPostActionCreator('hello');
    const state = {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 15 },
            { id: 2, message: 'it`s my first post', likeCount: 20 },
            { id: 3, message: 'it`s my second post', likeCount: 20 },
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: { large: '', small: '' },
            userId: 1,
        },
        status: '',
        isLoading: false,
    };

    const newState = profileReducer(state, action);

    expect(newState.postData[3].message).toBe('hello');
});
it('after deleting length of message should be decrement', () => {
    const action = deletePost(1);
    const state = {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 15 },
            { id: 2, message: 'it`s my first post', likeCount: 20 },
            { id: 3, message: 'it`s my second post', likeCount: 20 },
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: { large: '', small: '' },
            userId: 1,
        },
        status: '',
        isLoading: false,
    };

    const newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2);
});
it('after deleting length should be decrement if id is incorrect', () => {
    const action = deletePost(1000);
    const state = {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 15 },
            { id: 2, message: 'it`s my first post', likeCount: 20 },
            { id: 3, message: 'it`s my second post', likeCount: 20 },
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: { large: '', small: '' },
            userId: 1,
        },
        status: '',
        isLoading: false,
    };

    const newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(3);
});
