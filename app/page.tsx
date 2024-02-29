'use client';
import React from 'react';
import CarTable from './components/CarTable';
import CarTableMobile from './components/CarTableMobile';

import 'tailwindcss/tailwind.css'; 

export default function Home() {

  // Array de objetos contendo as propriedades de cada carro
  const carsData = [
    {
      imagePath: "./mini-cooper-2020.jpg", // Atualização do imagePath
      altText: "Mini Cooper 2020", // Descrição da imagem
      reservationDate: "01/02",
      available: true,
      rating: 4,
      model: "Mini Cooper 2020" // Modelo do carro
    },
    {
      imagePath: "./mini-cooper-2020.jpg", // Atualização do imagePath
      altText: "Mini Cooper 2020", // Descrição da imagem
      reservationDate: "02/02",
      available: false,
      rating: 3,
      model: "Mini Cooper 2020" // Modelo do carro
    },
    {
      imagePath: "./mini-cooper-2020.jpg", // Atualização do imagePath
      altText: "Mini Cooper 2020", // Descrição da imagem
      reservationDate: "03/02",
      available: true,
      rating: 5,
      model: "Mini Cooper 2020" // Modelo do carro
    },
    {
      imagePath: "./mini-cooper-2020.jpg", // Atualização do imagePath
      altText: "Mini Cooper 2020", // Descrição da imagem
      reservationDate: "04/02",
      available: false,
      rating: 2,
      model: "Mini Cooper 2020" // Modelo do carro
    },
    {
      imagePath: "./mini-cooper-2020.jpg", // Atualização do imagePath
      altText: "Mini Cooper 2020", // Descrição da imagem
      reservationDate: "05/02",
      available: true,
      rating: 1,
      model: "Mini Cooper 2020" // Modelo do carro
    }
  ];

  return (
    <>
       <div className='hidden sm:flex box-border container min-w-full flex justify-center items-start p-[32px] bg-white1' >
      <CarTable carsData={carsData}></CarTable>
    </div>
    <div className='visible sm:invisible box-border container min-w-full flex justify-center items-start p-[32px] bg-white1 top-0 p-[16px]' >
      <CarTableMobile carsData={carsData}></CarTableMobile>
    </div>
    </>
   
  );
}
