import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await fetch("http://localhost:9000/tags")
  const data = await response.json()

  return data
})
