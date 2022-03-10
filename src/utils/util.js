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

//hanlde space bar event to float fish
export const checkFishBoundaries = () => {
    const topFish = document.querySelector('#the-fish').getBoundingClientRect().top;
    const botFish = document.querySelector('#the-fish').getBoundingClientRect().bottom;
    const topTank = document.querySelector('.the-game').getBoundingClientRect().top;
    const botTank = document.querySelector('.the-game').getBoundingClientRect().bottom;
    
    if (topFish <= topTank || botFish >= botTank) {
        return true;
    }
}
