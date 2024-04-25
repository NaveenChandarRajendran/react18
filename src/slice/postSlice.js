import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    enities: [],
    loading: false
}

//posts/getPosts/pending or /posts/getPosts/fullfiled

export const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.enities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }
})


const postReducer = postSlice.reducer
export default postReducer;
