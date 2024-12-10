import { createSlice } from "@reduxjs/toolkit";
import statusesData from '../../data/statuses.json';
import { v4 as uuidv4 } from 'uuid';

const mappedStatuses = statusesData.map((status) => ({
    ...status, id: uuidv4(),
}));

const initialState = {
    statuses: mappedStatuses,
};

const statusesSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {}
});

export default statusesSlice.reducer;