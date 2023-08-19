import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await fetch("http://localhost:9000/videos")
  const data = await response.json()

  return data
})
