import EventCardEvent3 from "./event-card-event3";
import EventCardEvent2 from "./event-card-event2";
import Background1 from "./background1";
import ProjectRow from "./project-row";
import PropTypes from "prop-types";
import styles from "./event-card-list-container3.module.css";

const EventCardListContainer3 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.container1}>
        <EventCardEvent3
          events2FFyisG14rmN456UyOs="/events2ffyisg14rmn456uyosqqm2fimgblackpng@2x.png"
          prop="7  "
          chroma="Chroma"
          chromaIsAnOpenSourceEmbed="Chroma is an open-source embedding"
          databaseThatGivesTheFaste="database that gives the fastest way to build"
          pythonOrJavaScriptLLMApps="Python or JavaScript LLM apps with memory"
        />
        <EventCardEvent2 />
        <div className={styles.eventCardevent16}>
          <Background1
            events2FuLHD8KiVHHzjhiYrU="/events2fgd078jd14optkuyffb9e2fpynecone20websitepng@2x.png"
            prop="7  "
          />
          <ProjectRow openCV="PyneCone" />
          <div className={styles.pyneconeIsAContainer}>
            <p className={styles.pyneconeIsA}>
              Pynecone is a full-stack framework for
            </p>
            <p className={styles.buildingAndDeploying}>
              building and deploying web apps using Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCardListContainer3.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer3;
