import PropTypes from "prop-types";
import styles from "./event-card-event2.module.css";

const EventCardEvent2 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardevent15, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.backgroundParent}>
          <div className={styles.background1} />
          <img
            className={styles.events2fdit71j8ipw4xchavhwlpIcon}
            loading="lazy"
            alt=""
            src="/events2fdit71j8ipw4xchavhwlp2fimagepng@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.checkmarkWrapper}>
                <img
                  className={styles.checkmarkIcon}
                  alt=""
                  src="/checkmark-6@2x.png"
                />
              </div>
              <div className={styles.completedProjects}>
                <span className={styles.span}>{`10  `}</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventCardevent15Inner}>
        <div className={styles.figmaParent}>
          <b className={styles.figma}>Figma</b>
          <div className={styles.frameContainer}>
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
      <div className={styles.figmaPluginsAllowsContainer}>
        <p className={styles.figmaPluginsAllows}>
          Figma Plugins allows users to extend the
        </p>
        <p className={styles.functionalityOfFigmas}>
          functionality of Figma's editors
        </p>
      </div>
    </div>
  );
};

EventCardEvent2.propTypes = {
  className: PropTypes.string,
};

export default EventCardEvent2;
