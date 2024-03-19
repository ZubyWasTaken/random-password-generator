import React from "react";

interface GeneratedPasswordDisplayProps {
    password: string;
    onCopy: () => void;
}

const GeneratedPasswordDisplay: React.FC<GeneratedPasswordDisplayProps> = ({
    password,
    onCopy,
}) => (
    <div className="mt-4 text-center">
        <p className="mb-2">
            Generated Password:{" "}
            <span className="font-mono text-lg text-green-400">{password}</span>
        </p>
        <button
            onClick={onCopy}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
            Copy to Clipboard
        </button>
    </div>
);

export default GeneratedPasswordDisplay;
