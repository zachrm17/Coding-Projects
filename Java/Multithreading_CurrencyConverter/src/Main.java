public class Main {
    public static void main(String[] args) {

        //When filling out records, make the first few and last few different.
        //Make all the middle examples the same, super big

        for (int i = 1; i <= 3; i++){
            String selectedCurrency = "EUR";
            Multithread myThread = new Multithread(i, "infile" + i + ".txt", "outfile" + i + ".txt", selectedCurrency);
            myThread.start();
        }

    }
}