import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT = "Maïssoum";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const TitleEncrypt: React.FC = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState<string>(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="relative transition-colors hover:text-primary cursor-pointer"
    >
      {text}
    </motion.div>
  );
};

export default TitleEncrypt;
