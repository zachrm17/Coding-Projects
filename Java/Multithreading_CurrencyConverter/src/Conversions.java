import java.text.DecimalFormat;
import java.util.Objects;

public class Conversions {

    static DecimalFormat df = new DecimalFormat("##.##");

    public static String USDollar(String selected, Double amount){
        if (Objects.equals(selected, "EUR")){
            amount = amount * 0.995364;
        } else if (Objects.equals(selected, "JPY")){
            amount = amount * 146.37539;
        } else if (Objects.equals(selected, "GBP")){
            amount = amount * 0.86693514;
        } else if (Objects.equals(selected, "CAD")){
            amount = amount * 1.3431944;
        }
        return df.format(amount);
    }

}
