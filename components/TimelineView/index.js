// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard/index'
import CourseTimelineCard from '../CourseTimelineCard/index'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList
  console.log(items)
  return (
    <div className="bg-container">
      <div className="inside-container">
        <h1 className="head1">
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL" items={items}>
            {items.map(it => {
              if (it.categoryId === 'COURSE') {
                return (
                  <div>
                    <CourseTimelineCard key={it.id} details={it} />
                  </div>
                )
              }
              return (
                <div>
                  <ProjectTimelineCard key={it.id} details={it} />
                </div>
              )
            })}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView
