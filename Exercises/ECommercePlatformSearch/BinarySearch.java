public class BinarySearch {

    public static Product search(Product[] products, int productId) {

    int left = 0;
    int right = products.length - 1;
    int comparisons = 0;

    while (left <= right) {

        comparisons++;

        int mid = (left + right) / 2;

        if (products[mid].getProductId() == productId) {
            System.out.println("Comparisons: " + comparisons);
            return products[mid];
        }

        if (products[mid].getProductId() < productId)
            left = mid + 1;
        else
            right = mid - 1;
    }

    System.out.println("Comparisons: " + comparisons);
    return null;
}
}