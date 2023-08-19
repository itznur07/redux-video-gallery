import { useSelector } from "react-redux"
import LikeUnlike from "./LikeUnlike"

export default function VideoDescription() {
  const { data } = useSelector((state) => state.video)

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {data.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          {data.date}
        </h2>
        <LikeUnlike />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {data.description}
      </div>
    </div>
  )
}
