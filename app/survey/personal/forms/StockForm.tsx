import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";

const StockForm = () => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما" />
            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار" />
        </>
    )
}

export default StockForm