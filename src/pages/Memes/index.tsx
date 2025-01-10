import React from "react";
import styles from "./index.module.scss";
import { handleRedirect } from "../../app/util";

interface UserProfile {
  id: string;
  name: string;
  role?: string;
  avatarUrl?: string;
  twitter?: string;
}

interface UserProfilesGridProps {
  profiles: UserProfile[];
}

const UserProfilesGrid: React.FC<UserProfilesGridProps> = ({ profiles }) => {
  return (
    <section className={styles.grid}>
      {profiles.map((profile) => (
        <div key={profile.id} className={styles.profileCard}>
          <img
            src={profile.avatarUrl}
            alt={`${profile.name}'s avatar`}
            className={styles.avatar}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>{profile.name}</span>
            <div className={styles.role}>
              <span>{profile.role}</span>
              {profile.twitter && (
                <svg
                  className={styles.twitterImg}
                  onClick={() => {
                    handleRedirect(profile.twitter);
                  }}
                >
                  <use xlinkHref="#icon-x" />
                </svg>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserProfilesGrid;
