import { createSlice } from "@reduxjs/toolkit"

/** <!-- InitialState Define explicit type --> */
const initialState = {
  tags: [],
  search: "",
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectTag: (state, action) => {
      state.tags.push(action.payload)
    },
    removeTag: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload)

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1)
      }
    },
    searched: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { selectTag, removeTag, searched } = filtersSlice.actions
export default filtersSlice.reducer
