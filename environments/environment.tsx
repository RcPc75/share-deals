type EnvironmentConfig = {
    apiUrl: string;
    remoteCdnUrl: string;
};

export default function Environment(): EnvironmentConfig {
    return {
        // apiUrl: 'http://localhost:8080/',
        apiUrl: 'https://dev3.optima-crm.com/v3/',
        remoteCdnUrl: 'https://images.optima-crm.com/',
    };
}
