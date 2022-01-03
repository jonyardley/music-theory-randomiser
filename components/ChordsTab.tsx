import { Typography, Button } from '@mui/material';
import { Accidentals, ChordQuality, Notes } from './Data';
import { sample } from 'lodash';
import { useState } from 'react';

const RandomChord = () => {
  const tonic = sample(Notes);
  const accidental = sample(Accidentals);
  const quality = sample(ChordQuality);
  return `${tonic}${accidental} ${quality}`;
};

const ChordsTab = () => {
  const [randomChord, setrandomChord] = useState(RandomChord());
  return (
    <div>
      <Typography variant="h2" mb={2}>
        {randomChord}
      </Typography>
      <Button variant="contained" onClick={() => setrandomChord(RandomChord())}>
        New chord
      </Button>
    </div>
  );
};

export default ChordsTab;
