let config;

if (process.env.NODE_ENV === "development") {
    config =  {
        server_url: "http://localhost:80",
        client_url: "http://localhost:3000"
    }
} else {
    config =  {
        server_url: "https://paste-dog-server.herokuapp.com",
        client_url: "pastepal.ca"
    }
}


export default config;
