export function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString); // Format: YYYY-MM-DD

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If the birth month hasn't passed, or it is the birth month but the day hasn't passed
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export default calculateAge;