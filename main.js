var keys = Object.keys(localStorage);

for(let i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = localStorage.getItem(keys[i]);
    
    
    const label = document.createElement('label');
    label.innerHTML = key;
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    label.appendChild(checkbox)

    if(value == "true"){
        label.classList.add("completed")
        checkbox.checked = true;
    }

    document.getElementsByClassName('placeholder')[0].appendChild(label);

    

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    localStorage.setItem(event.target.labels[0].childNodes[0].data, true);
    location.reload()
  } else {
    localStorage.setItem(event.target.labels[0].childNodes[0].data, false);
    location.reload()
  }
})

}

function openPage(event) {
    const page = event.target.textContent.toLowerCase();

    window.open(`${page}.html`, '_self');
}

function addDetail() {
    const value = document.getElementsByClassName("add-input")[0].value;

    localStorage.setItem(value, false)  
}






