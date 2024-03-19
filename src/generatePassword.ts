import ensureCharacterTypes from "./ensureCharacterTypes";

const generatePassword = (
    length: number,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
): string => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Combine character sets based on user selections
    let characters = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    // Initial password, ensuring character types are included if selected
    let password = ensureCharacterTypes(
        "",
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    // Generate the rest of the password
    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Shuffle the password to mix the ensured characters randomly
    password = password
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("");

    return password; // Update the state with the new password
};

export default generatePassword;
