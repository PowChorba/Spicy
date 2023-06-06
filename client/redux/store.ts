import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { clientReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        clientReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch