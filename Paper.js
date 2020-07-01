class Paper {
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,20,options);
    this.image=loadImage('paper.png');
      
      World.add(world,this.body);
    }
    display(){ 
     var Pos=this.body.position;
     imageMode(CENTER);
     image(this.image,Pos.x,Pos.y,50,50);
     
      pop();
    }
  }
  