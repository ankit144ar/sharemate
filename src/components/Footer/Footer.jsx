import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

//condition location

const Footer = () => {
  return (
    <div>
      <div className="footer-container"> 
        <div>
          Made with ❤️ 
        </div>
        <div className="footer-links">
          <div>
            <a
             className="not-link"
              href="https://github.com/ankit144ar"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
             className="not-link"
              href="https://www.linkedin.com/in/ankit-roy-791330152/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>&#169; 2023 | ShareMate</div>
      </div>
    </div>
  );
};

export default Footer;
