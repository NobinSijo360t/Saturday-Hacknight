import FrameComponent1 from "./frame-component1";
import Background2 from "./background2";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.sheetBackgroundWrapper, className].join(" ")}>
      <div className={styles.sheetBackground}>
        <div className={styles.backgroundParent}>
          <div className={styles.background}>
            <div className={styles.sheetCheckmark}>
              <div className={styles.background1} />
              <div className={styles.sheetsTitle}>
                <div className={styles.sheetLogo}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src="/checkmark-6@2x.png"
                  />
                </div>
                <div className={styles.completedProjects}>
                  <span className={styles.span}>{`1  `}</span>
                  <span>completed projects</span>
                </div>
              </div>
              <img
                className={styles.events2fm9apciv7kqy7t4wgslq1Icon}
                loading="lazy"
                alt=""
                src="/events2fm9apciv7kqy7t4wgslq12fsheetsblackpng@2x.png"
              />
            </div>
          </div>
          <FrameComponent1
            twitter="Google Sheets"
            letsReadAndWriteYourTwitt="How can you make your life easier with Google Sheets"
            propWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
        <div className={styles.gitLogo}>
          <Background2
            events2FPpaNagQXFHrWrW5IF="/09f5umrkmjlbzef7qpng@2x.png"
            checkmark="/checkmark-6@2x.png"
            prop="20 "
            propAlignSelf="unset"
            propWidth="358px"
          />
          <FrameComponent1
            twitter="GitHub API"
            letsReadAndWriteYourTwitt="Build something cool with GitHub API"
            propWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
