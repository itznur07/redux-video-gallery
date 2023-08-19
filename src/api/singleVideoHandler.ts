import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const response = await fetch(`http://localhost:9000/videos/${id}`)
  const data = await response.json()

  return data
})
