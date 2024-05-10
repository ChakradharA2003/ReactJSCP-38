// Write your code here
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {imageUrl, projectTitle, duration, projectUrl, description} = details
  console.log(details)
  return (
    <div className="project-container">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
    </div>
  )
}
export default ProjectTimelineCard
