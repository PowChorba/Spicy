import { CategoryFormat, PornstarFormat, VideoFormat } from "@/types"
import {createReducer} from "@reduxjs/toolkit"
import { INICIO_ACTORES, INICIO_CATEGORIAS, INICIO_VIDEOS } from "./actions"

interface Reducer {
    inicioVideos: VideoFormat[]
    inicioCategory: CategoryFormat[]
    inicioActores: PornstarFormat[]
}

const initialState: Reducer = {
    inicioVideos: [],
    inicioCategory: [],
    inicioActores: []
}

export const clientReducer = createReducer(initialState, (callback) => {
    callback.addCase(INICIO_VIDEOS.fulfilled, (state,action) => {
        state.inicioVideos = action.payload
    })
    callback.addCase(INICIO_ACTORES.fulfilled, (state,action) => {
        state.inicioActores = action.payload
    })
    callback.addCase(INICIO_CATEGORIAS.fulfilled, (state,action) => {
        state.inicioCategory = action.payload
    })
})