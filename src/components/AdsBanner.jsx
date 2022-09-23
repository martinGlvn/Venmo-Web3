import styles from "../styles/AdsBanner.module.css";

function AdsBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerEmojis}>🚀 🧠 🧑‍💻</div>
        <h3 className={styles.bannerTitle}>Blockchain Engineer</h3>
        <p className={styles.bannerDescription}>
        Blockchain Engineer & I love DeFi development & Web3 it is the future
        </p>

        <div className={styles.bannerCta}>
          <button className={styles.ctaButton} type="button">
            <img
              className={styles.ctaButtonImage}
              src="https://seeklogo.com/images/D/download-on-the-app-store-flat-badge-logo-4582694404-seeklogo.com.png"
              alt="Download on the App Store"
            />
          </button>

          <button className={styles.ctaButton} type="button">
            <img
              className={styles.ctaButtonImage}
              src="https://seeklogo.com/images/G/get-it-on-google-play-badge-logo-8CDE582776-seeklogo.com.png"  
              alt="Get it on Google Play"
            />
          </button>
        </div>
      </div>

      <div className={styles.bannerImageContainer}>
        <img
          className={styles.bannerImage}
          src="/src/assets/ads-banner.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdsBanner;
