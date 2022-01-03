import { CardContent, Card, Typography, Button } from '@mui/material';
import { Accidentals, Notes } from './Data';
import { sample } from 'lodash';
import { useState } from 'react';

const RandomKey = () => {
  const tonic = sample(Notes);
  const accidental = sample(Accidentals);
  return `${tonic}${accidental}`;
};

const KeysTab = () => {
  const [randomKey, setRandomKey] = useState(RandomKey());
  return [
    <Typography variant="h1">{randomKey}</Typography>,
    <Button variant="contained" onClick={() => setRandomKey(RandomKey())}>
      New key
    </Button>
  ];
};

export default KeysTab;
