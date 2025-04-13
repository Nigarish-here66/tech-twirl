import React from 'react';
import styles from '../styles/Teams.module.css';

import TeamsHeroSection from '../components/TeamsHeroSection';
import TeamMember from '../components/TeamMember';
import Testimonals from '../components/Testimonals';
import CommitmentImage from '../assets/commitment.jpg';

const Teams = () => {
    return (
        <div>
            <TeamsHeroSection />
            <div className={styles.container}>
                <div className={styles.aboutUsSection}>
                    <h2 className={styles.aboutTitle}>About us</h2>
                    <p className={styles.aboutDescription}>
                        Tech Twirl is known as the well-established software house in Pakistan. We started our journey on September 2015 with an ambition to provide best-quality web services in Pakistan and develop a trustworthy strategic relationship. Due to new inventions in technology, all barriers of communication are eliminated and the world has become a global village. Many countries started outsourcing their IT departments to developing nations for making it cheaper and reliable for them due the higher currency rates. Tech Twirl is well respected and considered as the top-ranked software house in Pakistan. <br /><br />
                        <span className={styles.highlight}> Tech Twirl software house</span> was established in 2015 in Pakistan. With the extension of work, Tech Twirl got registered in 2017 (PSEB). Tech Twirl software house is providing a wide range of services including website development, web designing, mobile apps development, search engine optimization (SEO), digital marketing including social media marketing (SMM) and much more.
                    </p>
                    </div>
                <TeamMember />
                <section className={styles.commitmentSection}>
                    <div className={styles.commitmentContent}>
                        <div className={styles.commitmentImage}>
                            <img src={CommitmentImage} alt="Team Group" />
                        </div>
                        <div className={styles.commitmentText}>
                        <h2>Our Commitment To Excellence</h2>
                            <div className={styles.teamsAnimatedUnderline}>
                            <div className={styles.teamsUnderlineDot}></div>
                            </div>
                            <p>
                                At Tech Twirl Technologies, our success is driven by the exceptional talent and dedication of our team members.
                                Together, we are a dynamic force, united by a common vision to innovate, create, and deliver cutting-edge software
                                solutions that transform businesses and shape the future of technology.
                            </p>
                            <p>
                                We hold ourselves to the highest standards, ensuring that our work is not only technically sound but also aligned
                                with our clients' unique goals and challenges. Our commitment to quality and attention to detail is reflected in
                                every line of code we write and every project we deliver.
                            </p>
                            <p>
                                Meet the individuals who make Tech Twirl Technologies the industry leader it is today. Together, we're shaping the
                                future of technology, one innovative solution at a time.
                            </p>
                        </div>
                    </div>
                </section>
                <Testimonals />
            </div>
        </div>
    );
};

export default Teams;
