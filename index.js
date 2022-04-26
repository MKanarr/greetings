function getInfo() {
    try {
        const driver_name = document.getElementById('inputDriver').value;
        const guest_name = document.getElementById('inputGuest').value;
        const radio = document.getElementsByName('store');
        const late = document.getElementById('flexSwitchCheckDefault').checked;
        let store_name = '';
        
        console.log("late value: " + late);

        if (!driver_name || driver_name.trim().length == 0) throw new Error('Missing driver info');
        if (!guest_name || guest_name.trim().length == 0) throw new Error('Missing guest info');

        for(i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                store_name = radio[i].value;
            }
        }

        if (store_name.length == 0) throw new Error('No store selected');
    
        let greet_msg = ""
        let arrive_msg = ""

        if (!late) {
            greet_msg = `Hi ${guest_name}. This is ${driver_name} your CFA driver. Your order is on its way!`;
            arrive_msg = `${guest_name}, your order has arrived! Thank you for choosing ${store_name} and it has been my pleasure to serve you. Have an amazing day`;
        } else {
            greet_msg = `Hi ${guest_name}. This is ${driver_name} your CFA driver. Your order is on its way! I sincerely apologize for the delay in your order as it will be arriving late. I will make sure your order arrives ASAP`;
            arrive_msg = `${guest_name}, your order has arrived! I sincerely apologize again for the delay in your orders arrival. Thank you for choosing ${store_name} and it has been my pleasure to serve you. Have an amazing day`;
        }
    
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


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});