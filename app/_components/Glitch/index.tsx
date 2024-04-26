"use client";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className="flex-[2] mr-auto relative hidden md:flex">
      <div
        className={styles.cGlitch}
        style={{
          backgroundImage:
            "url('./assets/avatar.jpg')",
        }}
      >
        <div
          className={styles.cGlitchImg}
          style={{
            backgroundImage:
              "url('./assets/avatar.jpg')",
          }}
        ></div>
        <div
          className={styles.cGlitchImg}
          style={{
            backgroundImage:
              "url('./assets/glitch/1.jpg')",
          }}
        ></div>
        <div
          className={styles.cGlitchImg}
          style={{
            backgroundImage:
              "url('./assets/glitch/3.jpg')",
          }}
        ></div>
        <div
          className={styles.cGlitchImg}
          style={{
            backgroundImage:
              "url('./assets/avatar.jpg')",
          }}
        ></div>
        <div
          className={styles.cGlitchImg}
          style={{
            backgroundImage:
              "url('./assets/avatar.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
}
