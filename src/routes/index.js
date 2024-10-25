const {Router} = require('express');
const router = Router();

const webpush = require('../webpush');

let pushSubscription;

router.post('/subscription', async (req,res) => {
    pushSubscription = req.body;
    console.log(req.body);
    res.status(200).json();

    const payload = JSON.stringify({
        title:'Notificacion',
        message:'push notificaction testing'
    });

    try {
        setTimeout(async () => {
            await webpush.sendNotification(pushSubscription,payload)
        }, 10000);
        
    } catch (error) {
        console.log(`se genero un error ${error}`);
    }
    
})
module.exports = router;