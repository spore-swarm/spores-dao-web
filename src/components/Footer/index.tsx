import { FC } from "react";
import { cat, grassian, joinUs, oHno, oozeborn, saya } from "../../app/config";
import { handleRedirect } from "../../app/util";
import logoImg from "./../../assets/image/logo.svg";
import styles from "./index.module.scss";
const links = [
  {
    title: "DAO",
    items: [
      { name: "About DAO", link: "" },
      { name: "Financial", link: "" },
      { name: "Dashboard", link: "" },
      { name: "Join us", link: joinUs },
    ],
  },
  {
    title: "Twitter",
    items: [
      { name: "Autonomous Spores", link: oHno },
      { name: "Oozeborn", link: oozeborn },
      { name: "Saya", link: saya },
      { name: "Grassian", link: grassian },
      { name: "Jaguarundi", link: cat },
    ],
  },
  // { title: "Community", items: [{ name: "Telegram", link: telegram }] },
];

const Footer: FC<{
  onClickAbout?: () => void;
}> = ({ onClickAbout }) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.item}>
            {" "}
            <img className={styles.logo} src={logoImg} alt=""></img>
          </div>
          {links.map((_item) => {
            return (
              <div className={styles.item} key={_item.title}>
                <div className={styles.itemTitle}>{_item.title}</div>
                {_item.items.map((_task, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.itemContent}
                      onClick={() => {
                        if (_task.name === "Join us") {
                          handleRedirect(joinUs);
                        } else if (_task.name === "About DAO") {
                          onClickAbout?.();
                        } else {
                          handleRedirect(_task.link);
                        }
                      }}
                    >
                      {_task.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.mobileContainer}>
          <img className={styles.logo} src={logoImg} alt=""></img>
          <div className={styles.itemContent}>
            {links.map((_item,index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.itemTitle}>{_item.title}</div>
                  {_item.items.map((_task) => {
                    return (
                      <div
                        className={styles.itemContentTxt}
                        key={_task.name}
                        onClick={() => {
                          if (_task.name === "Join us") {
                            handleRedirect(joinUs);
                          } else if (_task.name === "About DAO") {
                            onClickAbout?.();
                          } else {
                            handleRedirect(_task.link);
                          }
                        }}
                      >
                        {_task.name}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.copyRight}>
          © {new Date().getFullYear()} sporeswarm.com All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
