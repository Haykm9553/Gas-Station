import {configureStore} from "@reduxjs/toolkit";
import { GasStationReducer } from "./GasStationSlice/GasStationSlice";

export const store = configureStore({
    reducer: {
        gasStation: GasStationReducer,
    },
});


