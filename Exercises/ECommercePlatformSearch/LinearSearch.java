public class LinearSearch {

    public static Product search(Product[] products, int productId) {

    int comparisons = 0;

    for (Product product : products) {

        comparisons++;

        if (product.getProductId() == productId) {
            System.out.println("Comparisons: " + comparisons);
            return product;
        }
    }

    System.out.println("Comparisons: " + comparisons);
    return null;
}
}