var nosex = 0;
var nosey = 0;

var leftWristx = 0;
var rightWristx = 0;

function setup() {
    canvas = createCanvas(780, 480);
    canvas.position(900, 250);
    background("lightgray");

    video = createCapture(VIDEO);
    video.size(780, 480);
    video.position(150, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", obtainedPoses);
}

function draw() {
    noStroke()

    fill("#5BC0DE");
    background("lightgray")
    var distance = leftWristx - rightWristx;
    distance = Math.round(distance);
    document.getElementById("square_side").innerHTML = "La distancia del cuadrado es "+distance
    rect(nosex -(distance/2), nosey -(distance/2), distance, distance);
}

function modelLoaded() {
    console.log("Model succesfuly loaded!");
}

function obtainedPoses(results) {
    if (results.length > 0) {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
    }
}