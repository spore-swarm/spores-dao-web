import { FC, useState } from "react";
import { joinUs, oHno } from "../../app/config";
import { handleRedirect } from "../../app/util";
import logoImage from "../../assets/image/logo.svg";
import styles from "./index.module.scss";

const Header: FC<{
  onClickItem?: () => void;
}> = ({ onClickItem }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <img className={styles.logo} src={logoImage} alt="logo" />
            <span className={styles.text} onClick={onClickItem}>
              About&nbsp;DAO
            </span>
            <span className={styles.text}>Financial</span>
            <span className={styles.text}>Dashboard</span>
          </div>
          <div className={styles.headerContainer}>
            <svg
              className={styles.twitterImg}
              onClick={() => {
                handleRedirect(oHno);
              }}
            >
              <use xlinkHref="#icon-x" />
            </svg>
            {/* <svg
              className={styles.twitterImg}
              onClick={() => {
                handleRedirect(telegram);
              }}
            >
              <use xlinkHref="#icon-telegram" />
            </svg> */}
            <div className={styles.contact}>
              <span
                className={styles.social}
                onClick={() => {
                  handleRedirect(joinUs);
                }}
              >
                Join us
              </span>
            </div>
          </div>
          <svg
            className={styles.menu}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <use xlinkHref={showMenu ? "#icon-close" : "#icon-menu"} />
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>About DAO</div>
          <div className={styles.menuItem}>Financial</div>
          <div className={styles.menuItem}>Dashboard</div>
          <div className={styles.menuBottom}>
            <div className={styles.menuLeft}>
              <svg
                className={styles.twitterImg}
                onClick={() => {
                  handleRedirect(oHno);
                }}
              >
                <use xlinkHref="#icon-x" />
              </svg>
              {/* <svg
                className={styles.twitterImg}
                onClick={() => {
                  handleRedirect(telegram);
                }}
              >
                <use xlinkHref="#icon-telegram" />
              </svg> */}
            </div>
            <div className={styles.contact}>
              <span
                className={styles.social}
                onClick={() => {
                  handleRedirect(joinUs);
                }}
              >
                Join us
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
