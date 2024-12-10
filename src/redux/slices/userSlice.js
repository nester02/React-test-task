import { createSlice } from "@reduxjs/toolkit";
import usersData from '../../data/users.json';
import { v4 as uuidv4 } from 'uuid';

const mappedUsers = usersData.map((user) => ({
    ...user,
    id: uuidv4(),
}));

const initialState = {
    users: mappedUsers,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return {...state, users: [...state.users, action.payload]}
        },
        deleteUser:(state, action)=>{
            return {...state, users:state.users.filter(user=>user.id!==action.payload.id)}
        },
        updateUser: (state, action) => {
            const { id, name, department, country, status } = action.payload;

            state.users = state.users.map((user) =>
                user.id === id
                    ? { ...user, name, department, country, status }
                    : user
            );

            console.log("Updated Users:", state.users);
        }

    }
})

export const {deleteUser,addUser, updateUser } = userSlice.actions

export default userSlice.reducer