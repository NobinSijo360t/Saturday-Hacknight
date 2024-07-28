import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./background2.module.css";

const Background2 = ({
  className = "",
  events2FPpaNagQXFHrWrW5IF,
  checkmark,
  prop,
  propAlignSelf,
  propWidth,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.background, className].join(" ")}
      style={backgroundStyle}
    >
      <div className={styles.backgroundParent}>
        <div className={styles.background1} />
        <div className={styles.events2fppanagqxfhrwrw5ifxgvWrapper}>
          <img
            className={styles.events2fppanagqxfhrwrw5ifxgvIcon}
            loading="lazy"
            alt=""
            src={events2FPpaNagQXFHrWrW5IF}
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.checkmarkWrapper}>
            <img className={styles.checkmarkIcon} alt="" src={checkmark} />
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

Background2.propTypes = {
  className: PropTypes.string,
  events2FPpaNagQXFHrWrW5IF: PropTypes.string,
  checkmark: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Background2;
