import { Typography, Button } from '@mui/material';
import { Keys } from './Data';
import { sample } from 'lodash';
import { useState } from 'react';

const RandomKey = () => {
  const key = sample(Keys);
  return `${key}`;
};

const KeysTab = () => {
  const [randomKey, setRandomKey] = useState(RandomKey());
  return (
    <div>
      <Typography variant="h1">{randomKey}</Typography>
      <Button variant="contained" onClick={() => setRandomKey(RandomKey())}>
        New key
      </Button>
    </div>
  );
};

export default KeysTab;
