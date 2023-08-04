/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#if !defined SONGS_H
#define SONGS_H
#include "Song.h"

class Songs {
	private:
		Song** songs;
		int numSongs;
		int maxSongs;
		void resize();
	public:
		Songs(int numSongs);
		~Songs();
		void printSongs();
		int getNumSongs();
		void addSong(Song* s);
		int findSong(string name);
};

#endif
