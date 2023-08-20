import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchRelatedVideo = createAsyncThunk(
  "video/fetchRelatedVideos",

  async ({ tags, id }) => {
    const queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id} &_limit=5`
        : `id_ne=${id} &_limit=5`

    const response = await fetch(`http://localhost:9000/videos?${queryString}`)
    const data = await response.json()

    return data
  },
)
