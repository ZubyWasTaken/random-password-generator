import React from "react";
import { Checkbox } from "./ui/checkbox";

interface CheckboxOptionProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
    label,
    checked,
    onChange,
}) => {
    return (
        <label className="flex items-center gap-2 text-gray-300">
            <Checkbox
                checked={checked}
                onCheckedChange={(isChecked) => onChange(isChecked === true)}
                className="checkbox:bg-gray-700 checkbox:border-gray-500"
            />
            {label}
        </label>
    );
};

export default CheckboxOption;
