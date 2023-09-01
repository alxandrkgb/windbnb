import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ApartmentContext } from './ApartmentsContext';


export default function Apartments () {
   const {currentHomes} = useContext(ApartmentContext);

    const Homes = ({ stay }) => {
        return (
            <div>
                <img src={stay.photo} alt={stay.title} className='rounded-3xl w-[395px] h-[269px] object-cover object-center mt-9 2xl:w-[562px]' />
                <div className='mt-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center whitespace-nowrap'>
                            {stay.superHost && (
                                <span className='text-xs mr-3 rounded-xl uppercase text-neutral-600 border border-neutral-600 font-bold py-1 px-2'>
                                    super host
                                </span>
                            )}{' '}
                            <p className='text-zinc-500 text-sm font-medium'>
                                {stay.type} &bull; {stay.beds} beds
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faStar} size="sm" style={{color: "#eb5757",}}  className='mr-2' />
                            <span className='text-neutral-600 text-sm font-medium'>{stay.rating}</span>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-zinc-800 text-base font-semibold'>{stay.title}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
      
        <div className='mt-[80px]'>
            <div className="flex items-center justify-between md:px-24 px-3 whitespace-nowrap">
                <h1 className='text-zinc-800 text-2xl font-bold'>Stays in Finland</h1>
                <p className='text-neutral-600 text-sm font-medium'>{currentHomes.length > 2 ?  currentHomes.length - 2 : currentHomes.length != 0 ? currentHomes.length :  0 }+ stays</p>
            </div>
            <div className='grid gap-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-10 md:mx-24 mx-3'>
                {currentHomes.map((stay, idx) => (
                    <Homes key={`${stay.title}-${idx}`} stay={stay} />
                    ))}
            </div>
        </div>
    );
}