// generate pipe heights
export const generatePipeHeights = () => {
    let initialX = 220;
    const topPipeHeight = Math.floor(Math.random() * initialX);
    const bottomPipeHeight = initialX - topPipeHeight;
    return [topPipeHeight, bottomPipeHeight];
}

// create pipes
export const createPipes = () => {
    let topPipes = [];
    let botPipes = [];
    for(let i=0; i<1000; i++){
        const [th, bh] = generatePipeHeights();
        topPipes.push(th)
        botPipes.push(bh)
    }
    return [topPipes, botPipes];
}

// check fish against walls of the board
export const checkFishWalls = () => {
    const topFish = document.querySelector('#the-fish').getBoundingClientRect().top;
    const botFish = document.querySelector('#the-fish').getBoundingClientRect().bottom;
    const topTank = document.querySelector('.the-game').getBoundingClientRect().top;
    const botTank = document.querySelector('.the-game').getBoundingClientRect().bottom;
    
    if (topFish <= topTank || botFish >= botTank) {
        return true;
    }
}

// check fish against pipes
export const checkFishPipes = (index) => {
    // console.log(index);
    const topFish = document.querySelector('#the-fish').getBoundingClientRect().top;
    const botFish = document.querySelector('#the-fish').getBoundingClientRect().bottom;
    const rightFish = document.querySelector('#the-fish').getBoundingClientRect().right;
    const topPipe = document.querySelector(`#top-pipe-${index}`);
    const tPipeBottom = topPipe && topPipe.getBoundingClientRect().bottom;
    const tPipeLeft = topPipe && topPipe.getBoundingClientRect().left;
    const botPipe = document.querySelector(`#bot-pipe-${index}`);
    const bPipeTop = botPipe && botPipe.getBoundingClientRect().top;
    const bPipeLeft = botPipe && botPipe.getBoundingClientRect().left;
    
    if (topPipe !== null){
        const collideTopPipe = (topFish <= tPipeBottom);
        console.log(topFish, tPipeBottom, rightFish, tPipeLeft);
        const collideBotPipe = (botFish >= bPipeTop && rightFish >= bPipeLeft);
        // console.log(botFish, bPipeTop);
        if (
            collideTopPipe
        ) {
            return true;
        }
    }
    return false;
}

// check if fish crossed pipes
export const checkPipeCrossed = (index) => {
    // console.log(index);
    const topFish = document.querySelector('#the-fish').getBoundingClientRect().top;
    const leftFish = document.querySelector('#the-fish').getBoundingClientRect().left;
    const topPipe = document.querySelector(`#top-pipe-${index}`);
    const tPipeBottom = topPipe && topPipe.getBoundingClientRect().bottom;
    const tPipeRight = topPipe && topPipe.getBoundingClientRect().right;

    if (tPipeBottom !== null && tPipeRight !== null){
        return (leftFish > tPipeRight && topFish > tPipeBottom);
    }
    return false;
}
