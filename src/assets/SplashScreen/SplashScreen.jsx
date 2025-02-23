import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish(); // Notify parent when splash ends
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="splash-content">
            <motion.img
              src="logo1.png" 
              alt="Logo"
              className="splash-logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Welcome to Patas.lk
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
