class Triangle {
    constructor(a,b,c,a1,b1,c1) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = triangle(a,b,c,a1,b1,c1 ,options);
      this.a = a;
      this.b = b;
      this.c = c;
      this.a1 = a1;
      this.b1 = b1;
      this.c1 = c1;      
     // this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     // translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("brown");
      triangle(this.a,this.b,this.c,this.a1,this.b1,this.c1);
      //rect(81, 81, 63, 63);
      pop();
    }
  };