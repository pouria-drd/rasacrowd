import { ROUTES } from "../router/routes";

import Posters from "../components/Posters";
import Supporters from "../components/Supporters";
import SurveyLinkCard from "../components/SurveyLinkCard";
import BaseCard from "../components/custom-ui/card/BaseCard";
import Shelf from "../components/shelf/Shelf";

function HomePage() {
    return (
        <BaseCard>
            <Posters />

            <SurveyLinkCard
                title="پرسشنامه خدمات"
                href={ROUTES.SERVICE}
                badgeColor="green"
                text="کسب و کارهایی که میتوانند خدماتی را به کسب و کارهای دیگر ارائه دهند."
            />

            <Shelf />

            <Supporters />
        </BaseCard>
    );
}

export default HomePage;
