import React from "react";
import styles from "./Home.module.css";

const SingleRider = ({ img, name }) => {
  return (
    <div className={styles.rider}>
      <img src={img} alt="#" className={styles.image} />
    </div>
  );
};

export default SingleRider;
