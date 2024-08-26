import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        employeeInfo: localStorage.getItem("employeeInfo") ? JSON.parse(localStorage.getItem("employeeInfo")) : null
    },
    reducers: {
        setcredentials: (state, action) => {
            state.employeeInfo = action.payload;
            localStorage.setItem("employeeInfo", JSON.stringify(action.payload));
            const expirationtime = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
            localStorage.setItem("expiresIn", expirationtime);
        },
        logout: (state) => {
            state.employeeInfo = null;
            localStorage.setItem("employeeInfo", null);
            localStorage.setItem("expiresIn", 0);
        }
    }
})
export const { setcredentials, logout } = authSlice.actions;
export default authSlice.reducer;