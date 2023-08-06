import React from 'react';
import {VerticalTimeline ,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EqualizerIcon from "@mui/icons-material/Equalizer";

const Experience = () => {
  return (
    <div className="experience">
      {/* School */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Completed 10th and PUC in CS from NBEMS School,Kerala
          </h3>
          <h4>High School </h4>
          <p>10th- CGPA-8.0</p>
          <p>PUC- CGPA-7.38</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Collage */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma In Mechatronics from NTTF , Kerala
          </h3>
          <h4>Collage</h4>
          <p>CGPA-8.35</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* beasant */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<EqualizerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Development - MERN Stack
          </h3>
          <h4>Besant Tehnologies,Indiranagar - Bangalore</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* work hitachi */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019-2021"
          iconStyle={{ background: "#B1CE05", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hitachi Astemo FIE , Bangalore
          </h3>
          <h4>Junior Enginner Trainee</h4>
          <p>
            Handled Process establishment of fuel injection system for 2
            wheelers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* cyfuture */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023"
          iconStyle={{ background: "#B1CE05", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cyfuture Pvt Ltd , Bangalore
          </h3>
          <h4>CCE</h4>
          <p>
            Conduct research to discover innovative ways to improve clients'
            operations
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* burger king */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-Present"
          iconStyle={{ background: "#B1CE05", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Burger King - Indiranagar , Bangalore
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Team Member</h4>
          <p>
            Supervised and led a team of 5 in a fast-paced restaurant, ensuring
            smooth operations and efficient service delivery.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience