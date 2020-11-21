let output = document.getElementById("output");
fetch('scriptures.json')
        .then(response => response.json())
        .then(scriptures => {
            output.innerHTML = JSON.stringify(scriptures);
           
        });