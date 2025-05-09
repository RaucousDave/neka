import { useState } from "react";
import { motion } from "framer-motion";
import loveNotes from "./Components/loveNotes"; // The array of love notes
import ShareButton from "./Components/ShareButton";
import LoveNotes from "./Components/LoveNotes";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [currentNote, setCurrentNote] = useState<string | null>(null);

  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    setCurrentNote(loveNotes[randomIndex]);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gradient-to-r from-purpleGlow to-pink-500 bg-breathing bg-cover bg-center text-white font-heading p-4">
      {!isReady ? (
        <motion.div
          className="flex flex-col items-center justify-center text-center gap-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-textGlow">Hey Babe 💖</h1>
          <p className="text-lg font-semibold w-[80%]">
            It's our anniversary! Yesterday was a demo, but today is special, so
            I had to go above and beyond. Let’s celebrate!
          </p>
          <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purpleGlow to-pink-500 text-white font-semibold text-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            onClick={() => {
              setIsReady(true);
              getRandomNote();
            }}
          >
            Ready for a Surprise? 🎉
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center text-center gap-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-black mb-6 text-textGlow">
            Love Note of the Day 💌
          </h1>

          {/* Love Note Component */}
          <LoveNotes
            notes={loveNotes}
            currentNote={currentNote || "No note yet"}
          />

          {/* Favorite Button */}

          {/* Share Button */}
          <ShareButton currentNote={currentNote!} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
