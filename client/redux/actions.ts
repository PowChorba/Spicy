import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const INICIO_VIDEOS = createAsyncThunk("INICIO_VIDEOS",async () => {
  try {
    const apiData = await axios.get('http://localhost:3001/inicio/videos')
    return apiData.data
  } catch (error) {
    console.log(error)
  }  
})

export const INICIO_CATEGORIAS = createAsyncThunk("INICIO_CATEGORIAS",async () => {
    try {
      const apiData = await axios.get('http://localhost:3001/inicio/categorias')
      return apiData.data
    } catch (error) {
      console.log(error)
    }  
  })

  export const INICIO_ACTORES = createAsyncThunk("INICIO_ACTORES",async () => {
    try {
      const apiData = await axios.get('http://localhost:3001/inicio/actores')
      return apiData.data
    } catch (error) {
      console.log(error)
    }  
  })