import React from "react";
import { Typography, Link } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__right">
        <div className="navbar__logo">
          <img src="./logo.png" alt="logo" width="90" />
        </div>
        <div className="navbar__primary__link">
          <Typography>
            <ul>
              <li className="active">
                <Link href="#">Find jobs</Link>
              </li>
              <li>
                <Link href="#">Company reviews</Link>
              </li>
              <li>
                <Link href="#">Find Salaries</Link>
              </li>
            </ul>
          </Typography>
        </div>
      </div>

      <div className="navbar__secondary__link">
        <Typography>
          <ul>
            <li>
              <Link href="#">Upload your resume</Link>
            </li>
            <li>
              <Link href="#">sign in</Link>
            </li>
            <li>
              <Link href="#">Employers/Post job</Link>
            </li>
          </ul>
        </Typography>
      </div>
    </div>
  );
}

export default Navbar;
