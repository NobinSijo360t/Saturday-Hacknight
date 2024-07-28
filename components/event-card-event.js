import PropTypes from "prop-types";
import styles from "./event-card-event.module.css";

const EventCardEvent = ({ className = "", events2FwQN9reeobcQ5JFEe5 }) => {
  return (
    <div className={[styles.eventCardevent26, className].join(" ")}>
      <div className={styles.backgroundParent}>
        <div className={styles.background}>
          <div className={styles.backgroundGroup}>
            <div className={styles.background1} />
            <div className={styles.webGlComplete}>
              <div className={styles.checkmarkContainer}>
                <img
                  className={styles.checkmarkIcon}
                  alt=""
                  src="/checkmark-6@2x.png"
                />
              </div>
              <div className={styles.completedProjects}>
                <span className={styles.span}>{`20  `}</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.events2fwqn9reeobcq5jfee5hupIcon}
          loading="lazy"
          alt=""
          src={events2FwQN9reeobcQ5JFEe5}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.openaiParent}>
          <b className={styles.openai}>OpenAI</b>
          <div className={styles.discordApisEnablesContainer}>
            <p className={styles.discordApisEnables}>
              Discord APIs enables developers to build bots
            </p>
            <p className={styles.orExtendThe}>
              or extend the functionality of their app using
            </p>
            <p className={styles.dataAndServices}>
              data and services exposed by Discord
            </p>
          </div>
        </div>
        <div className={styles.discordSeeLinkWrapper}>
          <div className={styles.discordSeeLink}>
            <div className={styles.eventCardbuttondefaultprop}>
              <div className={styles.discordProjectLink}>
                <div className={styles.discordView}>
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
              <div className={styles.discordMoreLink}>
                <div className={styles.discordLearnMore}>
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
  );
};

EventCardEvent.propTypes = {
  className: PropTypes.string,
  events2FwQN9reeobcQ5JFEe5: PropTypes.string,
};

export default EventCardEvent;
