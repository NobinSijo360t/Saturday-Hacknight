import PropTypes from "prop-types";
import styles from "./event-card-event3.module.css";

const EventCardEvent3 = ({
  className = "",
  events2FFyisG14rmN456UyOs,
  prop,
  chroma,
  chromaIsAnOpenSourceEmbed,
  databaseThatGivesTheFaste,
  pythonOrJavaScriptLLMApps,
}) => {
  return (
    <div className={[styles.eventCardevent14, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.backgroundParent}>
          <div className={styles.background1} />
          <img
            className={styles.events2ffyisg14rmn456uyosqqmIcon}
            loading="lazy"
            alt=""
            src={events2FFyisG14rmN456UyOs}
          />
          <div className={styles.projectIconContainer}>
            <div className={styles.projectStatusElements}>
              <div className={styles.projectCardDetails}>
                <img
                  className={styles.checkmarkIcon}
                  alt=""
                  src="/checkmark-6@2x.png"
                />
              </div>
              <div className={styles.completedProjects}>
                <span className={styles.span}>{prop}</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventCardevent14Inner}>
        <div className={styles.chromaParent}>
          <b className={styles.chroma}>{chroma}</b>
          <div className={styles.frameWrapper}>
            <div className={styles.eventCardbuttondefaultpropParent}>
              <div className={styles.eventCardbuttondefaultprop}>
                <div className={styles.eventCardbuttondefaultpropInner}>
                  <div className={styles.groupOfProjectsParent}>
                    <img
                      className={styles.groupOfProjects}
                      alt=""
                      src="/group-of-projects-6@2x.png"
                    />
                    <div className={styles.seeProjects}>See Projects</div>
                  </div>
                </div>
              </div>
              <div className={styles.eventCardbuttondefaultprop1}>
                <div className={styles.eventCardbuttondefaultpropChild}>
                  <div className={styles.moreParent}>
                    <img
                      className={styles.moreIcon}
                      alt=""
                      src="/more-6@2x.png"
                    />
                    <div className={styles.moreInfo}>More Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chromaIsAnContainer}>
        <p className={styles.chromaIsAn}>{chromaIsAnOpenSourceEmbed}</p>
        <p className={styles.databaseThatGives}>{databaseThatGivesTheFaste}</p>
        <p className={styles.pythonOrJavascript}>{pythonOrJavaScriptLLMApps}</p>
      </div>
    </div>
  );
};

EventCardEvent3.propTypes = {
  className: PropTypes.string,
  events2FFyisG14rmN456UyOs: PropTypes.string,
  prop: PropTypes.string,
  chroma: PropTypes.string,
  chromaIsAnOpenSourceEmbed: PropTypes.string,
  databaseThatGivesTheFaste: PropTypes.string,
  pythonOrJavaScriptLLMApps: PropTypes.string,
};

export default EventCardEvent3;
