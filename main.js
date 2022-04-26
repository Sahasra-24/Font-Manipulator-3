noseX=0;
noseY=0;
rightWristX=0;
leftwristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is intialized");

}
function draw()
{
    background("#ADD8E6");
    fill("#00008B");
    stroke("#00008B");
    text("Sahasra",noseX,noseY);
    textSize(difference);
}
function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}