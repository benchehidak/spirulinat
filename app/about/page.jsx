"use client";
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { AccountBalance, People, ContactMail, Visibility } from '@mui/icons-material';

export default function about() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed">
      <Container className="bg-white bg-opacity-0 p-8 rounded-lg shadow-2xl max-w-6xl mt-0 mb-10">
        <div className="text-center mb-12 mt-0 px-4">
          <Typography 
            variant="h2" 
            component="h1" 
            className="mb-4 font-extrabold" 
            style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }} >
            LES LABORATOIRES <span className="font-bold">SPIRUNAT</span>
          </Typography>
          <Typography 
            variant="h6" 
            component="h2" 
            className="mb-8" 
            style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }} >
            L'énergie de la nature, au service de votre bien-être        
          </Typography>
        </div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#00000000' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AccountBalance className="text-white mr-2" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
Pionnier de la Micronutrition et des Cosmétiques Naturels                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  className="text-sm mb-4 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Chez Laboratoires SPIRUNAT, nous nous engageons à offrir des solutions naturelles et efficaces pour soutenir votre bien-être. Spécialisés dans la formulation de compléments alimentaires à base de spiruline, nous mettons en avant notre produit phare : la spiruline en comprimé, enrichie d'une teneur exceptionnelle de 30 % en phycocyanine. Notre objectif est d'améliorer la santé et la vitalité de nos clients grâce à des ingrédients de haute qualité, sélectionnés avec soin.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#00000000' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Visibility className="text-white mr-2" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
La Spiruline: Un Super-Aliment pour Tous*</Typography>
                </div>
                <Typography
                  variant="body2"
                  className="text-sm mb-4 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >


La spiruline, une micro-algue aux propriétés extraordinaires, est reconnue pour sa richesse en protéines, vitamines, minéraux et antioxydants. Grâce à notre haute concentration en phycocyanine, un pigment bleu aux vertus antioxydantes puissantes, nos comprimés aident à renforcer le système immunitaire, favoriser la détoxification et améliorer la récupération après l'effort. Que vous soyez un athlète cherchant à optimiser vos performances ou une personne souhaitant soutenir sa santé cognitive, notre spiruline répond à vos besoins spécifiques.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#00000000' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <People className="text-white mr-2" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Our Team
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  className="text-sm mb-4 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Landwise is powered by a diverse team of experts in finance, technology, and customer service. Our team is dedicated to providing exceptional service and continually improving our platform to meet the evolving needs of our users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Divider className="my-8 w-full" />

          <Grid item xs={12}>
            <Card className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#00000000' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ContactMail className="text-white mr-2" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Contact Us
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  className="text-sm mb-4 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us at <a href="mailto:contact@landwise.com" className="text-indigo-700">contact@landwise.com</a>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
