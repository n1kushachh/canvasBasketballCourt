

// draw rectangle

function drawCourt(){
    const canvas = document.getElementById("example")
    const ctx = canvas.getContext("2d")


    ctx.fillStyle = 'rgb(245,193,24)';
    ctx.fillRect(0,0,1000,1000);

    
    // Line in the middle 
    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 2
    ctx.moveTo(500, 500);
    ctx.lineTo(500, 0);
    ctx.stroke();

    // Round Rectangle in the middle
    ctx.beginPath();
    ctx.arc(500, 250, 100, 0, 2 * Math.PI);
    ctx.lineWidth = 6;
    ctx.stroke(); 

    // Fill round rectangle in the middle
    ctx.fillStyle = 'rgb(151,121,24)'
    ctx.arc(500,250,50,0,Math.PI * 2)
    ctx.fill();

    //Lines on the left

        //Line top
    ctx.beginPath();
    ctx.moveTo(0,100);
    ctx.lineWidth = 5;
    ctx.lineTo(100,100);
    ctx.stroke();

    ctx.closePath();

        //Line bottom

    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineWidth = 5
    ctx.lineTo(100,400);
    ctx.stroke();
    
        // Arc on left side

    ctx.beginPath();
    ctx.arc(100, 250,150, Math.PI * 1.5, Math.PI * 0.5);
    ctx.stroke();

    //Lines on the right

        //Line top
    ctx.beginPath();
    ctx.moveTo(1000,100);
    ctx.lineWidth = 5;    
    ctx.lineTo(900,100)
    ctx.stroke();

        //Line bottom
    ctx.beginPath();
    ctx.moveTo(1000,400);
    ctx.lineWidth = 5;
    ctx.lineTo(900,400)
    ctx.stroke();       
    
        //Arc on the right side
    ctx.beginPath();
    ctx.arc(900, 250,150, Math.PI * 1.5, Math.PI * 0.5,true);
    ctx.stroke();


    // Unfilled rectangle on the right
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.rect(0,175,175,150);
    ctx.stroke();

    // Fill unfilled
    ctx.beginPath();
    ctx.fillRect(5,175,170,150);
    ctx.stroke();

    // Unfilled rectangle on the left
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.rect(825,175,175,150)
    ctx.stroke();

    // Fill unfilled
    ctx.beginPath();
    ctx.fillRect(825,175,170,150);
    ctx.stroke();

    // Arc on the left inside rectangle
    ctx.beginPath();
    ctx.arc(175,250,65,0, Math.PI * 2)
    ctx.lineWidth = 5;
    ctx.stroke();

    // Arc on the right inside rectangle
    ctx.beginPath();
    ctx.arc(825,250,65,0,Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.stroke();

    // Line on the left inside rectangle
    ctx.beginPath();
    ctx.moveTo(40,220);
    ctx.lineTo(40,280);
    ctx.lineWidth = 3;
    ctx.stroke();

        // Line inside
        ctx.beginPath();
        ctx.moveTo(40,250);
        ctx.lineTo(60,250);
        ctx.stroke();

        // Rounded Rectangle
        ctx.beginPath();
        ctx.arc(60,250,10,0, Math.PI * 2)
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

    // Line on the right inside rectangle
    ctx.beginPath();
    ctx.moveTo(960,220);
    ctx.lineTo(960,280);
    ctx.lineWidth = 3;
    ctx.stroke();

        // Line inside
        ctx.beginPath();
        ctx.moveTo(960,250);
        ctx.lineTo(940,250);
        ctx.lineWidth = 3;
        ctx.stroke();

        // Rounded Rectangle
        ctx.beginPath();
        ctx.arc(940,250,10,0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

    

    

}

drawCourt()