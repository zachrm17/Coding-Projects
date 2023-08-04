package p06419Mietzner;

public class ComplexNumber {
	
	double x, y;
	
	ComplexNumber(double a, double b){
		x = a;
		y = b;
	}
	
	ComplexNumber(double a){
		x = a;
		y = 0;
	}
	
	ComplexNumber(){
		x = 0;
		y = 0;
	}
	
	double getRealPart() {
		return x;
	}
	
	double getImaginaryPart() {
		return y;
	}
	
	ComplexNumber add(ComplexNumber Q) {
		ComplexNumber addResult = new ComplexNumber(x + Q.x, y + Q.y);
		return addResult;
	}
	
	ComplexNumber subtract(ComplexNumber Q) {
		ComplexNumber subResult = new ComplexNumber(x - Q.x, y - Q.y);
		return subResult;
	}
	
	ComplexNumber multiply(ComplexNumber Q) {
		ComplexNumber mulResult = new ComplexNumber(x * Q.x - y * Q.y, y * Q.x + x * Q.y);
		return mulResult;
	}
	
	ComplexNumber divide(ComplexNumber Q) {
		ComplexNumber divResult = new ComplexNumber((x * Q.x + y * Q.y) / (Q.x * Q.x + Q.y * Q.y), (y * Q.x - x * Q.y) / (Q.x * Q.x + Q.y * Q.y));
	    return divResult;
	}
	
	double abs() {
		return Math.sqrt(x * x + y * y);
	}
	
	 public String toString(){
	       if(y == 0) 
	    	   return "" + x;
	       else 
	    	   return "(" + x + " + " + y + "i)";
	   }
}
