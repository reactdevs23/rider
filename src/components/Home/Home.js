import React from "react";

import { rider, rider1, rider2, rider3, rider4 } from "../../images/image";
import { BiSearch } from "react-icons/bi";
import styles from "./Home.module.css";
import SingleRider from "./SingleRider";

const Home = () => {
  const riders = [
    { img: rider1, name: "" },
    { img: rider2, name: "" },
    { img: rider3, name: "" },
    { img: rider4, name: "" },
  ];
  return (
    <section
      className={[styles.wrapper, "mainContainer mainWrapper"].join(" ")}
    >
      <div className={styles.heroSection}>
        <div className={styles.header}>
          <img src={rider} alt="#" className={styles.riderImage} />
          <h2 className={styles.title}>Your Riders</h2>
        </div>
        <p className={styles.tagline}>
          You have 0 raiders! Get more{" "}
          <a href="#/" target="_blank" rel="noreferrer">
            here
          </a>
        </p>
        <p className={styles.text}>
          This is where you can rename your riders, customize their appearance
          and change their loadouts. Different missions will require different
          strategies, so choose wisely! If you’re not careful, your riders may
          not return...
        </p>

        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Find a rider"
            className={styles.input}
          />
          <div className={styles.iconContainer}>
            <BiSearch className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.allRider}>
        {riders.map((el, i) => (
          <SingleRider {...el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Home;
