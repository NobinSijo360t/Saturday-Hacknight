import PropTypes from "prop-types";
import styles from "./hub-navigation.module.css";

const HubNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.hubNavigation, className].join(" ")}>
      <div className={styles.sheetsHeader}>
        <header className={styles.projectHighlight}>
          <div className={styles.header}>
            <div className={styles.figmaButton}>
              <img
                className={styles.screenshot20240702At934Icon}
                loading="lazy"
                alt=""
                src="/screenshot-20240702-at-93438-amremovebgpreview-1-4@2x.png"
              />
            </div>
            <div className={styles.eventTitle}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button}>About</div>
              </div>
            </div>
            <div className={styles.cardOverlay}>
              <div className={styles.cardImage}>
                <div className={styles.projectHub}>PROJECT HUB</div>
                <div className={styles.highlight} />
              </div>
            </div>
            <div className={styles.figmaButton1}>
              <a className={styles.text}>LOGIN</a>
            </div>
          </div>
        </header>
        <h1 className={styles.saturdayHacknightThisContainer}>
          <span>{`Saturday HackNight `}</span>
          <span className={styles.thisWeek}>this week</span>
        </h1>
      </div>
    </div>
  );
};

HubNavigation.propTypes = {
  className: PropTypes.string,
};

export default HubNavigation;
