var dom=document.getElementById('clock');
var ctx=dom.getContext("2d");
var h=ctx.canvas.height;
var w=ctx.canvas.width;
var r=h/2;
var z=h/200;

function drawBackground(){
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.lineWidth=10*z;
    ctx.arc(0,0,r-5*z,0,2*Math.PI,false);
    ctx.stroke();
    
    var hours=[3,4,5,6,7,8,9,10,11,12,1,2];
        ctx.font="18px Arial";
        ctx.textAlign="center";
        ctx.textBaseline="middle";
    hours.forEach(function(number,i){
        var rad=2*Math.PI/12*i;
        var x=Math.cos(rad)*(r-30*z);
        var y=Math.sin(rad)*(r-30*z);
        ctx.fillText(number,x,y);
    })
    
    for(var i=0;i<60;i++){
        var rad=2*Math.PI/60*i;
        var x=Math.cos(rad)*(r-15*z);
        var y=Math.sin(rad)*(r-15*z);
        if(i%5==0){
            ctx.fillStyle="#000";
            ctx.beginPath();
            ctx.arc(x,y,2,0,2*Math.PI,false);
            ctx.fill();
        }
        else {
            ctx.fillStyle="#ccc";
            ctx.beginPath();
            ctx.arc(x,y,2,0,2*Math.PI,false);
            ctx.fill();
        }
        
    }
    
}

    function drawHours(hour,minute){
        ctx.save();
        ctx.beginPath();
        var rad=2*Math.PI/12*hour;
        var minRad=2*Math.PI/12/60 * minute;
        ctx.lineWidth=6*z;
        ctx.rotate(rad + minRad);
        ctx.lineCap="round";
        ctx.moveTo(0,10*z);
        ctx.lineTo(0,-r/2);
        ctx.stroke();
        ctx.restore();
    }
    function drawMinutes(minute){
        ctx.save();
        ctx.beginPath();
        var rad=2*Math.PI/60*minute;    
        ctx.lineWidth=4*z;
        ctx.rotate(rad);
        ctx.lineCap="round";
        ctx.moveTo(0,10*z);
        ctx.lineTo(0,-r+30*z);
        ctx.stroke();
         ctx.restore();
    }
function drawSeconds(second){
        ctx.save();
        ctx.beginPath();
        var rad=2*Math.PI/60*second;
        ctx.rotate(rad);
        ctx.fillStyle="#c14543";
        ctx.moveTo(-2*z,20*z);
        ctx.lineTo(2*z,20*z);
        ctx.lineTo(1*z,-r+18*z);
        ctx.lineTo(-1*z,-r+18*z);
        ctx.fill();
        ctx.restore();
    }
function drawDot(){
    ctx.beginPath();
    ctx.arc(0,0,3*z,0,2*Math.PI,false);
    ctx.fill();
}

    function draw(){
        ctx.clearRect(0,0,w,h);
        var now=new Date();
        var hour=now.getHours();
        var minute=now.getMinutes();
        var second=now.getSeconds();
        drawBackground();
        drawHours(hour,minute);
        drawMinutes(minute);
        drawSeconds(second);
        drawDot();
        ctx.restore();
    }
draw();
setInterval(draw,1000);





