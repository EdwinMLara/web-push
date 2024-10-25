const PUBLIC_VAPID_KEY = 'BHCjy5K5yn6T2SDY8WP7xmj29IttKeLBipnX_MIBujGSj05fVrL0NTsqkG9Yw4pX5WfhXoh0ElLMv2N5yu5C2KI';

const subscription = async ()=> {

    const register = await navigator.serviceWorker.register('/worker.js',{
        scope: '/'
    });

    console.log('Service worker is loaded')

    const subscriptionPush = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:PUBLIC_VAPID_KEY
    });

    const strBody = JSON.stringify(subscriptionPush);
    console.log(strBody);

    console.log('Iniciando peticion');

    await fetch('/subscription',{
        method: "POST",
        body:strBody,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    console.log("Terminando peticion 39.41");
}

subscription(); 