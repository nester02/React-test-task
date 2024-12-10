import { createSlice } from "@reduxjs/toolkit";
import countriesData from '../../data/countries.json';
import { v4 as uuidv4 } from 'uuid';

const mappedCountries = countriesData.map((country) => ({
    ...country,
    id: uuidv4(),
}));

const initialState = {
    countries: mappedCountries,
};

const countriesSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {}
});

export default countriesSlice.reducer;