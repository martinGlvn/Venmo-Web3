import { ChevronDownIcon } from "@heroicons/react/outline";
import styles from "../styles/Navbar.module.css";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-venmo-is-a-mobile-payment-service-owned-by-paypal-logo-color-tal-revivo.png"
            alt="Venmo Logo"
          />
        </div>

        {currentAccount ? (
          <div className={styles.actionsContainer}>
            <p>
              Hello,{" "}
              <span className={styles.accentColor}>
                {shortenAddress(currentAccount)}
              </span>
              ! 👋
            </p>

            <ChevronDownIcon className={styles.arrowDownIcon} />
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatarImage}
                src="https://i.ibb.co/jf2yYrj/i-AM-2.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <button className={styles.connectBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
