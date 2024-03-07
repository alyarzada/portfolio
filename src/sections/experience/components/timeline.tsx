import { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface IProps {
  data: {
    id: number;
    title: string;
    location: string;
    date: string;
    description?: Array<string>;
  }[];
}

const Timeline: FC<IProps> = ({ data }) => {
  return (
    <VerticalTimeline>
      {data.map((item) => {
        return (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "linear-gradient(153.47deg,rgba(255, 255, 255, 0) -341.94%,var(--background) 95.11%)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid hsl(var(--primary))",
            }}
            date={item.date}
            iconStyle={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              width: 20,
              height: 20,
              marginLeft: "-10px",
            }}
            icon={<></>}
          >
            <h3 className="vertical-timeline-element-title font-light mb-1">
              {item.title}
            </h3>

            <h4 className="vertical-timeline-element-subtitle font-semibold text-card-foreground mb-3">
              {item.location}
            </h4>

            {item.description ? (
              <div className="text-muted-foreground text-md">
                {item.description.map((item) => (
                  <li className="mb-1">{item}</li>
                ))}
              </div>
            ) : null}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
