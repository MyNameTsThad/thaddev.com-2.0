import {Timeline, Tooltip} from "flowbite-react";
import styles from "../styles/Technologies.module.css";
import {FaUnity} from "react-icons/fa";
import Image from "next/image";
import React from "react";

export const Technologies = () => {
  return (
    <>
      <Timeline.Title className={styles.header}>
        Technologies
      </Timeline.Title>
      <Timeline.Body className={styles.subheader}>
        I have worked with technologies that would consider myself a Full-stack developer, with the exception of
        databases. However, I also design and develop games and mods for them in my spare time.
      </Timeline.Body>
      {/*custom logo grid for different logos for technologies*/}
      <div className={styles.grid}>
        <Tooltip content={<p style={{fontSize: "small"}}>Java</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://www.vectorlogo.zone/logos/java/java-icon.svg" width={45} height={45} loading={"lazy"} alt={"java"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>Javascript</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg"
                   width={45} height={45} loading={"lazy"} alt={"javascript"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>C#</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://cdn.worldvectorlogo.com/logos/c--4.svg" width={45} height={45}
                   loading={"lazy"} alt={"c#"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>ReactJS</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width={45} height={45}
                   loading={"lazy"} alt={"reactjs"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>Unity</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <FaUnity size={45} color={"#fff"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>Spring Boot</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width={45} height={45}
                   loading={"lazy"} alt={"spring boot"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>FabricMC</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://cloud.thaddev.com/s/k4dKKFGJY7r7HdS/preview" width={45} height={45} loading={"lazy"} alt={"fabricmc"}/>
          </div>
        </Tooltip>
        <Tooltip content={<p style={{fontSize: "smaller"}}>Minecraft Forge</p>} placement="bottom" arrow={true}>
          <div className={styles.logo}>
            <Image src="https://avatars.githubusercontent.com/u/1390178?s=200&v=4" width={45} height={45}
                   loading={"lazy"} alt={"forge"}/>
          </div>
        </Tooltip>
      </div>
    </>
  )
}