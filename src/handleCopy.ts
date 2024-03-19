const handleCopy = async (
    password: string,
    setShowAlert: (value: boolean) => void
) => {
    if (!password) {
        console.log("No password to copy");
        return;
    }

    try {
        await navigator.clipboard.writeText(password);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    } catch (err) {
        console.error("Failed to copy password to clipboard", err);
    }
};

export default handleCopy;
