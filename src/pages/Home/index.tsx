import { FC, useState } from "react";
import aboutImg from "./../../assets/image/about.png";
import bannerImage from "./../../assets/image/banner.png";
import emptyImg from "./../../assets/image/blank.png";
import pointsImg from "./../../assets/image/points.png";
import jamesImg from "./../../assets/image/members/James.png";
import kirsImg from "./../../assets/image/members/Kirs.png";
import lafeeImg from "./../../assets/image/members/Lafee.png";
import LinKinoImg from "./../../assets/image/members/LinKino.png";
import LumiereImg from "./../../assets/image/members/Lumiere.png";
import MissYuanImg from "./../../assets/image/members/MissYuan.png";
import ShamanImg from "./../../assets/image/members/Shaman.png";
import UserProfilesGrid from "../Memes";
import spImg from "./../../assets/image/spores.png";
import styles from "./index.module.scss";
import bottomBg from "./../../assets/image/mushrooms.png";
const taskCategories = [
  {
    title: "Marketing Tasks",
    tasks: [
      { name: "Article translation", points: 10 },
      { name: "In-depth article analysis", points: "100-300" },
      { name: "AMA participation or organization", points: "150-300" },
      { name: "Regional globalization operation", points: 500 },
      { name: "User education and guidance", points: 50 },
    ],
  },
  {
    title: "Community Tasks",
    tasks: [
      { name: "MOD-A", points: 500 },
      { name: "MOD-B", points: 300 },
      { name: "Active user contribution", points: 50 },
      { name: "User education and guidance", points: 50 },
      { name: "Campaigns", points: "300-500" },
    ],
  },
  {
    title: "Development Tasks",
    tasks: [
      { name: "Frontend", points: "" },
      { name: "Backend", points: "" },
      { name: "QA / Test", points: "" },
      { name: "UI", points: "" },
    ],
  },
  {
    title: "Other Tasks",
    tasks: [{ name: "Coming soon", points: 0 }],
  },
];
const memebers = [
  {
    id: "1",
    name: "Lumière",
    role: "Mod",
    avatarUrl: LumiereImg,
    twitter: undefined,
  },
  {
    id: "2",
    name: "James",
    role: "Mod",
    avatarUrl: jamesImg,
    twitter: "https://x.com/staffjames5",
  },
  {
    id: "3",
    name: "Shaman",
    role: "Mod",
    avatarUrl: ShamanImg,
    twitter: "https://x.com/shaman_dp",
  },
  {
    id: "4",
    name: "Lafee",
    role: "Mod",
    avatarUrl: lafeeImg,
    twitter: undefined,
  },
  {
    id: "5",
    name: "Miss Yuan",
    role: "Mod interns",
    avatarUrl: MissYuanImg,
    twitter: undefined,
  },
  {
    id: "6",
    name: "LinKino",
    role: "Mod interns",
    avatarUrl: LinKinoImg,
    twitter: "https://x.com/lencho49578895",
  },
  {
    id: "7",
    name: "Kirs",
    role: "Product manager",
    avatarUrl: kirsImg,
    twitter: undefined,
  },
];
const Home: FC = () => {
  return (
    <div className={styles.page}>
      <img className={styles.bannerImage} src={bannerImage} alt="" />
      <div className={styles.banner}>
        <div className={styles.topContainer}>
          <img className={styles.spImg} src={spImg} alt="spImg"></img>
          <div className={styles.spTxtContainer}>
            <span className={styles.topTxt}>Building Together</span>
            <span className={styles.subTxt}>
              profit sharing and innovation with{" "}
              <span style={{ color: "#FFE1BD" }}>Autonomous</span>{" "}
              <span style={{ color: "#F25AA4" }}>Spores</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.topMem}>
          <span className={styles.memTitle}>Leaderboard</span>
          <div className={styles.tableTitle}>
            <span className={styles.leftTitle}>Rank</span>
            <span className={styles.leftTitle}>Name</span>
            <span className={styles.centerTitle}>Points</span>
          </div>
          <div className={styles.tableContent}>
            <img src={emptyImg} className={styles.emptyImg} alt="empty" />
            <span className={styles.emptyText}>
              The list will be made public soon and points will be awarded
            </span>
          </div>
        </div>
        <div className={styles.aboutDao}>
          <img className={styles.aboutImg} alt="img" src={aboutImg}></img>
          <div className={styles.aboutLeft}>
            <span className={styles.aboutTitle}>About Spores DAO</span>
            <span className={styles.aboutItemTitle}>
              Join the Spores DAO: Rewarding Contributions, Empowering Community
            </span>
            <span className={styles.aboutItemSubTitle}>
              We’re thrilled to announce the launch of the Spores DAO, bringing
              together early active members to help shape its foundation. The
              DAO will serve as the foundation for our profit-sharing structure,
              ensuring that contributions from core members are recognized and
              rewarded.
            </span>
            <span className={styles.aboutItemTitle}>
              How Contributions Are Measured and Rewards Are Distributed
            </span>
            <span className={styles.aboutItemSubTitle}>
              <span
                style={{
                  color: "#FFE1BD",
                  fontFamily: "Inter-Bold",
                }}
              >
                Points System
              </span>
              : Contributions will be measured through a points system that
              refreshes monthly. The more you contribute, the more points you
              earn, increasing your share of the profits.
            </span>
            <span className={styles.aboutItemSubTitle}>
              <span
                style={{
                  color: "#F25AA4",
                  fontFamily: "Inter-Bold",
                }}
              >
                NFTs for Core Contributors:
              </span>{" "}
              <span
                style={{
                  color: "#fff",
                  fontFamily: "Inter-Bold",
                }}
              >
                Honorary NFTs
              </span>{" "}
              will be granted to standout contributors, especially those
              actively engaged early with Autonomous Spores.<br></br> These NFTs
              will come out with GTD WL and serve as a badge of distinction in
              the Autonomous Spores community.
            </span>
            <span className={styles.aboutItemSubTitle}>
              By joining the Autonomous Spores DAO, you can become a key part of
              this growing ecosystem, earn recognition, and share in the success
              of our journey. Be one of the pioneers of the Spores DAO!
            </span>
          </div>
        </div>
        <div className={styles.memeber}>
          <UserProfilesGrid profiles={memebers} />
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <div className={styles.topMem}>
          <span className={styles.memTitle}>Leaderboard</span>
          <div className={styles.tableTitle}>
            <span className={styles.leftTitle}>Rank</span>
            <span className={styles.leftTitle}>Name</span>
            <span className={styles.centerTitle}>Points</span>
          </div>
          <div className={styles.tableContent}>
            <img src={emptyImg} className={styles.emptyImg} alt="empty" />
            <span className={styles.emptyText}>
              The list will be made public soon and points will be awarded
            </span>
          </div>
        </div>
        <div className={styles.aboutDao}>
          <div className={styles.aboutLeft}>
            <span className={styles.aboutTitle}>About Spores DAO</span>
            <span className={styles.aboutItemTitle}>
              Join the Spores DAO: Rewarding Contributions, Empowering Community
            </span>
            <span className={styles.aboutItemSubTitle}>
              We’re thrilled to announce the launch of the Spores DAO, bringing
              together early active members to help shape its foundation. The
              DAO will serve as the foundation for our profit-sharing structure,
              ensuring that contributions from core members are recognized and
              rewarded.
            </span>
            <span className={styles.aboutItemTitle}>
              How Contributions Are Measured and Rewards Are Distributed
            </span>
            <span className={styles.aboutItemSubTitle}>
              <span
                style={{
                  color: "#FFE1BD",
                  fontFamily: "Inter-Bold",
                }}
              >
                Points System
              </span>
              : Contributions will be measured through a points system that
              refreshes monthly. The more you contribute, the more points you
              earn, increasing your share of the profits.
            </span>
            <span className={styles.aboutItemSubTitle}>
              <span
                style={{
                  color: "#F25AA4",
                  fontFamily: "Inter-Bold",
                }}
              >
                NFTs for Core Contributors:
              </span>{" "}
              <span
                style={{
                  color: "#fff",
                  fontFamily: "Inter-Bold",
                }}
              >
                Honorary NFTs
              </span>{" "}
              will be granted to standout contributors, especially those
              actively engaged early with Autonomous Spores.<br></br> These NFTs
              will come out with GTD WL and serve as a badge of distinction in
              the Autonomous Spores community.
            </span>
            <span className={styles.aboutItemSubTitle}>
              By joining the Autonomous Spores DAO, you can become a key part of
              this growing ecosystem, earn recognition, and share in the success
              of our journey. Be one of the pioneers of the Spores DAO!
            </span>
          </div>

          <img className={styles.aboutImg} alt="img" src={aboutImg}></img>
        </div>
        <div className={styles.memeber}>
          <UserProfilesGrid profiles={memebers} />
        </div>
      </div>
      <img src={bottomBg} alt="bottomBg" className={styles.bottomContainer}/>
      <div className={styles.mobileBottomContent}>
        <div className={styles.bContent}>
          <span className={styles.bTitle}>Tasks</span>
          <div className={styles.bTableContainer}>
           
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-teams" />
                  </svg>
                  <span>Marketing Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[0].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
              </div>
            
     
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-dialog" />
                  </svg>
                  <span>Community Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[1].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
              </div>
            
          </div>

          <div className={styles.bTableContainer}>
          
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-code" />
                  </svg>
                  <span>Development Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[2].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
                <div className={styles.itemDes}>
                  The development mentioned here pertains to contributions and
                  submissions for the Spores DAO Contributor Leaderboard,
                  excluding any tasks related to AI Agent Swarm development.
                </div>
              </div>
        
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-box_o" />
                  </svg>
                  <span>Other Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                <div className={styles.itemEmpty}>
                  <img src={emptyImg} className={styles.emptyImg} alt="empty" />
                  <span className={styles.emptyText}>Coming soon</span>
                </div>
              </div>
         
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bContent}>
          <span className={styles.bTitle}>Tasks</span>
          <div className={styles.bTableContainer}>
         
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-teams" />
                  </svg>
                  <span>Marketing Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[0].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
              </div>
     
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-dialog" />
                  </svg>
                  <span>Community Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[1].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
              </div>
         
          </div>

          <div className={styles.bTableContainer}>
         
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-code" />
                  </svg>
                  <span>Development Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                {taskCategories[2].tasks.map((_value) => {
                  return (
                    <div className={styles.itemContainerC} key={_value.name}>
                      <span className={styles.itemTxt}>{_value.name}</span>
                      <div className={styles.itemTxt}>
                        <img
                          className={styles.itemIcon}
                          alt=""
                          src={pointsImg}
                        ></img>
                        <span> {_value.points}</span>
                      </div>
                      <span className={styles.itemClaimRed}>Claim Task</span>
                    </div>
                  );
                })}
                <div className={styles.itemDes}>
                  The development mentioned here pertains to contributions and
                  submissions for the Spores DAO Contributor Leaderboard,
                  excluding any tasks related to AI Agent Swarm development.
                </div>
              </div>
   
        
              <div className={styles.tableItem}>
                <div className={styles.itemTitle}>
                  <svg className={styles.itemTitleIcon}>
                    <use xlinkHref="#icon-box_o" />
                  </svg>
                  <span>Other Tasks</span>
                </div>
                <div className={styles.itemContainer}>
                  <span className={styles.itemTxt}>Task</span>
                  <span className={styles.itemTxt}>Points</span>
                  <span className={styles.itemTxt}></span>
                </div>
                <div className={styles.itemEmpty}>
                  <img src={emptyImg} className={styles.emptyImg} alt="empty" />
                  <span className={styles.emptyText}>Coming soon</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
