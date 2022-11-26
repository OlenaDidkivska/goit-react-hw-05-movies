import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './App.styled';
import { Header } from './Header/Header';

const baseURL = 'https://image.tmdb.org/t/p/w';

export const imgSrc = (width, poster_path) => {
  return `${baseURL}${width}${poster_path}`;
};

export const blankPhoto = (width, height) => {
  return `https://via.placeholder.com/${width}x${height}`;
};
export const SharedLayout = () => {
  return (
    <Container>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
