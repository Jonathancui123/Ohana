function getFileUrl(){
    const pathName = window.location.pathname;
    return pathName.length > 1 ? pathName : undefined;
    
}