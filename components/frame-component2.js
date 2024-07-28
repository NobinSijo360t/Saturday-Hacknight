import Background from "./background";
import TechnologyDetails from "./technology-details";
import Background2 from "./background2";
import ProjectRow from "./project-row";
import EventCardEvent from "./event-card-event";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.container5Wrapper, className].join(" ")}>
      <div className={styles.container5}>
        <div className={styles.eventCardevent30}>
          <Background
            prop="10 "
            events2FLStKxsMOjB5uNH1Hh="/events2feyyeylorpobjmyjfgenw2fopencvblackpng@2x.png"
          />
          <TechnologyDetails
            openCV="OpenCV"
            openCVIsALibraryOfProgram="OpenCV is a library of programming functions"
            mainlyAimedAtRealTimeComp="mainly aimed at real-time computer vision"
          />
        </div>
        <div className={styles.eventCardevent31}>
          <Background2
            events2FPpaNagQXFHrWrW5IF="/events2fgaq5scdlbwo7h0i5hqaj2fsupabaseblackpng@2x.png"
            checkmark="/checkmark-6@2x.png"
            prop="5  "
            propAlignSelf="stretch"
            propWidth="unset"
          />
          <ProjectRow openCV="Supabase" />
          <div className={styles.supabaseIsAnContainer}>
            <p className={styles.supabaseIsAn}>
              Supabase is an open source Firebase
            </p>
            <p className={styles.alternativeWithA}>
              alternative with a Postgres Database,
            </p>
            <p className={styles.authenticationRealtimeSubsc}>
              Authentication, Realtime subscriptions and…
            </p>
          </div>
        </div>
        <EventCardEvent events2FwQN9reeobcQ5JFEe5="/events2fzex0sv3lukkjpzw1lnq92fsupertokensblackpng@2x.png" />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
