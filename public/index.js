const initialPageLoad = () =>{
//Nav Container /////////////////////////////////////////////
    const navContainer = document.createElement('nav')
    const pageHeader = document.createElement("h1");
    const dropDown = document.querySelector('.dropdown')
    navContainer.className = 'navBar'
    pageHeader.className = 'header';
    pageHeader.innerText = 'Catstagram';
    document.body.appendChild(navContainer);
    navContainer.append(pageHeader, dropDown);
    

    imageCreation();
    imageFetch();
    buttons();
    voting();
    commentCreator();
}

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

    const score = document.querySelector('#score');
    score.innerText = 0;
    scoreNum = 0;
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

// getting vote score into container//////////////////////

//making variable on root level because im lazy
let scoreNum = 0;

const voteScore = () => {
    const score = document.querySelector("#score")
    const upVote = document.querySelector('#upvote')
    const downVote = document.querySelector('#downvote')

    upVote.addEventListener("click", () => {
        scoreNum += 1;
        score.innerText = scoreNum;
    })

    downVote.addEventListener("click", () => {
        scoreNum -= 1;
        score.innerText = scoreNum
        
    })
}

// comments ////////////////////////////////////////////////////

const commentCreator = () => {
    const commentContainer = document.createElement('div');
    commentContainer.id = 'commentContainer';
    const commentHeader = document.createElement('h2');
    commentHeader.id = 'commentHeader';
    commentHeader.innerText = 'Comments';

    document.body.append(commentHeader, commentContainer);
    comment();
}

const comment = () => {
    const commentContainer = document.querySelector('#commentContainer');

    const comment = document.createElement('div');
    comment.id = 'comment';
    commentContainer.appendChild(comment);
    commentInput();
}

const commentInput = () =>{
    const comment = document.querySelector('#comment');
    const inputBox = document.createElement('form');
    inputBox.id = 'commentInput';

    const input = document.createElement('input');
    input.id = 'input';
    input.placeholder = 'Type comment...';

    const subBtn = document.createElement('button');
    subBtn.id = 'subBtn';
    subBtn.innerText = 'Submit Comment';

    inputBox.append(input, subBtn);
    comment.appendChild(inputBox);
}

const addComment = (input) => {
    if(input.length === 0) return;
    const comment = document.querySelector('#comment');
    const indCommentContainer = document.createElement('div');
    indCommentContainer.className = 'indCommentContainer';
    const newComment = document.createElement('p');
    newComment.innerText = input;
    indCommentContainer.appendChild(newComment);
    comment.appendChild(indCommentContainer);
}

const handleCommentSubmit = () => {
    const inputBox = document.querySelector('#input')
    const button = document.querySelector('#subBtn');

    button.addEventListener('click', e =>{
        e.preventDefault();
        const inputValue = inputBox.value;

        addComment(inputValue);
        inputBox.value = '';
    })

    
}


const clearComment = () => {
    const indCommentContainer = Array.from(document.querySelectorAll('.indCommentContainer'));
    
    for(let i = 0; i < indCommentContainer.length; i++){
        indCommentContainer[i].remove();
    }
}

const simpleFunc = () =>{
    imageFetch();
    clearComment();
}

window.onload = async () =>{
    initialPageLoad();
    voteScore();
    handleCommentSubmit();

    document.getElementById('catButton').addEventListener("click", simpleFunc);
}
