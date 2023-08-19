import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchVideo } from "../../api/singleVideoHandler"

export default function Player() {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.video)
  console.log(data)
  useEffect(() => {
    dispatch(fetchVideo(videoId))
  }, [dispatch])

  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={data.link}
      title="Some video title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}
