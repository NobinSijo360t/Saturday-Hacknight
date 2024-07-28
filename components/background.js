import PropTypes from "prop-types";
import styles from "./background.module.css";

const Background = ({ className = "", prop, events2FLStKxsMOjB5uNH1Hh }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.backgroundParent}>
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
            <span className={styles.span}>{prop}</span>
            <span>completed projects</span>
          </div>
        </div>
        <img
          className={styles.events2flstkxsmojb5unh1hhv4gIcon}
          loading="lazy"
          alt=""
          src={events2FLStKxsMOjB5uNH1Hh}
        />
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  events2FLStKxsMOjB5uNH1Hh: PropTypes.string,
};

export default Background;
