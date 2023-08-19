import { createSlice } from "@reduxjs/toolkit"
import { fetchTags } from "../../api/tagHandler"

/** <!-- InitialState Define explicit type --> */
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: "",
}

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.isError = false
    })
    builder.addCase(fetchTags.rejected, (state, action) => {
      state.isLoading = false
      state.data = []
      state.isError = true
      state.error = ""
    })
  },
})

export default tagSlice.reducer
