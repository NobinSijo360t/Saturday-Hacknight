import PropTypes from "prop-types";
import styles from "./project-row.module.css";

const ProjectRow = ({ className = "", openCV }) => {
  return (
    <div className={[styles.projectRow, className].join(" ")}>
      <div className={styles.opencvParent}>
        <b className={styles.opencv}>{openCV}</b>
        <div className={styles.projectButtonContainersWrapper}>
          <div className={styles.projectButtonContainers}>
            <div className={styles.eventCardbuttondefaultprop}>
              <div className={styles.seeProjectContentWrapper}>
                <div className={styles.seeProjectContent}>
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
    </div>
  );
};

ProjectRow.propTypes = {
  className: PropTypes.string,
  openCV: PropTypes.string,
};

export default ProjectRow;
