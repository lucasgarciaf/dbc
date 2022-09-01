import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  return (
    <main>
      <div>
        <h2 className="h2_name"> Lucas Garcia</h2>
        <h3 className="h3_position"> Front End Developer</h3>
        <h4 className="h4_website"> lucasgarcia.website</h4>
      </div>
      <div className="div-buttons">
        <a
          className="LinkedIn-link"
          href="https://www.linkedin.com/in/lucfg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="LinkedIn-Button">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />{" "}
            <span className="button_text"> LinkedIn</span>
          </button>
        </a>

        <a
          className="Email-link"
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Email-Button">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
            <span className="button_text"> Email</span>
          </button>
        </a>
      </div>
      <div className="Main-text-div">
        <h2 className="Main-h2">About</h2>
        <p className="Main-p">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className="Main-h2">Interests</h2>
        <p className="Main-p">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}
