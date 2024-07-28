import PropTypes from "prop-types";
import styles from "./event-card-event1.module.css";

const EventCardEvent1 = ({
  className = "",
  events2FcCN7xCj92IAMCrehw,
  prop,
  openAI,
  openAIAPIsAllowsUsersToBu,
  appsWithPowerfulModelsLik,
  gPT3,
}) => {
  return (
    <div className={[styles.eventCardevent23, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.backgroundParent}>
          <div className={styles.background1} />
          <img
            className={styles.events2fccn7xcj92iamcrehwglbIcon}
            loading="lazy"
            alt=""
            src={events2FcCN7xCj92IAMCrehw}
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
                <span className={styles.span}>{prop}</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventCardevent23Inner}>
        <div className={styles.frameGroup}>
          <div className={styles.openaiParent}>
            <b className={styles.openai}>{openAI}</b>
            <div className={styles.openAiApisContainer}>
              <p className={styles.openAiApis}>{openAIAPIsAllowsUsersToBu}</p>
              <p className={styles.appsWithPowerful}>
                {appsWithPowerfulModelsLik}
              </p>
              <p className={styles.gpt3}>{gPT3}</p>
            </div>
          </div>
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
    </div>
  );
};

EventCardEvent1.propTypes = {
  className: PropTypes.string,
  events2FcCN7xCj92IAMCrehw: PropTypes.string,
  prop: PropTypes.string,
  openAI: PropTypes.string,
  openAIAPIsAllowsUsersToBu: PropTypes.string,
  appsWithPowerfulModelsLik: PropTypes.string,
  gPT3: PropTypes.string,
};

export default EventCardEvent1;
