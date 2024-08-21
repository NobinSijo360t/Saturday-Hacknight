import PropTypes from "prop-types";
import styles from "./index.module.css";

const EventCard = ({ className = "" }) => {
  return (
    <div className={[styles.eventCard, className].join(" ")}>
      <section className={styles.background}>
        <div className={styles.background1} />
      </section>
      <div className={styles.mainContent}>
        <div className={styles.eventCardbuttondefaultpropParent}>
          <button className={styles.eventCardbuttondefaultprop}>
            <div className={styles.innerButtonContent}>
              <div className={styles.groupOfProjectsParent}>
                <img
                  className={styles.groupOfProjects}
                  alt=""
                  src="/group-of-projects@2x.png"
                />
                <div className={styles.seeProjects}>See Projects</div>
              </div>
            </div>
          </button>
          <button className={styles.eventCardbuttondefaultprop1}>
            <div className={styles.eventCardbuttondefaultpropInner}>
              <div className={styles.moreParent}>
                <img className={styles.moreIcon} alt="" src="/more@2x.png" />
                <div className={styles.moreInfo}>More Info</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <section className={styles.eventCardstate6}>
        <div className={styles.stateImage}>
          <img
            className={styles.events2fp4ogektuvpad4fs9erfgIcon}
            loading="lazy"
            alt=""
            src="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
          />
        </div>
        <div className={styles.completionStatus}>
          <div className={styles.checkmarkWrapper}>
            <img
              className={styles.checkmarkIcon}
              loading="lazy"
              alt=""
              src="/checkmark@2x.png"
            />
          </div>
          <div className={styles.completedProjects}>
            <span className={styles.span}>{`19  `}</span>
            <span>completed projects</span>
          </div>
        </div>
        <div className={styles.projectDescription}>
          <div className={styles.descriptionContent}>
            <div className={styles.heading}>
              <b className={styles.django}>Django</b>
            </div>
            <div className={styles.djangoIsAContainer}>
              <p className={styles.djangoIsA}>
                Django is a high-level Python web framework
              </p>
              <p
                className={styles.thatEncouragesRapid}
              >{`that encourages rapid development `}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EventCard.propTypes = {
  className: PropTypes.string,
};

export default EventCard;