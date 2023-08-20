import { createSlice } from "@reduxjs/toolkit"
import { fetchRelatedVideo } from "../../api/relatedVideosHandler"

/** <!-- InitialState Define explicit type --> */
const initialState = {
  relatedVideo: [],
  isLoading: false,
  isError: false,
  error: "",
}

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideo.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchRelatedVideo.fulfilled, (state, action) => {
      state.isLoading = false
      state.relatedVideo = action.payload
      state.isError = false
    })
    builder.addCase(fetchRelatedVideo.rejected, (state, action) => {
      state.isLoading = false
      state.relatedVideo = []
      state.isError = true
      state.error = ""
    })
  },
})

export default relatedVideosSlice.reducer
