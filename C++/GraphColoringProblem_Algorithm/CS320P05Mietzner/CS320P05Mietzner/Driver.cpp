#include "Graph.h"
#include <iostream>
using namespace std;

bool promising(int i, vector<int> color, int numColors, Graph g)
{
	int j;
	bool swap = true;
	j = 0;
	while (j < i && swap) {
		if (g.edgeExists(i,j) && color[i] == color [j])
			swap = false;
		j++;
	}
	return swap;
}

bool mColoring(int i, vector<int> &color, int numColors, Graph g)
{
	bool solution = false;
	int numOfVertices = color.size();
	int col;
	if (promising(i, color, numColors, g)) {
		if ((i + 1) == numOfVertices) {
			for (int j = 0; j < numOfVertices; j++) {
				cout << " " << j << " : " << color.at(j) << endl;
			}
			cout << endl;
			solution = true;
		}
		else
			for (col = 1; col <= numColors; col++) {
				color.at(i + 1) = col;
				solution = (mColoring(i + 1, color, numColors, g) || solution);
			}
	}
	return solution;
}

int main() 
{
	char trash;
	int numOfColors;
	int numOfVertices;
	int vertOne = 0;
	int vertTwo;

	cin >> numOfColors >> numOfVertices;
	vector<int> colors = vector<int>(numOfVertices);

	Graph colorGraph(numOfVertices);

	while (vertOne != -1) {
		cin >> trash >> vertOne >> vertTwo >> trash;

		if (vertOne >= 0) {
			colorGraph.addEdge(vertOne, vertTwo);
		}
	}

	cout << endl;
	bool result = mColoring(-1, colors, numOfColors, colorGraph);
	if (result == false) {
		cout << "No Color Assignment Possible" << endl;
	}
}