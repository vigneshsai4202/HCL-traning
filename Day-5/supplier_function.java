package PTS;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

public class supplier_function {
    static void main() {
        Supplier<Integer> supplier=()->(int)(Math.random()*10);
        List<Integer> randomNumbers=new ArrayList<>();

        for(int i=0;i<100 ;i++){
            randomNumbers.add(supplier.get());
        }
        System.out.println(randomNumbers);
    }
}
