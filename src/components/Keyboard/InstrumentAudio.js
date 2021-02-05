import  { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null);
  useEffect(() => {
    setInstrumentPlayer(AudioPlayer());
  }, []);

  useEffect(() => {
    if (instrumentPlayer) {
      setInstrument();
      playNotes();
    }
  }, );

  useEffect(() => {
    if (notes && notes.length > 0) {
      playNotes();
    }
  }, );

  const setInstrument = () => {
    instrumentPlayer.setInstrument(instrumentName);
  };

  const playNotes = () => {
    if (instrumentPlayer) {
      instrumentPlayer.playNote(notes[0]);
    }
  };

  return null;
};

export default InstrumentAudio;
