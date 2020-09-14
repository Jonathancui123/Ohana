let config;

if (process.env.NODE_ENV === "development") {
    config =  {
        server_url: "http://localhost:5000",
        client_url: "http://localhost:3000"
    }
} else {
    config =  {
        server_url: "https://ohana-fam-backend.herokuapp.com",
        client_url: "https://codepals-11647.web.app"
    }
}


export default config;
