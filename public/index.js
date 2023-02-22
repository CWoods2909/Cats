const initialPageLoad = () =>{
//Nav Container /////////////////////////////////////////////
    const navContainer = document.createElement('nav')
    const pageHeader = document.createElement("h1");
    const dropDown = document.querySelector('.dropdown')
    navContainer.className = 'navBar'
    pageHeader.className = 'header';
    pageHeader.innerText = ('Kitten Pics');
    document.body.appendChild(navContainer);
    navContainer.append(pageHeader, dropDown);
    

    imageCreation();
    imageFetch();
    buttons();
}

<TODO>Center header, add some more styling and buttons</TODO>


//Image card ///////////////////////////////////////////////
const imageCreation = () => {
    const imgCard = document.createElement('div');
    imgCard.className = 'imageContainer';
    const innerCard = document.createElement('div');
    innerCard.className = 'imageCard';
    const catImg = document.createElement('img')
    catImg.className = 'cat';
    document.body.appendChild(imgCard);
    imgCard.appendChild(innerCard)
    innerCard.appendChild(catImg);
}  
// Image fetch /////////////////////////////////////////////
const imageFetch = async () => {
    const url = `https://api.thecatapi.com/v1/images/search`
    const imageFetch = await fetch(url);
    const kittenJSON = await imageFetch.json();
    const newCatImg = document.querySelector('.cat');
    newCatImg.setAttribute('src', kittenJSON[0].url)
}

//Button creation ///////////////////////////////////////////
const buttons = () => {
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'buttonContainer'
    const newCatButton = document.createElement('button')
    newCatButton.id = 'catButton'
    newCatButton.innerText = 'New Cat'
    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(newCatButton);
}

window.onload = async () =>{
    initialPageLoad();
    //Button click for new cat image
    document.getElementById('catButton').addEventListener("click", imageFetch);
}