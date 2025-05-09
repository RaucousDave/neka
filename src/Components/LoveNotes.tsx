import { motion } from "framer-motion";
import { useState } from "react";

interface LoveNotesProps {
  notes: string[]; // Array of love notes
  currentNote: string; // The current note to be displayed
}

const LoveNotes = ({ notes, currentNote }: LoveNotesProps) => {
  const [currentNoteState, setCurrentNote] = useState<string>(currentNote);

  // Function to get a random note
  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    setCurrentNote(notes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Love Note with animation */}
      <motion.div
        className="bg-gradient-to-r from-purpleGlow to-pink-500 p-10 w-[100%] rounded-xl shadow-xl max-w-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 20 }} // Start with an opacity of 0 and slightly down
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        key={currentNoteState} // Key will make it reset the animation when the note changes
        exit={{ opacity: 0, y: 20 }} // Fade out and move down when the note changes
        transition={{ duration: 1.0 }} // Duration of the transition
      >
        <p className="text-3xl font-heading font-black italic text-white">
          {currentNoteState}
        </p>
      </motion.div>

      {/* Button to generate a new note */}
      <button
        className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-purpleGlow to-pink-500 text-white font-semibold font-heading text-lg shadow-xl hover:scale-110 transform transition duration-300"
        onClick={getRandomNote}
      >
        Generate New Note 💌
      </button>
    </div>
  );
};

export default LoveNotes;
