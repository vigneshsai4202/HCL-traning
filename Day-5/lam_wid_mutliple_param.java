
interface  fun{
    int operation(int a,int b,int c);
}


public class lam_wid_mutliple_param {
    static void main() {
        fun f1=(a,b,c)->a+b+c;
        fun f2=(a,b,c)->a-b-c;
        fun f3=(a,b,c)->a*b*c;
        //fun f4=(a,b,c)->a+b+c;
        System.out.println(f1.operation(10,20,30));
        System.out.println(f2.operation(10,20,30));
        System.out.println(f3.operation(10,20,30));

    }
}
