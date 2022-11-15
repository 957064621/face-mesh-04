  
let img1;//胡子
let img2;//眼泪

let img7;//字
let img8;//桌子
let img6width = 300;


  function setup(){

    createCanvas(800, 600);
    img1 = loadImage('assert/学习.png');//帽子
    img2 = loadImage('assert/眼泪.gif');//眼泪
    img7 = loadImage('assert/字.png');
    img8 = loadImage('assert/桌子.png');//
    colorMode(HSB);

    stroke(255);
    strokeWeight(3);
  }

  function draw(){
    imageMode(CENTER);
    clear();
    if(detections != undefined){
      console.log(detections);
      if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
        //drawFaceMesh();
        
     
    
        xuexi();
        yanlei();
zi();
  zhuozi();
yanlei2();       
      }
    }
  }

  function drawFaceMesh(){
    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape(POINTS);  



    for(let j=0; j<detections.multiFaceLandmarks[0].length; j++){
      let x = detections.multiFaceLandmarks[0][j].x * width;
      let y = detections.multiFaceLandmarks[0][j].y * height;

 

      vertex(x, y);
    }

    endShape();
  }

  function xuexi(){
    let noseX = detections.multiFaceLandmarks[0][109].x * width;
    let noseY = detections.multiFaceLandmarks[0][109].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img1, noseX-90, noseY-150,500,500);//胡子
  }

    function yanlei(){
    let noseX = detections.multiFaceLandmarks[0][23].x * width;
    let noseY = detections.multiFaceLandmarks[0][23].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img2, noseX, noseY+50,img6width,300);//胡子
  }

    function yanlei2(){
    let noseX = detections.multiFaceLandmarks[0][374].x * width;
    let noseY = detections.multiFaceLandmarks[0][374].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img2, noseX, noseY+50,300,300);//胡子
  }

 function zi(){
   // console.log(img6width);
    if (img6width >200) {
       image(img7, 700,150,150,300);//果子2
    }
   
  }

    function zhuozi(){
 
       image(img8,400,530,800,200);//果子2
    

  }