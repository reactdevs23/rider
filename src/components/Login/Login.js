import React from "react";
import { BiScan } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./Login.module.css";
import { logo, xidarWallet, zuesWallet } from "../../images/image";

const Login = () => {
  return (
    <section className={styles.mainWrapper}>
      <img src={logo} alt="#" className={styles.logo} />

      <h2 className={styles.title}>Sign In</h2>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.walletContainer}>
            <button className={[styles.button, styles.connectWallet].join(" ")}>
              {" "}
              <img src={zuesWallet} alt="#" className={styles.icon} /> Log in
              with Zues Wallet
            </button>{" "}
            <button className={[styles.button, styles.connectWallet].join(" ")}>
              {" "}
              <img src={xidarWallet} alt="#" className={styles.icon} /> Log in
              with Xidar Wallet
            </button>
          </div>
          <div className={styles.scanAndInfo}>
            <button className={[styles.button, styles.scanQrCode].join(" ")}>
              <div className={styles.scanIconContainer}>
                <BiScan className={styles.scanIcon} />
              </div>
              <span> Log in by QR Code</span>
            </button>
            <p className={styles.text}>
              <AiOutlineInfoCircle /> By continuing you agree to our Terms of
              use
            </p>
            <p className={styles.line} />
            <p className={styles.text}>
              Don’t know where to start? Getting Started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
