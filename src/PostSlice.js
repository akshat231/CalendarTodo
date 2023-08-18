import { createSlice } from "@reduxjs/toolkit";

const PostSlice=createSlice({
    name:'Posts',
    initialState:{
        task:[]
    },
    reducers:{
        fetchposts:(state,action)=>{
            const storeposts=[];
            const { posts, lengthofpost } = action.payload;
            for(var i=0;i<lengthofpost;i++)
            {
                storeposts.push(posts[i]);
            }
            state.task=storeposts;
        },
        addposts:(state,action)=>{
            state.task.push(action.payload);
        }
    }
})

export const {addposts}=PostSlice.actions
export const {fetchposts}=PostSlice.actions
export default PostSlice.reducer