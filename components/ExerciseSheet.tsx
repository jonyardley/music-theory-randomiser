import { Typography } from '@mui/material';
import { Key } from '@tonaljs/tonal';
import { sampleSize, sample, union, compact } from 'lodash';
import { Accidentals, Intervals, Inversions, KEYS, Notes } from './Data';

const randomKeys = (num: number) => {
  const keyObjects = sampleSize(KEYS, num);
  const keys = keyObjects.map(({ type, name }) =>
    type === 'minor' ? Key.minorKey(name) : Key.majorKey(name)
  );
  return keys;
};

const randomInterval = () => {
  const tonic = sample(Notes);
  const accidental = sample(Accidentals);
  const interval = sample(Intervals);
  const quality = sample(interval.quality);
  return `${quality} ${interval.name} above ${tonic}${accidental}`;
};

const randomChordsFromKey = (key: any, num: number) => {
  const relevantChords =
    key.type === 'minor'
      ? union(key.natural.chords, key.harmonic.chords, key.melodic.chords)
      : union(
          key.chords,
          key.secondaryDominants,
          key.secondaryDominantsMinorRelative
        );
  const chords = sampleSize(compact(relevantChords), num);
  return chords;
};

const ExerciseSheet = () => {
  return (
    <div>
      <Typography variant="h4" mb={2}>
        Exercise Sheet
      </Typography>
      <Typography mb={2}>
        Notate the following intervals and chords in the given keys:
      </Typography>

      {randomKeys(4).map((key) => (
        <div key={`${key.tonic}-${key.type}`}>
          <Typography variant="h6">
            {key.tonic} {key.type}
          </Typography>
          <Typography>Intervals:</Typography>
          <ol>
            {[...Array(6)].map((v, i) => (
              <li key={`${v}-${i}`}>
                <Typography>{randomInterval()}</Typography>
              </li>
            ))}
          </ol>

          <Typography>Chords:</Typography>
          <ol>
            {randomChordsFromKey(key, 6).map((chord, i) => (
              <li key={`${chord}-${i}`}>
                <Typography>
                  {chord} - <i>{sample(Inversions)}</i>
                </Typography>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ExerciseSheet;
