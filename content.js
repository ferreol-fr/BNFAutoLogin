async function onLoad(){
    if ( document.querySelector('#username').value &&
        document.querySelector('#password').value) {
        console.log("clicking submit");
        document.querySelector('input[type=submit]').click();
    }
}

onLoad().catch(console.error);