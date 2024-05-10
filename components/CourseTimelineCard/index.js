// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {title, courseTitle, description, duration, tagsList} = details
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
    </div>
  )
}
export default CourseTimelineCard
