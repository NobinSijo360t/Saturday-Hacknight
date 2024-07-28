import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({
  className = "",
  twitter,
  letsReadAndWriteYourTwitt,
  propWidth,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={[styles.eventCardevent38Inner, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.twitterParent}>
          <b className={styles.twitter}>{twitter}</b>
          <div className={styles.letsReadAnd}>{letsReadAndWriteYourTwitt}</div>
        </div>
        <div className={styles.frameWrapper}>
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
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  twitter: PropTypes.string,
  letsReadAndWriteYourTwitt: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
