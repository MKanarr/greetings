function getInfo() {
    try {
        const driver_name = document.getElementById('inputDriver').value;
        const guest_name = document.getElementById('inputGuest').value;
        const radio = document.getElementsByName('store');
        let store_name = '';

        if (!driver_name || driver_name.trim().length == 0) throw new Error('Missing driver info');
        if (!guest_name || guest_name.trim().length == 0) throw new Error('Missing guest info');

        for(i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                store_name = radio[i].value;
            }
        }

        if (store_name.length == 0) throw new Error('No store selected');
    
        let greet_msg = `Hi ${guest_name}. This is ${driver_name} your CFA driver. Your order is on its way!`;
        let arrive_msg = `${guest_name}, your order has arrived! Thank you for choosing ${store_name} and it has been my pleasure to serve you. Have an amazing day`;
    
        document.getElementById("greeting").innerHTML = greet_msg;
        document.getElementById("arrival").innerHTML = arrive_msg;
    } 
    catch(e) {
        alert(e);    
    } 
}

function clipboardCopy(item) {
    try {
        let text = document.getElementById(item).textContent;

        console.log(text);
        console.log(text.length);

        if (!text || text.trim().length == 0) throw new Error('No text to copy - missing following field(s): driver and/or guest info');

        navigator.clipboard.writeText(text);
    }
    catch(e) {
        alert(e);
    }
}