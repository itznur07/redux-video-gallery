import { createSlice } from "@reduxjs/toolkit"
import { fetchVideo } from "../../api/singleVideoHandler"

/** <!-- InitialState Define explicit type --> */
const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  error: "",
}

const singleVideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},

  /** <!-- Extra reducer function --> */
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.isError = false
    })
    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.isLoading = false
      state.data = []
      state.isError = true
      state.error = ""
    })
  },
})

export default singleVideoSlice.reducer
