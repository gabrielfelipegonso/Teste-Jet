import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
interface CarProps {
  imagePath: string;
  reservationDate: string;
  available: boolean;
  rating: number;
  altText: string; // Nova propriedade para definir o atributo alt da imagem
}

const CarMobile: React.FC<CarProps> = ({ imagePath, reservationDate, available, rating, altText }) => {
  const renderAvailability = (isAvailable: boolean) => {
    return isAvailable ? <FaCheckCircle className='w-[24px] h-[24px] text-green-600'/> : <IoCloseCircleSharp className='w-[26px] h-[26px]  text-red-600' />;
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
     <td className='px-px py-1 flex justify-between'>
        <div className='flex'>
         <img className='w-[85px] h-[85px]' src={imagePath} alt={altText} />
          <span className='z-10 absolute self-start justify-self-start'>
              {renderAvailability(available)}
          </span>
          
          
        </div>
            

        <div className='flex flex-col ml-5'>
              <span className="mr-2">{altText}</span>
              <span>Next reservation: {reservationDate}</span>
              <span>
                      {renderRatingStars(rating)}
              </span>
              
        </div>

	            <button onClick={toggleMenu} className="flex flex-col self-start justify-self-end gap-0  w-[10px] h-max relative mr-5">
               <span className='h-2 font-semibold'>.</span> <span className='h-2 font-semibold'>.</span> <span className='h-2  font-semibold'>.</span></button>
     


      </td>
    
    </tr>
  );
};

export default CarMobile;