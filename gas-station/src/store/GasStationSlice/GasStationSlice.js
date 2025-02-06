import { createSlice } from "@reduxjs/toolkit"

const GasStationSlice = createSlice({
    name: 'gasStation',
    initialState: {
        gasStation: []
    },
    reducers: {
        addGasStation(state, {payload})  {
            state.gasStation.push(payload)
        },
       
    }
})

export const GasStationReducer = GasStationSlice.reducer
export const {addGasStation} = GasStationSlice.actions
export const selectGasStation = (state) => state.gasStation;