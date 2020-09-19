class Human{
    constructor(x,y){
        var human_options = {
            isStatic:true
        }
        this.image = loadImage("sprites/boy.png");
        this.body = Bodies.rectangle(x,y,100,200,human_options);
        this.width = 200;
        this.height = 250;
        World.add(world,this.body);
    }
    display(){
        fill("green");
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}