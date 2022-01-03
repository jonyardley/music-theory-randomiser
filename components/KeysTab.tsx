import { CardContent, Card, Typography } from '@mui/material';
import { Accidentals, Notes } from './Data';
import { sample } from 'lodash';

const RandomKey = () => {
  const tonic = sample(Notes);
  const accidental = sample(Accidentals);
  return `${tonic}${accidental}`;
};

const KeysTab = () => <Typography variant="h1">{RandomKey()}</Typography>;

export default KeysTab;
