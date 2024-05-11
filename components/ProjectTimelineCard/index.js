// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {imageUrl, projectTitle, duration, projectUrl, description} = details
  console.log(details)
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="head-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="durations-container">
          <AiFillCalendar />
          <p className="duration-days">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
