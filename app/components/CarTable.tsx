import React from 'react';
import Car from './Car';



 
interface CarData {
  imagePath: string;
  reservationDate: string;
  available: boolean;
  rating: number;
  altText: string;
}

interface CarTableProps {
  carsData: CarData[];
}

const CarTable: React.FC<CarTableProps> = ({ carsData }) => {



  return (
    <table className='invisible sm:visible min-w-full sm:rounded-[8px] bg-white shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)] text-left table-fixed border border-slate-200'  style={{ tableLayout: 'fixed' }}>
       <colgroup>
          <col className="w-[287px]" />
          <col />
          <col />
          <col />
          <col className=" w-[91px]" />
        </colgroup>
      <thead className=' h-fit uppercase text-xs font-semibold font-inter text-gray-900 dark:text-gray-100 bg-gray-50' > 
        <tr className='border-b border-gray-200'>
         <th >Car</th>
          <th>Next <span className='hidden md:inline'>Reservation</span></th>
          <th>Status</th>
          <th>Rating</th>
          <th className='flex flex-col items-center gap-0'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {carsData.map((car, index) => (
          <Car key={index} {...car} />
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;