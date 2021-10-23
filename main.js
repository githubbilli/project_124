function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,450);
    canvas.position(550,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("the model is initialized");
}

function gotPoses(results,error) {
    if(results.length<0){
        console.log(results);
    }else{
        console.error(error);
    }
}

function draw() {
    background('#FFFF00');
}