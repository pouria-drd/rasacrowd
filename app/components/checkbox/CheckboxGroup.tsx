import Checkbox from "./Checkbox";

interface CheckboxGroupProps {
    checkboxLabels: string[];
    selectedIndex: number;
    onSelectionChange: (selectedIndexes: number) => void;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const handleCheckboxClick = (index: number) => {
        props.onSelectionChange(index);
    };

    const checkboxes = props.checkboxLabels.map((label, index) => (
        <Checkbox
            isEnd={index === props.checkboxLabels.length - 1}
            isStart={index === 0}
            key={index}
            label={label}
            isSelected={props.selectedIndex === index}
            onClick={() => handleCheckboxClick(index)}
        />
    ));

    return (
        <div
            className="font-vazir
            flex items-center justify-around
            w-full r2l">

            {checkboxes}

        </div>
    );
};

export default CheckboxGroup;