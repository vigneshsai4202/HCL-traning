interface add{
    int addition(int a ,int b);
}

public class Ex_1 {

    public static  void main(String[] args){
        add c=(a,b)->a+b;
        int result=c.addition(10,20);
        System.out.println("Result :"+result);
    }
}
