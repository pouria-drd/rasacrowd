import Coins from "./images/coins.png";
import BannerImage from "./BannerImage";
import Moshak from "./images/moshak.png";
import RasaSolo from "./images/rasasolo.png";
import RasaStuff from "./images/rasastuff.png";

const Banner = () => {
  return (
    <div
      className="text-white font-vazir
        flex items-center justify-center md:justify-between 
        flex-col md:flex-row gap-y-20 md:gap-10
        bg-gradient-to-b md:bg-gradient-to-r
        from-transparent from-0% 
        via-rasa-blue-400 via-60%
        to-rasa-blue-700 to-100%
        rounded-xl w-full pt-20 pb-10 px-12 md:py-16 mb-10"
    >
      <div className="flex items-center justify-center pt-6 w-fit mr-2 md:mr-10">
        <BannerImage image={RasaSolo} imageAlt="RasaSolo" duration={500} />
        <BannerImage image={Moshak} imageAlt="Moshak" duration={850} />
        <BannerImage image={RasaStuff} imageAlt="RasaStuff" duration={1200} />
        <BannerImage image={Coins} imageAlt="Coins" duration={1500} />
      </div>

      <div
        className="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-4 
            text-center md:text-right cursor-default"
      >
        <h1 className="text-4xl md:text-6xl font-bold">رسا</h1>

        <p
          className="text-center md:text-right text-wrap
                r2l md:max-w-60 lg:max-w-96"
        >
          بستری است برای ارتباط میان صاحبان ایده، تیم های استارتاپی و کسب و
          کارهای در حال توسعه با سرمایه گذاران...
        </p>
      </div>
    </div>
  );
};

export default Banner;
