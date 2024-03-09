import styles from './Banner.module.css';

interface BannerImageProps {
    image: string;
    imageAlt: string;
    duration?: number;
}


const BannerImage = ({ image, imageAlt, duration = 300 }: BannerImageProps) => {
    const loaderStyle = {
        '--fade-duration': `${duration}ms`
    } as React.CSSProperties;

    return (
        <img style={loaderStyle}
            className={`w-48 absolute ${styles.fade}`}
            src={image} alt={imageAlt} />
    )
}

export default BannerImage