import styles from "../styles/About.module.css";
import React from "react";

export const About = () => {
  // use intersection observer to trigger animation upon entering viewport
  const [isIntersecting, setIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  });

  return (
    <div className={styles.box} ref={ref} id="about">
      <h1 className={styles.header + " " + (isIntersecting ? styles.show : styles.hidden)}>Who am I?</h1>
      <div className={styles.stagger + " " + (isIntersecting ? styles.show : styles.hidden) + " " + styles.text}>
        I am a 14 year old from Thailand, currently studying in 9th grade.
        <br/>
        I have a passion for programming since I was 9, So naturally I have interest in anything computer-related.
        <br/>
        I like games (I am a Minecraft modder and player) and strive for good looking UIs.
        <br/>
        <i>also loves to cosplay being a sysadmin :)</i>
      </div>
    </div>
  )
}