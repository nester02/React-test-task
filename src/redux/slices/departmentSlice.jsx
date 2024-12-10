import { createSlice } from "@reduxjs/toolkit";
import departmentsData from '../../data/departments.json';
import { v4 as uuidv4 } from 'uuid';

const mappedDepartments = departmentsData.map((department) => ({
    ...department,
    id: uuidv4(),
}));

const initialState = {
    departments: mappedDepartments,
};

const departmentsSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {}
});

export default departmentsSlice.reducer;