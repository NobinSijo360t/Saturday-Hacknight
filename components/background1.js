import PropTypes from "prop-types";
import styles from "./background1.module.css";

const Background1 = ({ className = "", events2FuLHD8KiVHHzjhiYrU, prop }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.techNames}>
        <div className={styles.background1} />
        <img
          className={styles.events2fulhd8kivhhzjhiyrulbyIcon}
          loading="lazy"
          alt=""
          src={events2FuLHD8KiVHHzjhiYrU}
        />
        <div className={styles.kerasProjects}>
          <div className={styles.fletCompletionIcon}>
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
  );
};

Background1.propTypes = {
  className: PropTypes.string,
  events2FuLHD8KiVHHzjhiYrU: PropTypes.string,
  prop: PropTypes.string,
};

export default Background1;
