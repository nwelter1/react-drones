import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        name: 'Nates Drone',
        price: '$750',
        description: 'This is a basic drone',
        camera_quality: '8k HD',
        flight_time: '400 hours',
        max_speed: '150mph',
        dimensions:'255 x 312 127mm',
        weight: 'Approx 795g',
        cost_of_prod: 450.00,
        series: 'DJI FPV Series'
    },
    reducers:{
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload}
    }
})

//export reducer

export const reducer = rootSlice.reducer
export const { chooseName, choosePrice } = rootSlice.actions