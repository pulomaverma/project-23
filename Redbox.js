class Redbox{
    constructor(x,y,w,h){
        var redbox_options ={
            isStatic: true
            
        }	
    
        this.body = Bodies.rectangle(x,y,w,h,redbox_options);
       
   
  
        World.add(world,this.body)
       
}
display(){
 fill("red")  
 
 rectMode(CENTER);   
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
}

} 