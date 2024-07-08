function str(value) {
    let ab = document.getElementById('ab');
    ab.innerHTML += value;
}
  


function mul(value) {
    let ab = document.getElementById('ab');
    ab.innerHTML += value;
}

function add(value) {
    let ab = document.getElementById('ab');
    ab.innerHTML += value;
}
function sub(value) {
    let ab = document.getElementById('ab');
    ab.innerHTML += value;
}
function div(value) {
    let ab = document.getElementById('ab');
    ab.innerHTML += value;
}
function cal() {
    let ab = document.getElementById('ab');
    let c = ab.innerHTML;
    let result = '';
   
        result = eval(c);
        ab.innerHTML=result;
}
       
        /* try {
        result = eval(c);
        ab.innerHTML = result;
    } catch (error) {
        // Handle errors gracefully
        console.error('Error during evaluation:', error);
    }
    yeh kr lena eval se pehle kyunki eval safe nhi hota voh seedha run kr deta hai input ko toh uska dhyan mein rakhte hue, let result ke baad se yeh code daal dena .
    */
   