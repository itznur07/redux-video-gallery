import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "../features/filters/filterSlice"
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice"
import tagsReducer from "../features/tags/tagsSlice"
import singleVideoReducer from "../features/video/singleVideoSlice"
import videosReducer from "../features/videos/videoSlice"

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: singleVideoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filters: filterReducer,
  },
})
