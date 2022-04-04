// generate pipe heights
export const generatePipeHeights = () => {
    let initialX = 190;
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
    const topFish = document.querySelector('.fish-container').getBoundingClientRect().top;
    const botFish = document.querySelector('.fish-container').getBoundingClientRect().bottom;
    const topTank = document.querySelector('.the-game').getBoundingClientRect().top;
    const botTank = document.querySelector('.the-game').getBoundingClientRect().bottom;
    
    if (topFish <= topTank || botFish >= botTank) {
        return true;
    }
    return false;
}

// check fish against pipes
export const checkFishPipes = (index) => {
    if(index !== undefined){
        const topFish = document.querySelector('.fish-container').getBoundingClientRect().top;
        const botFish = document.querySelector('.fish-container').getBoundingClientRect().bottom;
        const rightFish = document.querySelector('.fish-container').getBoundingClientRect().right;
        const leftFish = document.querySelector('.fish-container').getBoundingClientRect().left;
        
        const topPipe = document.querySelector(`#top-pipe-${index}`);
        const tPipeBottom = topPipe && topPipe.getBoundingClientRect().bottom;
        const tPipeRight = topPipe && topPipe.getBoundingClientRect().right;
        const tPipeLeft = topPipe && topPipe.getBoundingClientRect().left;
        
        const botPipe = document.querySelector(`#bot-pipe-${index}`);
        const bPipeTop = botPipe && botPipe.getBoundingClientRect().top;
        const bPipeRight = botPipe && botPipe.getBoundingClientRect().right;
        const bPipeLeft = botPipe && botPipe.getBoundingClientRect().left;
        
        if (topPipe !== null){
            const collideTopPipe = (rightFish >= tPipeLeft && rightFish < tPipeRight && topFish <= tPipeBottom);
            // console.log(collideTopPipe);
            const collideBotPipe = (rightFish >= bPipeLeft && rightFish < bPipeRight && botFish >= bPipeTop);
            // console.log(collideBotPipe);
            if (collideTopPipe || collideBotPipe) {
                return 0;
            }
            const pipeCrossed = (leftFish > tPipeRight && leftFish > tPipeRight);
            // console.log(pipeCrossed);
            if (pipeCrossed) {
                return 1;
            }
        }
    }
    return false;
}
