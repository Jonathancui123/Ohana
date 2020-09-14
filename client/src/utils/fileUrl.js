import config from "../config.js"
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

class fileUrlUtil{
    getFileUrl(){
        const pathName = window.location.pathname;
        return pathName.length > 1 ? pathName : undefined;
    }
    
    newFileUrl(){
        const hashEndpoint = SERVER_URL + "/newHash"
        return fetch(hashEndpoint , {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => {return response.text()})
    }
}


export default new fileUrlUtil();