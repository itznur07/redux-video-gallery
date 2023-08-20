import { configureStore } from "@reduxjs/toolkit"
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice"
import tagsSlice from "../features/tags/tagsSlice"
import singleVideoSlice from "../features/video/singleVideoSlice"
import videoSlice from "../features/videos/videoSlice"

export const store = configureStore({
  reducer: {
    videos: videoSlice,
    video: singleVideoSlice,
    tags: tagsSlice,
    relatedVideos: relatedVideosSlice,
  },
})
