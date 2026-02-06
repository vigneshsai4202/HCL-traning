
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class Function_function {
    static void main() {
        List<Integer> numbers= Arrays.asList(1,2,3,4,5,6,7,8);
        Function<Integer,Integer> squared=(value)->value*value*value;
        List<Integer> squaredNumbers= numbers.stream().map(squared).toList();
        System.out.println(squaredNumbers);
    }
}
