const fetchAPI = async (date) => {
    const result = [];
    const random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
        if (random() >= 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = async (formData) => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true; // Simulating successful submission
};

// Helper function to generate a pseudo-random number generator seeded with a given value
const seedRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => {
        return (s = (s * a) % m) / m;
    };
};

export { fetchAPI, submitAPI }; 