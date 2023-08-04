package p03419Mietzner;
import java.util.Arrays;

public class EQ {

	private int[] queens = new int[8];
	
	public EQ(){
		Arrays.fill(queens, -1); 	//Default value of queens[] is -1
	}
	
	
	public EQ(int[] queens) {
		for (int i = 0; i < queens.length; i++) {
			set(i, queens[i]);
		}
	}
	
	public int get(int i) {
		return queens[i];
	}
	
	public void set(int i, int j) {
		queens[i] = j;
	}
	
	public boolean isSolved() {
		for (int i = 0; i < queens.length; i++) {
			if (queens[i] == -1) { 	//Checks that array was signed 8 values
				return false;		//Checks rows
			}
			for (int j = i + 1; j < queens.length; j++) {
				if (queens[i] == queens[j]) {
					return false;	//Checks columns
				}
				if (Math.abs(i-j) == Math.abs(queens[i] - queens[j])) {
					return false; 	//Checks diagonals using slope
				}
			}
		}
		return true;
	}
	
	public void printBoard() {
		for (int i = 0; i < queens.length; i++) {
			System.out.print("|");
			for (int j = 0; j < queens.length; j++) {
				if (queens[i] == j) {
					System.out.print("X");
				}
				else {
					System.out.print(" ");
				}
				System.out.print("|");
			}
			System.out.println();	//End of row, new row started
		}
	}
	
}
