class Rectangle {
    constructor(width, height){
        this.height=height,
        this.width=width

    }

    getArea(){
       return  this.height*this.width
    }

    getPerimeter(){
        return 2*(this.height+this.width)
    }
  }