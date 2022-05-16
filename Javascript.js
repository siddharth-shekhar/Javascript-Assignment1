Rectangle
{
    constructor(height,width)
    {
        this.width = width;
        this.height = height;
    }
}
//3 ways of declaring variables 1)var 2)let 3)const (most suitable and highly recommended)
const obj = new Rectangle(3,5)
obj.height;
obj.width;
//here instanceof keyword is used to check whether the object is created from a certain class or not.
obj instanceof Rectangle;