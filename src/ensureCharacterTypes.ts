const ensureCharacterTypes = (
    password: string,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
) => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Ensure at least one character from each selected type is included
    if (includeUppercase) {
        password +=
            uppercaseLetters[
                Math.floor(Math.random() * uppercaseLetters.length)
            ];
    }
    if (includeNumbers) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (includeSymbols) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    return password;
};

export default ensureCharacterTypes;
