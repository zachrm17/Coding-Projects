/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#if !defined CD_H
#define CD_H
#include <string>
#include "Songs.h"
using namespace std;

class CD {
	private:
		string title; //CD Title
		string artist; //CD Artist
		int releaseDate; //Release Date of CD
		int rating; //CD Rating
		int numSongs; //# of songs on CD
		Songs* collection; //Collection of songs on CD
	public:
		CD(string ttl, string art, int date, int rat, int songs);
		~CD();

		string getCDTitle(); //Will return CD title
		string getArtistName();
		void printCD(); //Prints contents of CD
		int getNumSongs();
		int getReleaseDate();
		int getRating();
		void addToSongs(Song* s);
};

#endif