document.getElementById('grussbtn').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let date = new Date();
    let currentHours = date.getHours();
    console.log(currentHours);
    if(currentHours >=5 && currentHours <= 12) {
        alert('Guten Morgen '+ name);
    } else if (currentHours <= 19){
        alert('Guten Tag '+ name);
    } else if (currentHours <= 22){
        alert('Guten Abend '+ name);
    } else {
        alert('Gute Nacht '+ name);
    }
});