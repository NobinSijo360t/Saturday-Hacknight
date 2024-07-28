import EventCardEvent3 from "./event-card-event3";
import EventCardEvent from "./event-card-event";
import EventCardEvent1 from "./event-card-event1";
import PropTypes from "prop-types";
import styles from "./container.module.css";

const Container = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container5}>
        <EventCardEvent3
          events2FFyisG14rmN456UyOs="/events2fiz6mquckcwc8sbtvaude2fwebglpng@2x.png"
          prop="14  "
          chroma="WebGL"
          chromaIsAnOpenSourceEmbed="WebGL is a JavaScript API for rendering high"
          databaseThatGivesTheFaste="performance interactive 3D and 2D graphics"
          pythonOrJavaScriptLLMApps="within any compatible web browser without"
        />
        <EventCardEvent events2FwQN9reeobcQ5JFEe5="/events2fwqn9reeobcq5jfee5hup2fdiscordpng@2x.png" />
        <EventCardEvent1
          events2FcCN7xCj92IAMCrehw="/events2fmbntvhnbxpilfimqgly82fwebsocket-blackpng@2x.png"
          prop="17 "
          openAI="WebSocket"
          openAIAPIsAllowsUsersToBu="WebSocket is a protocol providing full-duplex"
          appsWithPowerfulModelsLik="communication channels over a single TCP"
          gPT3="connection"
        />
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
