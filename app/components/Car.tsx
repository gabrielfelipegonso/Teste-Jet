import React, { useState } from 'react';

interface CarProps {
  imagePath: string;
  reservationDate: string;
  available: boolean;
  rating: number;
  altText: string; // Nova propriedade para definir o atributo alt da imagem
}

const Car: React.FC<CarProps> = ({ imagePath, reservationDate, available, rating, altText }) => {
  const renderAvailability = (isAvailable: boolean) => {
    return isAvailable ? 'Available' : 'Unavailable';
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  const toggleMenu = () => {
    // Implemente a lógica do menu aqui, se necessário
  };

  return (
    <tr className='h-[54px] box-border border-b border-gray-200' >
      <td className='px-px py-1'>
        <div className="flex items-center gap-2">
          <img className='w-[48.96px] h-[46px]' src={imagePath} alt={altText} />
          <span className="mr-2">{altText}</span> {/* Label com o mesmo texto da propriedade alt */}
          
        </div>
      </td>
      <td>{reservationDate}</td>
      <td><span className={`rounded-md h-22 w-72 font-inter text-green-800 ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} font-500 text-xs leading-18 px-2.5 pt-0.5`}>{renderAvailability(available)}</span></td>
      <td>{renderRatingStars(rating)}</td>
      <td className="flex flex-col items-center gap-0"><button onClick={toggleMenu} className="flex flex-col items-center gap-0  w-[10px]">
        <span className='h-2 text-3 font-semibold'>.</span> <span className='h-2 text-3 font-semibold'>.</span> <span className='h-2 text-3 font-semibold'>.</span></button></td>
      {/* Adicione o conteúdo do menu aqui, se necessário */}
    </tr>
  );
};

export default Car;