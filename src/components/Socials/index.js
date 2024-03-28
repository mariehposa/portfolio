import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faArrowDownLong,
  faArrowRightLong,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faHackerrank,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const Socials = () => {
  let res = window.screen.width;

  return (
    <div className="socials">
      <div className="learn-more">
        <p>Learn more about me</p>
        <motion.div
          animate={{ x: res >= 768 && 20, y: res < 768 && 20, opacity: 0.8 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          <FontAwesomeIcon
            icon={res >= 768 ? faArrowRightLong : faArrowDownLong}
          />
        </motion.div>
      </div>
      <div className="social-icon">
        <a
          href="mailto:mariamadedeji.work@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mariam Adedeji email address"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/mariehposa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mariam Adedeji email Github profile"
          title="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/Mariehposah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mariam Adedeji Twitter profile"
          title="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://dev.to/mariehposa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mariam Adedeji Dev profile"
          title="Dev"
        >
          <FontAwesomeIcon icon={faDev} />
        </a>
        <a
          href="https://www.hackerrank.com/mariehposa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mariam Adedeji Hackerrank profile"
          title="Hackerrank"
        >
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
