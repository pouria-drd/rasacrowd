import BaseCard from "../components/custom-ui/card/BaseCard"

function NotFoundPage() {
    return (
        <BaseCard className="flex items-center justify-center w-full h-screen">
            <div className="bg-rasa-blue-100 font-vazir text-center
            rounded-lg px-28 py-16">
                <h2 className="text-3xl">
                    خطای 404
                </h2>
                <br />
                <p className="r2l">
                    آدرس مورد نظر یافت نشد!
                </p>
            </div>
        </BaseCard>
    )
}

export default NotFoundPage
