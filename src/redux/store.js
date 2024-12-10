import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import departmentSlice from "./slices/departmentSlice";
import countrySlice from "./slices/countrySlice";
import statusSlice from "./slices/statusSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        department: departmentSlice,
        country: countrySlice,
        status: statusSlice,
    },
})

export default store;