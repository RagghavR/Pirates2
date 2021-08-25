class Cannonball {
    constructor(x, y) {
      var options = {
        restitution : 0.8,
        friction : 0.7,
        density : 1,
        isStatic : true
      };
      this.image = loadImage("assets/cannonball.png");
      this.r = 40
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
    fire(){
        var vector = p5.Vector.fromAngle(cannon.a)
        vector.mult(15)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:vector.x, y:vector.y})
    }    
    display() {
      var pos = this.body.position;
      push()
      imageMode(CENTER);
      image(this.image, pos.x,pos.y, this.r,this.r);
     pop()
    }
  }

