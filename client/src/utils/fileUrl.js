import config from "../config.js"
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

class fileUrlUtil{
    getFileUrl(){
        const pathName = window.location.pathname;
        return pathName.length > 1 ? pathName : undefined;
    }
    
    async newFileUrl(){
        const hashEndpoint = SERVER_URL + "/newHash"
        fetch(hashEndpoint , {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.text())
    }
}


export default new fileUrlUtil();