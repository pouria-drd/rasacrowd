import { ROUTES } from "../router/routes";
import Supporters from "../components/Supporters";
import SurveyLinkCard from "../components/SurveyLinkCard";
import BaseCard from "../components/custom-ui/card/BaseCard";
import Poster from "../components/banners/rasa-poster/Poster";

function HomePage() {
    return (
        <BaseCard>
            <Poster />

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
