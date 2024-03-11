import Supporters from '../components/Supporters';
import SurveyLinkCard from '../components/SurveyLinkCard';
import Banner from '../components/custom-ui/banner/Banner';
import BaseCard from '../components/custom-ui/card/BaseCard';
import { ROUTES } from '../router/routes';

function HomePage() {
    return (
        <BaseCard>
            <Banner />

            <SurveyLinkCard
                title="پرسشنامه فردی"
                href={ROUTES.PERSONAL}
                badgeColor="green"
                text="افرادی که ایده ای را راه اندازی کرده یا قصد راه اندازی آن را دارند."
            />

            <SurveyLinkCard
                title="پرسشنامه شرکت ها"
                href={ROUTES.TEAM}
                badgeColor="blue"
                text="شرکت یا استارتاپ هایی که قصد توسعه محصولات یا خدمات خود را دارند."
            />

            <SurveyLinkCard
                title="پرسشنامه ادارات"
                href="/survey/organization"
                badgeColor="orange"
                text="ادارات و سازمان های دولتی که طرحی برای فرصت های سرمایه گذاری دارند."
            />

            <SurveyLinkCard
                title="پرسشنامه خدمات"
                href={ROUTES.SERVICE}
                badgeColor="green"
                text="کسب و کارهایی که میتوانند خدماتی را به کسب و کارهای دیگر ارائه دهند."
            />
            <Supporters />
        </BaseCard>
    );
}

export default HomePage;
