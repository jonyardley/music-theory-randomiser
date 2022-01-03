import { Typography, Button } from '@mui/material';
import { Accidentals, Intervals, Notes } from './Data';
import { sample } from 'lodash';
import { useState } from 'react';

const RandomInterval = () => {
  const tonic = sample(Notes);
  const accidental = sample(Accidentals);
  const interval = sample(Intervals);
  const quality = sample(interval.quality);
  return `${quality} ${interval.name} above ${tonic}${accidental} `;
};

const IntervalsTab = () => {
  const [randomInterval, setRandomInterval] = useState(RandomInterval());
  return (
    <div>
      <Typography variant="h2" mb={2}>
        {randomInterval}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setRandomInterval(RandomInterval())}
      >
        New interval
      </Button>
    </div>
  );
};

export default IntervalsTab;
