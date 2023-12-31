import { createSlice } from "@reduxjs/toolkit"
import { fetchVideos } from "../../api/videoHandler"

/** <!-- InitialState Define explicit type --> */
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: "",
}

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.isError = false
    })
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false
      state.data = []
      state.isError = true
      state.error = ""
    })
  },
})

export default videoSlice.reducer
