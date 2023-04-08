/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const img = document.createElement('img')
        img.setAttribute('src', url)
        const figure = document.createElement('figure')
        const li = document.createElement('li')
        const gallery = document.getElementsByTagName('ul')[0];

        figure.appendChild(img)

        li.appendChild(figure)

        gallery.appendChild(li)
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        
        console.error(e)
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const gallery = document.getElementsByClassName('gallery')[0]
    const firstDog = gallery.getElementsByTagName('ul')[0].getElementsByTagName('li')[0]
    firstDog.remove()
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const gallery = document.getElementsByTagName('ul')[0]
    gallery.lastChild.remove()
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});