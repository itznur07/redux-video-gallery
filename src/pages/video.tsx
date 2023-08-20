import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchVideo } from "../api/singleVideoHandler"
import VideoPlayer from "../components/description/Player"
import VideoDescription from "../components/description/VideoDescription"
import RelatedVideoList from "../components/list/RelatedVideoList"

const Video: React.FC = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.video)
  const { videoId } = useParams()

  useEffect(() => {
    dispatch(fetchVideo(videoId))
  }, [dispatch, videoId])

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer video={data} />

              <VideoDescription />
            </div>

            <RelatedVideoList video={data} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
