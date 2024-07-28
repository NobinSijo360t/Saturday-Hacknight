import HubNavigation from "../components/hub-navigation";
import EventHero from "../components/event-hero";
import Container1 from "../components/container1";
import EventCardListContainer5 from "../components/event-card-list-container5";
import EventCardListContainer4 from "../components/event-card-list-container4";
import EventCardListContainer3 from "../components/event-card-list-container3";
import EventCardListContainer2 from "../components/event-card-list-container2";
import EventCardListContainer1 from "../components/event-card-list-container1";
import EventCardListContainer from "../components/event-card-list-container";
import Container from "../components/container";
import FrameComponent2 from "../components/frame-component2";
import TechnologyProjects from "../components/technology-projects";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const EventsSection = () => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.buttons} />
      <div className={styles.eventsSectionChild} />
      <section className={styles.frameParent}>
        <div className={styles.hubNavigationParent}>
          <HubNavigation />
          <EventHero />
        </div>
        <div className={styles.tinkerhubLogo}>
          <h1 className={styles.exploredAreas}>Explored Areas</h1>
        </div>
      </section>
      <section className={styles.linkSeparator}>
        <div className={styles.tinkerhubLink}>
          <Container1 />
          <EventCardListContainer5 />
          <EventCardListContainer4 />
          <EventCardListContainer3 />
          <EventCardListContainer2 />
          <EventCardListContainer1 />
          <EventCardListContainer />
          <Container />
          <FrameComponent2 />
        </div>
      </section>
      <section className={styles.projectCards}>
        <div className={styles.projectCardRow}>
          <TechnologyProjects />
          <FrameComponent />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventsSection;
