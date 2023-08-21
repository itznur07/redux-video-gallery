import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchVideos } from "../../api/videoHandler"
import Loading from "../ui/Loading"
import VideoGridItem from "./VideoGridItem"

const VideGrid: React.FC = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector((state) => state.videos)
  const { tags: tags, search: search } = useSelector((state) => state.filters)

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }))
  }, [dispatch, tags, search])

  let content

  if (isLoading) content = <Loading />
  if (isError) content = <div className="col-span-12">some error happened</div>
  if (!isLoading && !isError && data.length > 0)
    content = data?.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ))

  if (data.length > 0) {
    content
  } else {
    content = <div className="text-center">Content is Not Founded!</div>
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  )
}
export default VideGrid
