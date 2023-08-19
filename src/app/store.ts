import { configureStore } from "@reduxjs/toolkit"
import tagsSlice from "../features/tags/tagsSlice"
import videoSlice from "../features/videos/videoSlice"

export const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
  },
})
