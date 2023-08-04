package p06419Mietzner;
import p06419Mietzner.ComplexNumber;
import java.util.Scanner;

public class EX13_17 {

	public static void main(String args[]) {
		
		Scanner in = new Scanner(System.in);
		
		ComplexNumber num1, num2;
		double temp1, temp2;
		
		System.out.println("Enter the first complex number: ");
		temp1 = in.nextDouble();
		temp2 = in.nextDouble();
		num1 = new ComplexNumber(temp1, temp2);
		
		System.out.println("Enter the second complex numebr: ");
		temp1 = in.nextDouble();
		temp2 = in.nextDouble();
		num2 = new ComplexNumber(temp1, temp2);
		
		System.out.println();
		System.out.println(num1.toString() + " + " + num2.toString() +
				" = " + num1.add(num2).toString());
		System.out.println(num1.toString() + " - " + num2.toString() + 
				" = " + num1.subtract(num2).toString());
		System.out.println(num1.toString() + " * " + num2.toString() + 
				" = " + num1.multiply(num2).toString());
		System.out.println(num1.toString() + " / " + num2.toString() + 
				" = " + num1.divide(num2).toString());
		System.out.println("|" + num1.toString() + "| = " + num1.abs());
	}
}
