import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTags } from "../../api/tagHandler"
import Loading from "../ui/Loading"
import Tag from "./Tag"

export default function Tags() {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector((state) => state.tags)

  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])

  let content

  if (isLoading) content = <Loading />
  if (isError) content = <div className="col-span-12">some error happened</div>
  if (!isLoading && !isError && data.length > 0)
    content = data?.map((tag) => <Tag key={tag.id} tag={tag} />)

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  )
}
