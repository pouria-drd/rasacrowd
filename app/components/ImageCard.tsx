import Image, { StaticImageData } from 'next/image';

interface ImageCardProps {
    image: StaticImageData;
    imageAlt: string;
    caption: string;
}

const ImageCard = ({ image, imageAlt, caption }: ImageCardProps) => {
    return (
        <div className='flex flex-col items-center justify-center gap-1
        text-xs text-gray-600 font-vazir'>
            <Image src={image} alt={imageAlt} loading='lazy' />
            <p className='text-wrap text-center cursor-default w-24'>
                {caption}
            </p>
        </div>
    )
}

export default ImageCard