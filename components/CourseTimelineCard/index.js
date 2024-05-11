// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const TagsList = props => {
  const {name} = props
  return (
    <li className="tag-list">
      <p>{name}</p>
    </li>
  )
}

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details
  console.log(details)
  return (
    <div className="course-container">
      <div className="header-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <TagsList key={tag.id} name={tag.name} />
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
