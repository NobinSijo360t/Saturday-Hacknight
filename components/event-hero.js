import PropTypes from "prop-types";
import styles from "./event-hero.module.css";

const EventHero = ({ className = "" }) => {
  return (
    <div className={[styles.eventHero, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.overlay} />
        <div className={styles.cardChild} />
        <div className={styles.cardInfo} />
        <div className={styles.eventCountdown}>
          <div className={styles.overlay1}>
            <div className={styles.timerContainer}>
              <div className={styles.variantshadowColorsuccess} />
            </div>
            <div className={styles.teamsRegistered}>14 Teams Registered</div>
          </div>
          <div className={styles.registrationButton}>
            <div className={styles.technologyPreview}>
              <div className={styles.previewImage}>
                <div className={styles.heroContent}>
                  <div className={styles.heading}>
                    <h1 className={styles.prisma}>Prisma</h1>
                    <div className={styles.areaContainer}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.satMay18}>Sat May 18 2024</div>
                    </div>
                  </div>
                  <div className={styles.buttons} />
                </div>
                <div className={styles.countdown}>
                  <div className={styles.countdownValues}>
                    <div className={styles.seeYouThere}>See You There</div>
                  </div>
                  <div className={styles.projectName}>
                    <div className={styles.countdownMinutes}>
                      <div className={styles.countdownValuesParent}>
                        <div className={styles.countdownValues1}>10</div>
                        <div className={styles.projectMoreInfo}>
                          <img
                            className={styles.projectMoreInfoChild}
                            alt=""
                            src="/group-10@2x.png"
                          />
                        </div>
                        <div className={styles.projectList}>
                          <div className={styles.countdownValues2}>02</div>
                        </div>
                        <div className={styles.projectMoreInfo1}>
                          <img
                            className={styles.projectMoreInfoItem}
                            alt=""
                            src="/group-36@2x.png"
                          />
                        </div>
                        <div className={styles.projectMoreInfo2}>
                          <div className={styles.countdownSeparator}>15</div>
                        </div>
                        <div className={styles.projectMoreInfo3}>
                          <img
                            className={styles.projectMoreInfoInner}
                            alt=""
                            src="/group-37@2x.png"
                          />
                        </div>
                        <div className={styles.projectMoreInfo4}>
                          <div className={styles.div}>45</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.eventBackground}>
                      <div className={styles.countdownValues3}>
                        <div className={styles.days}>days</div>
                      </div>
                      <div className={styles.hours}>hours</div>
                      <div className={styles.minutes}>minutes</div>
                      <div className={styles.seconds}>seconds</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.moreProjectDetails}>
                <div className={styles.figmaButton}>
                  <div className={styles.text}>REGISTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCardBackground}>
          <img
            className={styles.events2fwfcxg8scu1e3vb6oikejIcon}
            loading="lazy"
            alt=""
            src="/events2fwfcxg8scu1e3vb6oikej2fprismawhitepng@2x.png"
          />
          <div className={styles.streamlitIsAnOpenSourceContainer}>
            <p className={styles.streamlitIsAnOpenSource}>
              Streamlit is an open-source Python framework to deliver dynamic
            </p>
            <p className={styles.dataWithOnly}>
              data with only a few lines of code.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardInfo1}>
        <div className={styles.moreInfo}>More Info</div>
      </div>
    </div>
  );
};

EventHero.propTypes = {
  className: PropTypes.string,
};

export default EventHero;
