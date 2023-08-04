/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#if !defined SONG_H
#define SONG_H

#include <string>
using namespace std;

class Song {
	private:
		string name; //Name of Song
		string length; //Length of Song
	public:
		Song(string nm, string lgth);
		~Song();
		
		string getSongName(); //Returns song name
		void printSong(); //Prints contents of song
		string getLength(); //Returns length of song
};

#endif
