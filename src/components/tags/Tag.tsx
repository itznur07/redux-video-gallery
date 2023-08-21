import { useDispatch, useSelector } from "react-redux"
import { removeTag, selectTag } from "../../features/filters/filterSlice"

export default function Tag({ tag }) {
  const dispatch = useDispatch()
  const { tags: tags } = useSelector((state) => state.filters)

  const isSelected = tags.includes(tag.title) ? true : false

  const handleSelect = () => {
    if (isSelected) {
      dispatch(removeTag(tag.title))
    } else {
      tags.length >= 5
        ? alert("selected disallowed! your'e select only 5 tags")
        : dispatch(selectTag(tag.title))
    }
  }

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

  return (
    <div onClick={handleSelect} className={style}>
      {tag.title}
    </div>
  )
}
