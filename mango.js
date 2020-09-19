class Mango{
   constructor(x,y){
    var mango_options = {
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.image =  loadImage("sprites/mango.png");
   this.body = Bodies.rectangle(x,y,40,40,mango_options);
   this.width = 40;
   this.height = 40;
   World.add(world,this.body);

   }

display(){
fill("lightblue")
push();
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
pop();
  }

}