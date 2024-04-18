import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";




function Timeline({props1, props2}) {
  return (
    <div name="TimeLine">
    <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">Experience History</h2>
    </div>
    <div className="mx-16">
    <VerticalTimeline>
      {props1.map((element) => {

        return (
          <VerticalTimelineElement
            key={element.sequence}
            date={element.endDate}
            dateClassName="date"

          >
            <h3 className="vertical-timeline-element-title font-bold">
              {element.jobTitle}
            </h3>
            <h5 className="vertical-timeline-element-subtitle text-blue-900">
              {element.jobLocation}
            </h5>
            <p className="text-purple-800" id="description">{element.summary}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
    </div>

    <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">Education History</h2>
    </div>
    <div className="mx-16">
    <VerticalTimeline>
      {props2.map((element) => {

        return (
          <VerticalTimelineElement
            key={element.sequence}
            date={element.endDate}
            dateClassName="date"

          >
            <h3 className="vertical-timeline-element-title font-bold">
              {element.jobTitle}
            </h3>
            <h5 className="vertical-timeline-element-subtitle text-blue-800">
              {element.jobLocation}
            </h5>
            <p className="text-purple-800" id="description">{element.summary}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
    </div>
  </div>
  )
}

export default Timeline;