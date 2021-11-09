import React          from 'react'
import Experience     from '../Experiences-data'
import TimelineItem   from '../Timeline-item'


const Timeline = () => Experience.length > 0 && (
    <div className="timeline-wraper" id="Experience">
        <h1 className="experience-title">Experience</h1>
        <div className="timeline-container">
        {Experience.map((data, i) => (
            <TimelineItem Experience={data} key={i}/>
        ))}
        </div>
    </div>
)



export default Timeline;