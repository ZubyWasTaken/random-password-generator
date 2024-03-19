// imports
import { useState } from "react";
import { Button } from "./components/ui/button";
import PasswordLengthSlider from "./components/PasswordLengthSlider";
import CheckboxOption from "./components/CheckBoxOption";
import GeneratedPasswordDisplay from "./components/GeneratePasswordDisplay";
import DisplayAlert from "./components/DisplayAlert";
import generatePassword from "./generatePassword";
import handleCopy from "./handleCopy";

// App component
const App = () => {
    // Setting state needed
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(12);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-800 text-white">
            <h1 className="text-4xl font-bold mb-6">Password Generator</h1>

            {/*
            Password length slider component
            */}
            <PasswordLengthSlider length={length} setLength={setLength} />

            {/*
            Checkbox components
            */}
            <div className="flex flex-col gap-4 mb-6">
                <CheckboxOption
                    label="Include Uppercase Letters"
                    checked={includeUppercase}
                    onChange={(isChecked) => setIncludeUppercase(isChecked)}
                />

                <CheckboxOption
                    label="Include Numbers"
                    checked={includeNumbers}
                    onChange={(isChecked) => setIncludeNumbers(isChecked)}
                />

                <CheckboxOption
                    label="Include Symbols"
                    checked={includeSymbols}
                    onChange={(isChecked) => setIncludeSymbols(isChecked)}
                />
            </div>

            {/*
            Button component
            */}
            <Button
                onClick={() => {
                    setPassword(
                        generatePassword(
                            length,
                            includeNumbers,
                            includeSymbols,
                            includeUppercase
                        )
                    );
                }}
                className="mb-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                Generate Password
            </Button>
            {/*
            If password has been generated, display component which allows user
            to copy password to clipboard
            */}
            {password && (
                <GeneratedPasswordDisplay
                    password={password}
                    onCopy={() => handleCopy(password, setShowAlert)}
                />
            )}

            {/*
            Component for the popup alert
            */}
            <DisplayAlert
                title="Copied!"
                description="Your password has been copied to the clipboard."
                show={showAlert}
            />
        </div>
    );
};

export default App;
