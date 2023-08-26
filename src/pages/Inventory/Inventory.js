import React from "react";
import styles from "./Inventory.module.css";
import DismentaItems from "../../components/Inventory/DismentaItems";
import InventoryItems from "../../components/Inventory/InventoryItems";
import { swapIcon } from "../../images/image";

const Inventory = () => {
  return (
    <div className="mainContainer ">
      <div className="">
        <div className={styles.wrapper}>
          <DismentaItems />
          <div className={styles.swapContainer}>
            <img src={swapIcon} alt="#" className={styles.swapIcon} />
          </div>
          <InventoryItems />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
