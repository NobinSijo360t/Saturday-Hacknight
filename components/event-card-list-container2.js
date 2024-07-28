import EventCardEvent2 from "./event-card-event2";
import PropTypes from "prop-types";
import styles from "./event-card-list-container2.module.css";

const EventCardListContainer2 = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.container2}>
        <div className={styles.eventCardevent17}>
          <div className={styles.background}>
            <div className={styles.backgroundParent}>
              <div className={styles.background1} />
              <div className={styles.events2fnz8jlguujj3ayf9a7twbWrapper}>
                <img
                  className={styles.events2fnz8jlguujj3ayf9a7twbIcon}
                  loading="lazy"
                  alt=""
                  src="/events2fnz8jlguujj3ayf9a7twb2fappwrite20websitepng@2x.png"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.checkmarkWrapper}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src="/checkmark-6@2x.png"
                  />
                </div>
                <div className={styles.completedProjects}>
                  <span className={styles.span}>{`7  `}</span>
                  <span>completed projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventCardevent17Inner}>
            <div className={styles.frameGroup}>
              <div className={styles.appwriteParent}>
                <b className={styles.appwrite}>AppWrite</b>
                <div className={styles.appwriteIsAContainer}>
                  <p className={styles.appwriteIsA}>
                    Appwrite is a backend platform for developing
                  </p>
                  <p className={styles.webMobileAnd}>
                    Web, Mobile, and Flutter applications.
                  </p>
                </div>
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
        </div>
        <EventCardEvent2 />
        <div className={styles.eventCardevent19}>
          <div className={styles.backgroundGroup}>
            <div className={styles.background2}>
              <div className={styles.backgroundContainer}>
                <div className={styles.background3} />
                <div className={styles.cardImages}>
                  <div className={styles.checkmarkContainer}>
                    <img
                      className={styles.checkmarkIcon1}
                      alt=""
                      src="/checkmark-6@2x.png"
                    />
                  </div>
                  <div className={styles.completedProjects1}>
                    <span className={styles.span1}>{`14  `}</span>
                    <span>completed projects</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.events2fmurltqnn4cj9hidpecdsIcon}
              alt=""
              src="/events2fmurltqnn4cj9hidpecds2felectron20blackpng@2x.png"
            />
          </div>
          <div className={styles.electronHelpsUsContainer}>
            <p className={styles.electronHelpsUs}>
              Electron helps us to build cross-platform
            </p>
            <p className={styles.desktopAppsUsing}>
              desktop apps using just basic HTML, CSS and
            </p>
            <p className={styles.javascript}>Javascript</p>
          </div>
          <div className={styles.electronParent}>
            <b className={styles.electron}>Electron</b>
            <div className={styles.seeProjects1}>
              <div className={styles.overviewContainer}>
                <div className={styles.eventCardbuttondefaultprop2}>
                  <div className={styles.linkContainer}>
                    <div className={styles.groupOfProjectsGroup}>
                      <img
                        className={styles.groupOfProjects1}
                        alt=""
                        src="/group-of-projects-6@2x.png"
                      />
                      <div className={styles.seeProjects2}>See Projects</div>
                    </div>
                  </div>
                </div>
                <div className={styles.eventCardbuttondefaultprop3}>
                  <div className={styles.frameDiv}>
                    <div className={styles.moreGroup}>
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
    </div>
  );
};

EventCardListContainer2.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer2;
