import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import TextArea from "@/app/components/inputs/TextArea";

const IdeaForm = () => {


    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input placeHolder="عنوان ایده" />

            <TextArea placeHolder="خلاصه ایده" maxLength={421} />
        </>
    )
}

export default IdeaForm