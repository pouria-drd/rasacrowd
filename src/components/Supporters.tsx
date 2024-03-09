import ImageCard from './ImageCard';

import San from './icons/san.png';
import Bagh from './icons/bagh.png';
import Omid from './icons/omid.png';
import Caren from './icons/caren.png';
import Shahr from './icons/shahrdari.png';
import Farmandari from './icons/farmandari.png';

const Supporters = () => {
    return (
        <div className='flex flex-col gap-8 font-vazir mt-10 pb-20 w-full'>
            <h2 className='text-gray-600 text-center text-lg sm:text-xl font-bold'>
                حامیان رساکراد
            </h2>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-10 w-full'>
                <ImageCard image={Bagh} imageAlt='Bagh' caption='باغ نوآوری ورامین' />
                <ImageCard image={Farmandari} imageAlt='Farmandari' caption='فرمانداری ورامین' />
                <ImageCard image={Shahr} imageAlt='Shahr' caption='شهرداری ورامین' />

                <ImageCard image={Omid} imageAlt='Omid' caption='صندوق کارآفرینی امید' />
                <ImageCard image={Caren} imageAlt='Caren' caption='کارن کراد' />
                <ImageCard image={San} imageAlt='San' caption='شرکت شهرک های صنعتی استان تهران' />
            </div>
        </div>
    )
}

export default Supporters