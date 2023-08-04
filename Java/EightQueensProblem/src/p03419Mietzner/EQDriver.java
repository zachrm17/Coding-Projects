package p03419Mietzner;
import p03419Mietzner.EQ;

public class EQDriver {

	public static void main(String[] args) {
		
		EQ board1 = new EQ();
		board1.set(0, 2);
		board1.set(1, 4);
		board1.set(2, 7);
		board1.set(3, 1);
		board1.set(4, 0);
		board1.set(5, 3);
		board1.set(6, 6);
		board1.set(7, 5);
		System.out.println("Is board 1 a correct Eight Queen placement? "
				+ board1.isSolved());
		
		EQ board2 = new EQ(new int[] {0, 4, 7, 5, 2, 6, 1, 3});
		if (board2.isSolved()) {
			System.out.println("Eight Queens are placed correclty in board 2");
			board2.printBoard();
		}
		else {
			System.out.println("Eight Queens are placed incorrectly in board 2");
			
		}
	}
	
}
