function preload(){
}

function setup(){
   canvas = createCanvas(350,350);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(350, 350);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
    
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(resutls);
        console("nose x =" + results[0].pose.nose.x);
        console("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}


function draw(){
    image(video, 0, 0, 350, 350);
}

function take_snapshot(){
    save('myFilteredImage.png');
}
