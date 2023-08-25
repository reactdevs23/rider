import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { PiFileDocBold } from "react-icons/pi";

import { MdClose } from "react-icons/md";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./Header.module.css";
import { ellipse, userImage } from "../../images/image";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <section className={[styles.headerWrapper].join(" ")}>
        <div className={[styles.header].join(" ")}>
          <Link className={styles.doc} to="#">
            <PiFileDocBold className={styles.icon} />
            View Docs
          </Link>
          <img src={ellipse} alt="#" className={styles.ellipse} />
          <div className={styles.userContainer}>
            <img src={userImage} alt="#" className={styles.userImage} />

            <div className={styles.userInfo}>
              <p className={styles.userNameAndId}>Lunacian #25982349</p>
              <p className={styles.address}>ronin:eac4...40e9</p>
            </div>
            {dropdown ? (
              <AiFillCaretUp
                onClick={() => setDropdown((prev) => !prev)}
                className={[styles.icon, styles.dropDownIcon].join(" ")}
              />
            ) : (
              <AiFillCaretDown
                onClick={() => setDropdown((prev) => !prev)}
                className={[styles.icon, styles.dropDownIcon].join(" ")}
              />
            )}
            {dropdown && (
              <div className={styles.dropDownContainer}>
                <p
                  className={styles.dropdownItem}
                  onClick={() => setDropdown(false)}
                >
                  Account
                  <BiChevronRight className={styles.rightArrow} />
                </p>{" "}
                <p
                  className={styles.dropdownItem}
                  onClick={() => setDropdown(false)}
                >
                  Edit Account
                  <BiChevronRight className={styles.rightArrow} />
                </p>
              </div>
            )}
          </div>
          {sidebar ? (
            <MdClose
              className={styles.close}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
