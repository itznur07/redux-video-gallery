import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRelatedVideo } from "../../api/relatedVideosHandler"
import RelatedVideoListItem from "./RelatedVideoListItem"

export default function RelatedVideoList({ video }) {
  const { tags, id } = video

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags, id }))
  }, [dispatch, tags, id])

  const { relatedVideo, isLoading, isError } = useSelector(
    (state) => state.relatedVideos,
  )
  let content

  // if (isLoading) content = <Loading />
  // if (isError) content = <div className="col-span-12">some error happened</div>
  // if (!isLoading && !isError && data.length > 0)
  //   content = relatedVideo?.map((video) => (
  //     <RelatedVideoListItem key={video.id} video={video} />
  //   ))

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideo.map((video) => (
        <RelatedVideoListItem key={video.id} video={video} />
      ))}
    </div>
  )
}
