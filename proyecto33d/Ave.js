class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Sprites/bird - ave.png");
    this.smokeimage=loadImage("Sprites/smoke.png");
    this.trayectoria=[];
  
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
       var position = [this.body.position.x, this.body.position.y];
        this.trayectoria.push(position); }
  
    for(var i=0; i<this.trayectoria.lenght;i++){
    image(this.smokeimage,this.trayectoria[i][0],this.trayectoria[i][1]);
    }
  }
}
