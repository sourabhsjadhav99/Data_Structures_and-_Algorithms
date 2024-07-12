class Circle {
    constructor(radius){
        this.radius =radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }
    getCircumference(){
        return Math.PI * this.radius * 2
    }
  } 