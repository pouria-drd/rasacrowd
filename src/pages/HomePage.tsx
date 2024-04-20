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
