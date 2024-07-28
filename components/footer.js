import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.shnLogoWrapper}>
        <div className={styles.shnLogo}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.thsvgWrapper}>
          <img
            className={styles.thsvgIcon}
            loading="lazy"
            alt=""
            src="/thsvg.svg"
          />
        </div>
        <div className={styles.separator} />
        <div className={styles.linkTinkerhuborgWrapper}>
          <h2 className={styles.linkTinkerhuborg}>tinkerhub.org</h2>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
