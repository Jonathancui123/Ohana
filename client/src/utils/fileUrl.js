import config from "./config.js"
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

class fileUrlUtil{
    getFileUrl(){
        const pathName = window.location.pathname;
        return pathName.length > 1 ? pathName : undefined;
    }
    
    async newFileUrl(){
        return fetch(SERVER_URL + "/newHash", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                const { newFileUrl } = data
                return newFileUrl
            });
    }
    
}


export default fileUrlUtil();