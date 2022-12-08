self.addEventListener("install", ()=>{
    console.log("Instalando Service Worker");
});
self.addEventListener("activate", ()=>{
    console.log("Service Worker esta ativo");
});
self.addEventListener("error", ()=>{
    console.log("Apareceu um error");
});
self.addEventListener("fetch", ()=>{
    console.log("Service Worker Interceptando petição");
    setTimeout(()=>{
        console.clear();
    }, 600);
});
self.addEventListener("message", (e)=>{
    let cliente = {
        id: e.source.id,
        message: e.data
    };
    console.log(cliente);
});