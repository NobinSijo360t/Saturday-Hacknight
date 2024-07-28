import EventCardEvent3 from "./event-card-event3";
import PropTypes from "prop-types";
import styles from "./event-card-list-container1.module.css";

const EventCardListContainer1 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.container3}>
        <div className={styles.eventCardevent20}>
          <div className={styles.backgroundParent}>
            <div className={styles.background}>
              <div className={styles.backgroundGroup}>
                <div className={styles.background1} />
                <div className={styles.frameParent}>
                  <div className={styles.checkmarkWrapper}>
                    <img
                      className={styles.checkmarkIcon}
                      alt=""
                      src="/checkmark-6@2x.png"
                    />
                  </div>
                  <div className={styles.completedProjects}>
                    <span className={styles.span}>{`7  `}</span>
                    <span>completed projects</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.events2fwiufoaayceehnmbevcr4Icon}
              loading="lazy"
              alt=""
              src="/events2fwiufoaayceehnmbevcr42fengagespot20websitepng@2x.png"
            />
          </div>
          <div className={styles.engagespotParent}>
            <b className={styles.engagespot}>Engagespot</b>
            <div className={styles.engagespotIsAContainer}>
              <p className={styles.engagespotIsA}>
                Engagespot is a complete product notification
              </p>
              <p className={styles.infrastructureToBuild}>
                infrastructure to build your product’s
              </p>
              <p
                className={styles.completeNotification}
              >{`complete notification `}</p>
            </div>
          </div>
          <div className={styles.openCVButtonsWrapper}>
            <div className={styles.openCVButtons}>
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
                <div className={styles.moreInfoContentWrapper}>
                  <div className={styles.moreInfoContent}>
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
        <EventCardEvent3
          events2FFyisG14rmN456UyOs="/events2fowidvpmjkoxa4bjxnpsn2fpygame20website20picpng@2x.png"
          prop="23 "
          chroma="Pygame"
          chromaIsAnOpenSourceEmbed="Pygame is a set of Python modules designed"
          databaseThatGivesTheFaste="for writing video games. It let’s you write"
          pythonOrJavaScriptLLMApps="games and multimedia applications in Python"
        />
        <EventCardEvent3
          events2FFyisG14rmN456UyOs="/events2f1v8jsgtdhlwuet06coj92fplasmopng@2x.png"
          prop="6  "
          chroma="Plasmo"
          chromaIsAnOpenSourceEmbed="Plasmo is an all-in-one platform that makes it"
          databaseThatGivesTheFaste="easy for browser extension developers to"
          pythonOrJavaScriptLLMApps="create, test, and publish amazing extensions"
        />
      </div>
    </div>
  );
};

EventCardListContainer1.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer1;
