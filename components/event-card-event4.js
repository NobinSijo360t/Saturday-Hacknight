import PropTypes from "prop-types";
import styles from "./event-card-event4.module.css";

const EventCardEvent4 = ({
  className = "",
  events2Fvo0DcEz2IUwtH8z3U,
  prop,
  frappe,
  vuejsIsAJavaScriptFramewo,
  userInterfaces,
}) => {
  return (
    <div className={[styles.eventCardevent13, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.backgroundParent}>
          <div className={styles.background1} />
          <div className={styles.events2fvo0dcez2iuwth8z3uuewWrapper}>
            <img
              className={styles.events2fvo0dcez2iuwth8z3uuewIcon}
              loading="lazy"
              alt=""
              src={events2Fvo0DcEz2IUwtH8z3U}
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.checkmarkWrapper}>
              <img
                className={styles.checkmarkIcon}
                alt=""
                src="/checkmark@2x.png"
              />
            </div>
            <div className={styles.completedProjects}>
              <span className={styles.span}>{prop}</span>
              <span>completed projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventCardevent13Inner}>
        <div className={styles.frameGroup}>
          <div className={styles.frappeParent}>
            <b className={styles.frappe}>{frappe}</b>
            <div className={styles.vuejsIsAJavascriptContainer}>
              <p className={styles.vuejsIsAJavascript}>
                {vuejsIsAJavaScriptFramewo}
              </p>
              <p className={styles.userInterfaces}>{userInterfaces}</p>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.eventCardbuttondefaultpropParent}>
              <div className={styles.eventCardbuttondefaultprop}>
                <div className={styles.eventCardbuttondefaultpropInner}>
                  <div className={styles.groupOfProjectsParent}>
                    <img
                      className={styles.groupOfProjects}
                      alt=""
                      src="/group-of-projects@2x.png"
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
                      src="/more@2x.png"
                    />
                    <div className={styles.moreInfo}>More Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCardEvent4.propTypes = {
  className: PropTypes.string,
  events2Fvo0DcEz2IUwtH8z3U: PropTypes.string,
  prop: PropTypes.string,
  frappe: PropTypes.string,
  vuejsIsAJavaScriptFramewo: PropTypes.string,
  userInterfaces: PropTypes.string,
};

export default EventCardEvent4;
