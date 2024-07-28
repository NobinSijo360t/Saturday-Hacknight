import Background2 from "./background2";
import Background1 from "./background1";
import PropTypes from "prop-types";
import styles from "./event-card-list-container5.module.css";

const EventCardListContainer5 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.eventCardBackground}>
        <div className={styles.shape} />
        <div className={styles.container}>
          <div className={styles.eventCardevent10}>
            <Background2
              events2FPpaNagQXFHrWrW5IF="/events2fgkqvbseleivgdo3l5yn32fblackbgpng@2x.png"
              checkmark="/checkmark-6@2x.png"
              prop="12  "
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <div className={styles.expoContent}>
              <div className={styles.expoDescription}>
                <b className={styles.expo}>Expo</b>
                <div className={styles.expoIsAnOpenSourcePlatforContainer}>
                  <p className={styles.expoIsAnOpenSourcePlatfor}>
                    Expo is an open-source platform for making
                  </p>
                  <p
                    className={styles.universalNativeApps}
                  >{`universal native apps for Android, iOS `}</p>
                </div>
              </div>
            </div>
            <div className={styles.expoButtons}>
              <div className={styles.expoButtons1}>
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
          <div className={styles.eventCardevent11}>
            <Background1
              events2FuLHD8KiVHHzjhiYrU="/events2fulhd8kivhhzjhiyrulby2fimagepng@2x.png"
              prop="8  "
            />
            <div className={styles.kerasContent}>
              <div className={styles.kerasDescription}>
                <div className={styles.kerasTech}>
                  <b className={styles.keras}>Keras</b>
                  <div
                    className={styles.kerascvIsA}
                  >{`KerasCV is a library of modular computer vision components that work natively `}</div>
                </div>
                <div className={styles.kerasButtons}>
                  <div className={styles.frappeButtons}>
                    <div className={styles.eventCardbuttondefaultprop2}>
                      <div className={styles.eventCardbuttondefaultpropChild}>
                        <div className={styles.groupOfProjectsGroup}>
                          <img
                            className={styles.groupOfProjects1}
                            alt=""
                            src="/group-of-projects-6@2x.png"
                          />
                          <div className={styles.seeProjects1}>
                            See Projects
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.eventCardbuttondefaultprop3}>
                      <div className={styles.moreInfoContentContainer}>
                        <div className={styles.moreInfoContent1}>
                          <img
                            className={styles.moreIcon1}
                            alt=""
                            src="/more-6@2x.png"
                          />
                          <div className={styles.moreInfo1}>More Info</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventCardevent12}>
            <div className={styles.background}>
              <div className={styles.frappeImage}>
                <div className={styles.background1} />
                <img
                  className={styles.events2f02ovwrqpjkfcqsy9zppiIcon}
                  loading="lazy"
                  alt=""
                  src="/events2f02ovwrqpjkfcqsy9zppi2fimagepng@2x.png"
                />
                <div className={styles.frappeCompletion}>
                  <div className={styles.frappeCheckmarkParent}>
                    <div className={styles.frappeCheckmark}>
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
                </div>
              </div>
            </div>
            <div className={styles.frappeContent}>
              <div className={styles.frappeDescription}>
                <div className={styles.frappeTech}>
                  <b className={styles.frappe}>Frappe</b>
                  <div className={styles.aLowCodeOpenSourceContainer}>
                    <p className={styles.aLowCodeOpenSource}>
                      a low-code, open-source, web
                    </p>
                    <p className={styles.frameworkInPythonAndJavasc}>
                      framework in Python and JavaScript
                    </p>
                  </div>
                </div>
                <div className={styles.frappeButtons1}>
                  <div className={styles.frappeButtons2}>
                    <div className={styles.eventCardbuttondefaultprop4}>
                      <div className={styles.frameDiv}>
                        <div className={styles.groupOfProjectsContainer}>
                          <img
                            className={styles.groupOfProjects2}
                            alt=""
                            src="/group-of-projects-6@2x.png"
                          />
                          <div className={styles.seeProjects2}>
                            See Projects
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.eventCardbuttondefaultprop5}>
                      <div className={styles.moreInfoButton}>
                        <div className={styles.moreParent}>
                          <img
                            className={styles.moreIcon2}
                            alt=""
                            src="/more-6@2x.png"
                          />
                          <div className={styles.moreInfo2}>More Info</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCardListContainer5.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer5;
