import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./technology-details.module.css";

const TechnologyDetails = ({
  className = "",
  openCV,
  openCVIsALibraryOfProgram,
  mainlyAimedAtRealTimeComp,
  propWidth,
}) => {
  const technologyDetailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.technologyDetails, className].join(" ")}
      style={technologyDetailsStyle}
    >
      <div className={styles.openAITechnology}>
        <div className={styles.opencvParent}>
          <b className={styles.opencv}>{openCV}</b>
          <div className={styles.opencvIsAContainer}>
            <p className={styles.opencvIsA}>{openCVIsALibraryOfProgram}</p>
            <p className={styles.mainlyAimedAt}>{mainlyAimedAtRealTimeComp}</p>
          </div>
        </div>
        <div className={styles.discordDescription}>
          <div className={styles.superTokenButton}>
            <div className={styles.eventCardbuttondefaultprop}>
              <div className={styles.superTokenMore}>
                <div className={styles.superTokenLink}>
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
              <div className={styles.superTokenInfoLink}>
                <div className={styles.superTokenLearn}>
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

TechnologyDetails.propTypes = {
  className: PropTypes.string,
  openCV: PropTypes.string,
  openCVIsALibraryOfProgram: PropTypes.string,
  mainlyAimedAtRealTimeComp: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default TechnologyDetails;
