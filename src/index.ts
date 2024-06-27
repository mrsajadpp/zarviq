export function generateUniqueID(): string {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
    const randomString = Math.random().toString(36).substr(2, 5); // Generate random string
    const uniqueID = timestamp + randomString; // Combine timestamp and random string
    return uniqueID;
}