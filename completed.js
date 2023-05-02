var keys = Object.keys(localStorage);

for(let i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = localStorage.getItem(keys[i]);

    if(value == 'true') {
        const label = document.createElement('label');
        label.innerHTML = key;
        label.classList.add("completed")
    
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = true;
        label.appendChild(checkbox)

        const icon = document.createElement("i");
        icon.classList.add("fas","fa-trash" , "delete-icon");
        label.appendChild(icon)

        icon.onclick = function(event) {
            localStorage.removeItem(event.target.parentNode.childNodes[0].data);
            location.reload()
        }
        checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
              localStorage.setItem(event.target.labels[0].childNodes[0].data, true);
              location.reload()
            } else {
              localStorage.setItem(event.target.labels[0].childNodes[0].data, false);
              location.reload()
            }
          })
    document.getElementsByClassName('placeholder')[0].appendChild(label);
    }
}

function openPage(event) {
    const page = event.target.textContent.toLowerCase();

    window.open(`${page}.html`, '_self');
}

function deleteAll() {
    

for(let i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = localStorage.getItem(keys[i]);
    if(value == "true") {
        localStorage.removeItem(key)
    }
}
    location.reload()
}


