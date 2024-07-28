import EventCardEvent1 from "./event-card-event1";
import Background from "./background";
import ProjectRow from "./project-row";
import PropTypes from "prop-types";
import styles from "./event-card-list-container.module.css";

const EventCardListContainer = ({ className = "" }) => {
  return (
    <div className={[styles.eventCardListContainer, className].join(" ")}>
      <div className={styles.container4}>
        <EventCardEvent1
          events2FcCN7xCj92IAMCrehw="/events2fccn7xcj92iamcrehwglb2fopenaiblackpng@2x.png"
          prop="12  "
          openAI="OpenAI"
          openAIAPIsAllowsUsersToBu="Open AI API’s allows users to build next-gen"
          appsWithPowerfulModelsLik="apps with powerful models like DALLE, Codex,"
          gPT3="GPT-3"
        />
        <div className={styles.eventCardevent24}>
          <Background
            prop="5 "
            events2FLStKxsMOjB5uNH1Hh="/events2flstkxsmojb5unh1hhv4g2fimagepng@2x.png"
          />
          <ProjectRow openCV="Firebase" />
          <div className={styles.firebaseProvidesSetContainer}>
            <p className={styles.firebaseProvidesSet}>
              Firebase provides set of hosting services like
            </p>
            <p className={styles.nosqlAndRealTime}>
              NoSQL and real-time databases, social
            </p>
            <p className={styles.authenticationAndNotificati}>
              authentication, and notifications, etc
            </p>
          </div>
        </div>
        <div className={styles.eventCardevent25}>
          <div className={styles.backgroundParent}>
            <div className={styles.background}>
              <div className={styles.backgroundGroup}>
                <div className={styles.background1} />
                <div className={styles.frameParent}>
                  <div className={styles.checkmarkWrapper}>
                    <img
                      className={styles.checkmarkIcon}
                      alt=""
                      src="/checkmark-6@2x.png"
                    />
                  </div>
                  <div className={styles.completedProjects}>
                    <span className={styles.span}>{`21  `}</span>
                    <span>completed projects</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.events2fq8zswnhjqeyegay7ycxuIcon}
              alt=""
              src="/events2fq8zswnhjqeyegay7ycxu2fimagepng@2x.png"
            />
          </div>
          <div className={styles.tkinterIsAContainer}>
            <p className={styles.tkinterIsA}>
              Tkinter is a standard built-in python library
            </p>
            <p className={styles.usedForCreating}>
              used for creating the graphical user interface
            </p>
            <p className={styles.forDesktopBased}>
              for desktop based applications
            </p>
          </div>
          <div className={styles.pythonTkinterParent}>
            <b className={styles.pythonTkinter}>Python (Tkinter)</b>
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
    </div>
  );
};

EventCardListContainer.propTypes = {
  className: PropTypes.string,
};

export default EventCardListContainer;
