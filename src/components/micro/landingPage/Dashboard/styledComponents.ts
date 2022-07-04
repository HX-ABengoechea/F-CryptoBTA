import { styled } from '@mui/material/styles';
import { Box, Typography, Card } from '@mui/material';

export const Container = styled(Box)`
   width: 100vw;
   height: 88.5vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const SubContainer = styled(Box)`
   width: 50vw;
   height: 88.5vh;
   background-color: yellow;
`;

export const ActivityDetailBox = styled(Box)`
   width: 50vw;
   height: 88.5vh;
   padding: 1rem;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-around;
`;

export const CardBox = styled(Card)`
   width: 7rem;
   height: 9rem;
   background-color: #1a1a1a;
   padding: 0rem;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`;

export const CoinNumber = styled(Typography)`
   font-size: 1rem;
   color: white;
   font-weight: 400;
   font-weight: bold;
`;

export const CoinLogo = styled('img')`
   width: 4rem;
   margin-left: -0.01rem;
`;

export const CoinName = styled(Typography)`
   font-size: 1rem;
   color: white;
   font-weight: 400;
`;
