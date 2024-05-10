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
        <h1 className="head1">MY JOURNEY OF</h1>
        <h1 className="head2">CCBP 4.0</h1>
        <div>
          {items.map(it => {
            if (it.categoryId === 'COURSE') {
              return (
                <div>
                  <Chrono mode="VERTICAL" items={items}>
                    <CourseTimelineCard key={it.id} details={it} />
                  </Chrono>
                </div>
              )
            }
            return (
              <div>
                <Chrono mode="VERTICAL" items={items}>
                  <ProjectTimelineCard key={it.id} details={it} />
                </Chrono>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default TimelineView
