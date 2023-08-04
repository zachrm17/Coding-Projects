/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#include <iostream>
#include <fstream>
#include "CDs.h"
#include "Songs.h"

using namespace std;

int main() {
	cout << "Opening CDs File..." << endl;

	CDs* s1 = new CDs("cds.txt");

	cout << "Would you like to find a CD (a) or end program (b) ?" << endl;

	char letter;
	cin >> letter;

	const char a = 'a';
	const char b = 'b';

	switch (letter) { //Switch statement to prompt user what to search for
	case 'a':
		if (a) {
			cout << "Would you like to find an artist (a) or rating (b)?" << endl;
			cin >> letter;
			if (letter == 'a') {
				cout << "Artist: ";
				string artist;
				cin.ignore();
				getline(cin, artist);
				s1->findArtist(artist);
			}
			else if (letter == 'b') {
				cout << "Rating: ";
				int rating;
				cin.ignore();
				cin >> rating;
				s1->findRating(rating);
			}	
		}
		break;
	case 'b':
		if (b) {
			cout << "Have a nice day" << endl;
			system("PAUSE");
		}
		return 0;
	}
}