"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BarChart2, CheckCircle, Pause, Play, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/TypoBlast.png";

const fullText =
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Sphinx of black quartz, judge my vow. The five boxing wizards jump quickly. Jinxed wizards pluck ivy from the big quilt. Quick zephyrs blow, vexing daft Jim. Two driven jocks help fax my big quiz. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch Jeopardy!, Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him.";

export default function TypingChallenge() {
  const [inputText, setInputText] = useState("");
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isStopped, setIsStopped] = useState(false);
  const [revealedText, setRevealedText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const textDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && !isStopped) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isStopped]);

  useEffect(() => {
    const words = fullText.split(" ");
    const currentWordIndex = inputText.trim().split(" ").length;
    const revealedWords = words.slice(
      0,
      Math.min(currentWordIndex + 2, words.length)
    );
    setRevealedText(revealedWords.join(" "));

    if (textDisplayRef.current) {
      textDisplayRef.current.scrollTop = textDisplayRef.current.scrollHeight;
    }
  }, [inputText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setInputText(currentText);

    if (!isActive && !isStopped) setIsActive(true);

    const words = currentText.trim().split(/\s+/);
    setWordCount(words.length);

    let correctChars = 0;
    for (let i = 0; i < currentText.length; i++) {
      if (currentText[i] === fullText[i]) correctChars++;
    }
    setAccuracy(Math.round((correctChars / currentText.length) * 100) || 100);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const toggleChallenge = () => {
    setIsStopped((prev) => !prev);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <main
        className="minh-screen lg:max-h-[100vh] "
        style={{
          background:
            "linear-gradient(165deg, #1D0028 5%, #1D0028 60%, rgba(102, 0, 142, 0.7) 100%)",
        }}
      >
        <header className="pl-8 pt-4">
          <Image
            onClick={() => window.location.assign("/")}
            src={Logo}
            alt="Typo Blast"
            width={80}
            height={80}
          />
        </header>
        <div className=" flex flex-col items-center justify-center p-4 text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Type now to start the challenge
          </motion.h1>

          <motion.div
            ref={textDisplayRef}
            className="w-full max-w-3xl mb-8 text-xl md:text-2xl text-purple-200 text-left leading-relaxed h-32 overflow-y-auto p-4  rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence>
              {revealedText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className={
                    index < inputText.length
                      ? inputText[index] === char
                        ? "text-green-400"
                        : "text-red-400"
                      : "text-purple-300"
                  }
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="w-full max-w-3xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type to start.."
              disabled={isStopped}
              className="w-full p-4 rounded-full bg-purple-700 bg-opacity-50 text-white placeholder-purple-300 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 disabled:opacity-50"
            />
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={toggleChallenge}
              className="px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isStopped ? (
                <Play className="w-5 h-5 mr-2" />
              ) : (
                <Pause className="w-5 h-5 mr-2" />
              )}
              {isStopped ? "Resume" : "Stop"}
            </motion.button>
            {isStopped && (
              <Link href="/">
                <motion.button
                  className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </motion.button>
              </Link>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between w-full max-w-3xl mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Clock className="w-6 h-6 mb-2 text-purple-300" />
              <div className="text-sm mb-1 text-purple-300">Time</div>
              <motion.div
                className="text-2xl font-bold"
                key={timer}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {formatTime(timer)}
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <BarChart2 className="w-6 h-6 mb-2 text-purple-300" />
              <div className="text-sm mb-1 text-purple-300">WPM</div>
              <motion.div
                className="text-2xl font-bold"
                key={wordCount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {Math.round(wordCount / (timer / 60) || 0)}
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <CheckCircle className="w-6 h-6 mb-2 text-purple-300" />
              <div className="text-sm mb-1 text-purple-300">Accuracy</div>
              <motion.div
                className="text-2xl font-bold"
                key={accuracy}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {accuracy}%
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
