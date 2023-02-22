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
    voting();
}

{/* <TODO>Center header, add some more styling and buttons</TODO> */}


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

//Upvote and downvote container ////////////////////////////////
const voting = () => {
    //score container and display
    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'scoreContainer';

    
    const scoreDisplayContainer = document.createElement('div');
    scoreDisplayContainer.id = 'scoreDisplayContainer';

    const scoreTitle = document.createElement('span');
    scoreTitle.id = 'scoreTitle';
    scoreTitle.innerText = 'Popularity: '

    const score = document.createElement('span');
    score.id = 'score';
    score.innerText = '0';

    scoreDisplayContainer.append(scoreTitle, score);
    scoreContainer.appendChild(scoreDisplayContainer)

    //upvote downvote buttons
    const voteButtonContainer = document.createElement('div');
    voteButtonContainer.id = 'voteButtonContainer';

    const upvoteBtn = document.createElement('button');
    const downvoteBtn = document.createElement('button');
    upvoteBtn.id = 'upvote';
    downvoteBtn.id = 'downvote';
    upvoteBtn.innerText = 'Upvote';
    downvoteBtn.innerText = 'Downvote';

    voteButtonContainer.append(upvoteBtn, downvoteBtn);
    scoreContainer.appendChild(voteButtonContainer);
    document.body.appendChild(scoreContainer);

}

// window.onload = async () =>{
//     //Button click for new cat image
//     initialPageLoad();
//     document.getElementById('catButton').addEventListener("click", imageFetch);
// }

window.addEventListener("DOMContentLoaded", () => {
    initialPageLoad();

    
    document.getElementById('catButton').addEventListener("click", imageFetch);
})