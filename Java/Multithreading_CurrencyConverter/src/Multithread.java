import java.awt.*;
import java.io.*;
import java.util.Objects;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Multithread extends Thread {
    private int threadNumber;
    private String fileName;
    private String outFile;
    private String selectedCurrency;

    public Multithread(int threadNumber, String fileName, String outFile, String selectedCurrency) {
        this.threadNumber = threadNumber;
        this.fileName = fileName;
        this.outFile = outFile;
        this.selectedCurrency = selectedCurrency;
    }

    @Override
    public void run() {
        double startTime = System.currentTimeMillis();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e);
            }

            try {
                Scanner scan = new Scanner(new File(fileName));
                //PrintStream commentsFile = new PrintStream(outFile + "Comments.txt");
                //PrintStream codeFile = new PrintStream(outFile + "Code.txt");

                while (scan.hasNextLine() == true){
                    String current = scan.nextLine();
                    String splitCurrent[] = current.split(Pattern.quote("|"));
                    String initialCurrency = splitCurrent[3];
                    Double amount = Double.parseDouble(splitCurrent[2]);

                    if(Objects.equals(initialCurrency, selectedCurrency)){
                        System.out.println("Initial amount is already in " + selectedCurrency);
                        break;
                    }
                    else{
                        convertAmount(initialCurrency, selectedCurrency, amount, splitCurrent);
                    }
                }

//                while (scan.hasNextLine()) {
//                    line = scan.nextLine();
//
//                    // if line starts with two slashes
//                    if (line.indexOf("//") == 0)
//                        commentsFile.println(line);
//
//                        //if there are slashes elsewhere in a line
//                    else if (line.indexOf("//") > 0) {
//                        // write whole line to code file
//                        codeFile.println(line);
//
//                        // write comment part of line to comments file
//                        commentsFile.println(line.substring(line.indexOf("//")));
//                    } else
//
//                        // write line to code file
//                        codeFile.println(line);
//                }
//
//                // close files
//                scan.close();
//                commentsFile.close();
//                codeFile.close();
            } catch (IOException e) {
                System.out.println("*** I/O Error ***\n" + e);
            }
        double endTime = System.currentTimeMillis();
        double totalTime = endTime - startTime;
        double secTotalTime = totalTime / 1000;
        System.out.println("Thread " + threadNumber + "'s time: " + totalTime + " milliseconds");
        System.out.println("Thread " + threadNumber + "'s time: " + secTotalTime + " seconds");

    }

    private void convertAmount(String initial, String selected, Double amount, String[] splitCurrent){
        String convertedAmount = "";

        if (Objects.equals(initial,"USD")){
            convertedAmount = Conversions.USDollar(selected, amount);
        }

        splitCurrent[2] = convertedAmount;
        splitCurrent[3] = selected;
        String currentConverted = splitCurrent[0] + "|" + splitCurrent[1] + "|"
                + splitCurrent[2] + "|" + splitCurrent[3];

        //System.out.println(threadNumber + ": " + currentConverted);

        try {
            FileWriter fileWriter = new FileWriter("Converted" + outFile, true);
            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.println(currentConverted);
            printWriter.close();
        }catch (IOException e){
            System.out.println(e);
        }

    }
}
