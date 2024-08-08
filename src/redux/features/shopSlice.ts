import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    shops: [],
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
});

export default shopSlice.reducer;