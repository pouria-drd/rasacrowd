import "./rasa-banner.css";

interface BannerImageProps {
    image: string;
    imageAlt: string;
    duration?: number;
}

const RasaBannerImage = ({
    image,
    imageAlt,
    duration = 300,
}: BannerImageProps) => {
    const loaderStyle = {
        "--fade-duration": `${duration}ms`,
    } as React.CSSProperties;

    return (
        <img
            style={loaderStyle}
            className={`w-48 absolute fade`}
            src={image}
            alt={imageAlt}
        />
    );
};

export default RasaBannerImage;
