import PropTypes from "prop-types";
import styles from "./background3.module.css";

const Background3 = ({
  className = "",
  events2Fi1lGwr9BU2rGkmnST,
  checkmark,
  prop,
}) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.images}>
        <div className={styles.background1} />
        <img
          className={styles.events2fi1lgwr9bu2rgkmnstmaeIcon}
          loading="lazy"
          alt=""
          src={events2Fi1lGwr9BU2rGkmnST}
        />
        <div className={styles.projectCount}>
          <div className={styles.statusContainer}>
            <div className={styles.icon}>
              <img
                className={styles.checkmarkIcon}
                loading="lazy"
                alt=""
                src={checkmark}
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
  );
};

Background3.propTypes = {
  className: PropTypes.string,
  events2Fi1lGwr9BU2rGkmnST: PropTypes.string,
  checkmark: PropTypes.string,
  prop: PropTypes.string,
};

export default Background3;
