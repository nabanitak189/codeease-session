import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.35 }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <StartScreen />
            </PageWrapper>
          }
        />
        <Route
          path="/game"
          element={
            <PageWrapper>
              <GameScreen />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
