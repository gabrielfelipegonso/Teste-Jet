import React from 'react';
import CarMobile from './CarMobile';

interface CarData {
  imagePath: string;
  reservationDate: string;
  available: boolean;
  rating: number;
  altText: string;
}

interface CarTableMobileProps {
  carsData: CarData[];
}

const CarTableMobile: React.FC<CarTableMobileProps> = ({ carsData }) => {



  return (
    <table className='visible sm:invisible min-w-full sm:rounded-[8px] bg-white shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)] text-left table-fixed border border-slate-200'  style={{ tableLayout: 'fixed' }}>
       
    
      <tbody>
        {carsData.map((car, index) => (
          <CarMobile key={index} {...car} />
        ))}
      </tbody>
    </table>
  );
};

export default CarTableMobile;