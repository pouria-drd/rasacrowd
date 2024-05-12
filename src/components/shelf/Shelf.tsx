import ShelfTable from "./ShelfTable";

const Shelf = () => {
    return (
        <div className="font-peyda w-full py-16">
            <h1 className="text-rasa-blue-700 text-right text-xl sm:text-2xl">
                نمایشگاه عرضه مستقیم
            </h1>

            <div className="text-gray-500 text-right text-sm sm:text-base w-full">
                <p>سه شنبه و پنج شنبه هر هفته</p>

                <p>بازارچه کوثر، میدان مسحد جامع ورامین محل دائمی نمایشگاهی</p>
            </div>

            <div className="w-full mt-8">
                <ShelfTable />
            </div>
        </div>
    );
};

export default Shelf;
