import Input from "../components/inputs/Input"
import { Dropdown } from "../components/dropdowns/Dropdown"

const playGround = () => {
    const options: OptionProps[] = [
        { label: '1', value: "1" },
        { label: '2', value: "2" },
        { label: '3', value: "3" },
        { label: '4', value: "4" },
    ]

    return (
        <div className="bg-white h-screen">
            <p>
                play-ground
            </p>

            <Input placeHolder="نام و نام خانوادگی" />

            <br />
            <br />

            <Dropdown title="مدرک تحصیلی" options={options} />

            <Input placeHolder="نام و نام خانوادگی" />
        </div>
    )
}

export default playGround