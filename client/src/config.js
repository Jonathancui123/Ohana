let config;

if (process.env.NODE_ENV === "development") {
    config = {
        server_url: "http://localhost:5000",
        client_url: "http://localhost:3000",
        firebaseConfig: {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
        }

    }
} else {
    config = {
        server_url: "https://ohana-fam-backend.herokuapp.com",
        client_url: "https://codepals-11647.web.app",
        firebaseConfig: {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
        }
    }
}


export default config;
