import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faRegistered } from "@fortawesome/free-regular-svg-icons";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer class="footer-content">
      <span>Logos</span>
      <ul class="footer-socials">
        <li>
          <a href="https://twitter.com/luqetos" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasgarciaf" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/LucasGarcialfg" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="4x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucfg/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01797d16e40a3b8628">
            <FontAwesomeIcon icon={faChessKing} size="4x" />
          </a>
        </li>
      </ul>
      <p>
        {" "}
        <FontAwesomeIcon icon={faRegistered} size="1x" /> 2022 _ Lucas Garcia -
        All rights reserved
      </p>
    </footer>
  );
}
