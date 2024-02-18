import Supporters from "./components/Supporters";
import SurveyLinkCard from "./components/SurveyLinkCard";
import Banner from "./components/banners/Banner";

function Home() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <Banner />

      <SurveyLinkCard title="پرسشنامه فردی" badgeColor="green"
        text="افرادی که ایده ای را راه اندازی کرده یا قصد راه اندازی آن را دارند." />

      <SurveyLinkCard title="پرسشنامه شرکت ها" badgeColor="blue"
        text="شرکت یا استارتاپ هایی که قصد توسعه محصولات یا خدمات خود را دارند." />

      <SurveyLinkCard title="پرسشنامه ادارات" badgeColor="orange"
        text="ادارات و سازمان های دولتی که طرحی برای فرصت های سرمایه گذاری دارند." />

      <Supporters />
    </main>
  );
}

export default Home
