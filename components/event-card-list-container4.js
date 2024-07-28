import ProjectRow from "./project-row";
import Background2 from "./background2";
import Background1 from "./background1";
import PropTypes from "prop-types";
import styles from "./event-card-list-container4.module.css";

const EventCardListContainer4 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.container0}>
        <div className={styles.eventCardevent11}>
          <div className={styles.background}>
            <div className={styles.moreProjectsLink}>
              <div className={styles.background1} />
              <div className={styles.eventCardLogos}>
                <div className={styles.eventCardRow}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src="/checkmark-6@2x.png"
                  />
                </div>
                <div className={styles.completedProjects}>
                  <span className={styles.span}>{`10  `}</span>
                  <span>completed projects</span>
                </div>
              </div>
            </div>
          </div>
          <ProjectRow openCV="OpenCV" />
          <div className={styles.opencvOrOpenContainer}>
            <p className={styles.opencvOrOpen}>
              OpenCV, or Open Source Computer Vision
            </p>
            <p className={styles.libraryIsAn}>
              Library, is an open-source computer vision
            </p>
            <p
              className={styles.andMachineLearning}
            >{`and machine learning software `}</p>
          </div>
          <img
            className={styles.events2fzosbjurebwdxkpd9de1jIcon}
            loading="lazy"
            alt=""
            src="/events2fzosbjurebwdxkpd9de1j2fopencv-logo1png@2x.png"
          />
        </div>
        <div className={styles.eventCardevent12}>
          <Background2
            events2FPpaNagQXFHrWrW5IF="/events2famkhnabe2i8to565qzfk2ffletblackpng@2x.png"
            checkmark="/checkmark-6@2x.png"
            prop="12  "
            propAlignSelf="stretch"
            propWidth="unset"
          />
          <ProjectRow openCV="Flet" />
          <div
            className={styles.buildingFlutterApps}
          >{`Building Flutter apps in Python `}</div>
        </div>
        <div className={styles.eventCardevent13}>
          <Background1
            events2FuLHD8KiVHHzjhiYrU="/events2fkecmdxci7gmrvjqr9qz12fimgaeblackpng@2x.png"
            prop="10  "
          />
          <ProjectRow openCV="Novel" />
          <div className={styles.opencvOrOpenContainer1}>
            <p className={styles.opencvOrOpen1}>
              OpenCV, or Open Source Computer Vision
            </p>
            <p className={styles.libraryIsAn1}>
              Library, is an open-source computer vision
            </p>
            <p
              className={styles.andMachineLearning1}
            >{`and machine learning software `}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCardListContainer4.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer4;
