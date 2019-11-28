
let FOV = 60 ;
var  arr = [
    [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1 ,0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 3, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];

let x = 10;
let y = 10;

const WIDTH = 1200;
const HIGHT = 480;

class Ray{
    constructor(angle){
        this.angle = angle;
    }

}

function setup(){
    createCanvas(WIDTH, HIGHT);

}
class Joueur
{
 constructor(x,y)
 {
     this.x = x;
     this.y = y;
     this.move = 0;
     this.angle = 0;
 }

 update(){

   
    if (!checkwall(this.x +  Math.cos(this.angle * Math.PI / 180) * this.move, this.y -  Math.sin(this.angle * Math.PI / 180) * this.move)){

        this.x =    this.x +  Math.cos(this.angle * Math.PI / 180) * this.move;
        this.y =    this.y -  Math.sin(this.angle * Math.PI / 180) * this.move;
    }

 }
     render(){
   
       //clear();
       let ray;
        let pov;
        let distance;
        let step;
        this.update();
        stroke("black")
        console.log("angle "+this.angle);
        line(this.x, this.y,this.x + Math.cos(this.angle * Math.PI / 180)   * 32 , this.y   - Math.sin(this.angle * Math.PI / 180)  *32);

        fill("pink")
        circle(this.x,this.y,5);

        pov = this.angle + FOV / 2;
        ray = 0;

        while (ray < WIDTH){
            stroke("yellow")
            step = 0.1;
            distance = 0;
            while (distance < WIDTH)
            {
                if (checkwall(this.x + distance*Math.cos(pov * Math.PI / 180) , this.y - distance*Math.sin(pov * Math.PI / 180)))
                    break;
                else
                    distance += step;
            }



            line(this.x, this.y,this.x + Math.cos(pov * Math.PI / 180)   * distance , this.y   - Math.sin(pov * Math.PI / 180) * distance);
            pov -= FOV / WIDTH;
        
            ray++;
        }
        stroke("black")
     }
   

}



function checkwall(x,y){




if ((arr[ Math.floor(y / 32)][ Math.floor(x / 32)]) == 1)
return true;
return false;

 }
    

let joueur = new Joueur(0, 0);

function draw_map()
{
    let x=0,y=0;
    //clear();
    console.log("kk");
    let i = 0, j = 0;
    while (j < arr.length)
    {
        i = 0;
        x = 0;
        while (i < arr[j].length)
        {
            
            
            if (arr[j][i] == 1)
            {
   
                fill("black");
                rect(x,y,32,32);
                
            }  else if (arr[j][i] == 0){
                fill("white");
                rect(x,y,32,32);
            } else if (arr[j][i] == 3){
                fill("pink");
                if (!joueur.x  && !joueur.y){
                   
                        joueur.x = x;
                        joueur.y = y;
                  
                }
      
          
            }
            x +=32;
            i++;
        }
        y+=32;
        j++;
    }
}



function draw(){
    

    
    clear();
    draw_map();
    joueur.render();

}

function keyPressed(){
    let newx, newy;
    console.log("x "+joueur.x);
    if (keyCode == RIGHT_ARROW){
        joueur.angle -= 15;
        //joueur.movex  = 5;
    }
    if (keyCode == LEFT_ARROW){
        joueur.angle += 15;
       // joueur.movex = -5;
    }
    if (keyCode == UP_ARROW){
        joueur.move = +5;
    }
    if (keyCode == DOWN_ARROW){
        joueur.move = -5;
    }

}

function keyReleased(){
    if (keyCode == RIGHT_ARROW){
        ///joueur.angle  = 0;
    }
    if (keyCode == LEFT_ARROW){
        //joueur.angle = 0;
    }
    if (keyCode == UP_ARROW){
        joueur.move = 0;
    }
    if (keyCode == DOWN_ARROW){
        joueur.move = 0;
    }
}


// function update()
// {
//     if (x <= 0 )
//         x =0;
//     if (x + 32 > WIDTH)
//         x = WIDTH - 32;
//     if (y <= 0)
//         y = 0;
//     if (y + 32 > HIGHT)    
//         y= HIGHT - 32;

// }


console.log(arr[10][10]);