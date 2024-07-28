import EventCardEvent1 from "./event-card-event1";
import EventCardEvent3 from "./event-card-event3";
import Background1 from "./background1";
import TechnologyDetails from "./technology-details";
import Background3 from "./background3";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";
import styles from "./technology-projects.module.css";

const TechnologyProjects = ({ className = "" }) => {
  return (
    <div className={[styles.technologyProjects, className].join(" ")}>
      <EventCardEvent1
        events2FcCN7xCj92IAMCrehw="/events2f8nwase3j8q3jtiypu7pr2fcalendarblackpng@2x.png"
        prop="2 "
        openAI="Calendar"
        openAIAPIsAllowsUsersToBu="The Calendar API lets you integrate your app"
        appsWithPowerfulModelsLik="with Google Calendar, creating new ways for"
        gPT3="you to engage your users"
      />
      <EventCardEvent3
        events2FFyisG14rmN456UyOs="/events2fpmi9qum0l8ajjqe1xvnx2fairtableblackpng@2x.png"
        prop="5  "
        chroma="Airtable"
        chromaIsAnOpenSourceEmbed={`The Airtable API gives you the ability to list &`}
        databaseThatGivesTheFaste="manipulate all of your bases, tables, fields, and"
        pythonOrJavaScriptLLMApps="views"
      />
      <div className={styles.eventCardevent35}>
        <Background1
          events2FuLHD8KiVHHzjhiYrU="/events2fkzxi15mvk43ouufjxdki2fgmailblackpng@2x.png"
          prop="11  "
        />
        <TechnologyDetails
          openCV="Gmail"
          openCVIsALibraryOfProgram={`Have fun tinkering with your Gmail inboxes &`}
          mainlyAimedAtRealTimeComp="settings"
          propWidth="338.6px"
        />
      </div>
      <div className={styles.eventCardevent39}>
        <div className={styles.background}>
          <div className={styles.backgroundParent}>
            <div className={styles.background1} />
            <img
              className={styles.events2fwl1ctk0pzu16uutcnbr1Icon}
              loading="lazy"
              alt=""
              src="/events2fwl1ctk0pzu16uutcnbr12fmapboxpng@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.checkmarkWrapper}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src="/checkmark-6@2x.png"
                  />
                </div>
                <div className={styles.completedProjects}>
                  <span className={styles.span}>{`8 `}</span>
                  <span>completed projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventCardevent39Inner}>
          <div className={styles.frameGroup}>
            <div className={styles.mapboxParent}>
              <b className={styles.mapbox}>Mapbox</b>
              <div className={styles.preciseLocationDataContainer}>
                <p className={styles.preciseLocationData}>
                  Precise location data and powerful developer
                </p>
                <p className={styles.toolsToChange}>
                  tools to change the way we navigate the world
                </p>
              </div>
            </div>
            <div className={styles.frameContainer}>
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
      <div className={styles.eventCardevent40}>
        <Background3
          events2Fi1lGwr9BU2rGkmnST="/events2fvt19tkuohw3srjgsf6xe2fnotionblackpng@2x.png"
          checkmark="/checkmark-6@2x.png"
          prop="11  "
        />
        <div className={styles.notionWrapper}>
          <b className={styles.notion}>Notion</b>
        </div>
        <div className={styles.airtableButtonsContainerWrapper}>
          <div className={styles.airtableButtonsContainer}>
            <div className={styles.eventCardbuttondefaultprop2}>
              <div className={styles.airtableProjectButton}>
                <div className={styles.airtableProjectButtonConten}>
                  <img
                    className={styles.groupOfProjects1}
                    alt=""
                    src="/group-of-projects-6@2x.png"
                  />
                  <div className={styles.seeProjects1}>See Projects</div>
                </div>
              </div>
            </div>
            <div className={styles.eventCardbuttondefaultprop3}>
              <div className={styles.airtableMoreInfoButtonContWrapper}>
                <div className={styles.airtableMoreInfoButtonCont}>
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
        <div className={styles.connectNotionPagesContainer}>
          <p className={styles.connectNotionPages}>
            Connect Notion pages and databases to the
          </p>
          <p className={styles.toolsYouUse}>
            tools you use every day, creating powerful
          </p>
          <p className={styles.workflows}>workflows.</p>
        </div>
      </div>
      <div className={styles.eventCardevent38}>
        <Background3
          events2Fi1lGwr9BU2rGkmnST="/events2f1klfruuh3wbz6g99dcpv2ftwitterpng@2x.png"
          checkmark="/checkmark-6@2x.png"
          prop="29  "
        />
        <FrameComponent1
          twitter="Twitter"
          letsReadAndWriteYourTwitt="Let's read and write your Twitter data"
        />
      </div>
    </div>
  );
};

TechnologyProjects.propTypes = {
  className: PropTypes.string,
};

export default TechnologyProjects;
