console.log('Service Worker');

self.addEventListener('push', (e) => {
    const data = e.data.json();
    console.log(data);
    
    self.registration.showNotification(data.title,{
        body: data.message,
        icon: 'icon.https://www.google.com/search?q=arch+icon+png&rlz=1C1CHBF_esMX1012MX1012&oq=arch+icon&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDINCAMQLhivARjHARiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDINCAgQABiGAxiABBiKBTINCAkQABiGAxiABBiKBdIBCDYwODdqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8#vhid=5U1RUKOQ2YLPDM&vssid=_IesbZ-jTJK-gur8P_q-GiQY_83',
    })
})