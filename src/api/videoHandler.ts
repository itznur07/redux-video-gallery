import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    let queryString = ""

    if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`).join("&")
    }

    if (search !== "") {
      queryString += `&q=${search}`
    }

    const response = await fetch(`http://localhost:9000/videos/?${queryString}`)
    const data = await response.json()

    return data
  },
)
