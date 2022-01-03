import { Container, Typography } from '@mui/material';
import ModeTabs from '../components/ModeTabs';

const Home = () => (
  <Container maxWidth="xl">
    <Typography variant="h3">Music Theory Randomiser</Typography>
    <ModeTabs />
  </Container>
);

export default Home;
