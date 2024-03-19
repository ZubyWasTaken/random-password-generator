//imports
import React from "react";
import { Slider } from "./ui/slider";

// defines interface for props
interface PasswordLengthSliderProps {
    length: number;
    setLength: (value: number) => void;
}

//define component and pass in props
const PasswordLengthSlider: React.FC<PasswordLengthSliderProps> = ({
    length,
    setLength,
}) => (
    <div className="w-full max-w-lg mb-5">
        {/*Label for the input*/}
        <label className="block mb-2 text-sm font-medium text-gray-300">
            Password Length: {length}
        </label>

        {/* Slider component to get input from user for desired password length */}
        <Slider
            min={1}
            max={40}
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            step={1}
            className="slider-thumb:bg-blue-500 slider-track:bg-white"
        />
    </div>
);

export default PasswordLengthSlider;
