public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        Product linearResult =
                LinearSearch.search(products, 104);

        System.out.println("Linear Search Result:");
        System.out.println(linearResult);

        Product binaryResult =
                BinarySearch.search(products, 104);

        System.out.println("\nBinary Search Result:");
        System.out.println(binaryResult);
    }
}