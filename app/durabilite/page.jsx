import React from 'react';
import { Typography } from '@mui/material';

export default function Durabilite() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-12 mt-8 px-4">
        <Typography
          variant="h2"
          component="h1"
          className="mb-4 font-extrabold"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }}
        >
          LES LABORATOIRES <span className="font-bold">SPIRUNAT</span>
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          className="mt-12"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }}
        >
          Soutenez votre santé, préservez notre planète
        </Typography>
      </div>

      <Typography
        variant="h5"
        className="text-white text-center mb-6"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Un Engagement Fort envers les Objectifs de Développement Durable (SDG)
      </Typography>
      <Typography
        variant="body1"
        className="text-white text-center mb-6 px-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Chez SPIRUNAT, nous avons pleinement intégré les Objectifs de Développement Durable (SDG) des Nations Unies dans notre approche, afin de contribuer à un avenir plus respectueux de la planète et des générations futures.
      </Typography>
      <img src="/assets/images/sdgs.png" alt="SDGs" className="mx-auto mb-8" />

      <div className="footer text-center">
        <Typography
          variant="body2"
          className="text-white text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Engageons-nous pour un avenir meilleur.
        </Typography>
      </div>
    </div>
  );
}
