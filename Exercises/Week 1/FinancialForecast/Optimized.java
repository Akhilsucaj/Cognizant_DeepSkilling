public class Optimized{
public static double predict(double value,
                             double rate,
                             int years) {

    for(int i = 1; i <= years; i++) {
        value *= (1 + rate);
    }

    return value;
}
public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue =
                predictFutureValue(
                        currentValue,
                        growthRate,
                        years);

        System.out.println(
                "Predicted Future Value = ₹" +
                futureValue);
    }
}