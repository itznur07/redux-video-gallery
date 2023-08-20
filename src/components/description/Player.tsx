export default function Player({ video }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={video.link}
      title="Some video title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}
