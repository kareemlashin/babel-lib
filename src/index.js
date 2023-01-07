let a =5;
const c=10;
class data{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    sum(){
        return this.a+this.b;
    }
}
let d=new data(5,10);
console.log(d.sum());
class data1 extends data{
    constructor(a,b,c){
        super(a,b);
        this.c=c;
    }
    sum(){
        return super.sum()+this.c;
    }

}
let d1=new data1(5,10,15);
console.log(d1.sum());
