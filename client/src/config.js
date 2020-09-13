if (process.env.NODE_ENV === "development") {
    export default {
        server_url: "http://localhost:80",
        client_url: "http://localhost:3000"
    }
} else {
    export default {
        server_url: "https://paste-dog-server.herokuapp.com",
        client_url: "pastepal.ca"
    }
}

