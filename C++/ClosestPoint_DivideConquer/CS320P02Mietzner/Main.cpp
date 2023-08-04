//Zachary Mietzner

#include "Point.h"
#include <string>
#include <vector>
#include <math.h>
#include <algorithm>
using namespace std;

template<class T>
void merge(int h, int m, vector<Point> U, vector<Point> V, vector<Point> &S, T compare)
{
	int i = 0, j = 0, k = 0;
	while (i < h && j < m) {
		if (compare(U[i], V[j])){
			S[k] = U[i];
			i++;
		}
		else {
			S[k] = V[j];
			j++;
		}
		k++;
	}
	if (i >= h) {
		for (j; j < m; j++) {
			S[k] = V[j];
			k++;
		}
	}
	else {
		for (i; i < h; i++) {
			S[k] = U[i];
			k++;
		}
	}
}

template <class C>
void mergeSort(int n, vector<Point>& P, C comp) {
	if (n > 1) {
		const int h = n / 2, m = n - h;
		vector<Point> U = vector<Point>(P.begin(), P.begin() + h);
		vector<Point> V = vector<Point>(P.begin() + h, P.end());
		mergeSort(h, U, comp);
		mergeSort(m, V, comp);
		merge(h, m, U, V, P, comp);
	}
}

pair<Point, Point> bruteForce(vector<Point> P, int n) {
	double min = DBL_MAX;
	pair<Point, Point> pointPair(P.at(0), P.at(1));
	for (int i = 0; i < n; i++) {
		for (int j = i + 1; j < n; j++) {
			if (P.at(i).distance(P.at(j)) < min) {
				min = P.at(i).distance(P.at(j));
				pointPair.first = P.at(i);
				pointPair.second = P.at(j);
			}
		}
	}
	return pointPair;
}

pair<Point, Point> closestAcrossStrip(vector<Point> P, int size, double d) {
	pair<Point, Point> pointPair(P.at(0), P.at(1));
	double min = d;
	mergeSort(size, P, Point::CompareYCoordinate());
	for (unsigned i = 0; i < size; i++) {
		for (unsigned j = i + 1; j < size && (P[j].getY() - P[i].getY()) < min; j++) {
			if (P.at(j).distance(P.at(i)) < min) {
				min = P.at(j).distance(P.at(i));
			}
		}
	}
	return pointPair;
}

pair<Point, Point> closest(vector<Point> P) {
	pair<Point, Point> pointPair(P.at(0), P.at(1));
	int mid = P.size() / 2; //Gets mid point of array

	vector<Point> subArray1 = vector<Point>(P.begin(), P.begin() + mid); //Divides array into two sub arrays
	vector<Point> subArray2 = vector<Point>(P.begin() + mid, P.end()); //Divides array into two sub arrays

	pair<Point, Point> pair1 = pair<Point, Point>();
	pair<Point, Point> pair2 = pair<Point, Point>();

	if (subArray1.size() <= 4) {
		pair1 = bruteForce(subArray1, subArray1.size()); //Setting the pair for first sub array
	}
	else {
		pair1 = closest(subArray1);
	}
	if (subArray2.size() <= 4){
		pair2 = bruteForce(subArray2, subArray2.size()); //Setting the pair for second sub array
	}
	else {
		pair2 = closest(subArray2);
	}

	double d1 = pair1.first.distance(pair1.second);
	double d2 = pair2.first.distance(pair2.second);
	double lowD = min(d1, d2);

	if (lowD == d1){
		pointPair = pair1;
	}
	else {
		pointPair = pair2;
	}

	vector<Point> strip = vector<Point>();
	for (Point p : P) {
		if (abs(p.getX() - P.at(mid).getX()) < lowD) {
			strip.push_back(p);
		}
	}

	if (strip.size() > 1){
		pair<Point, Point> pair = closestAcrossStrip(strip, strip.size(), lowD);
		if (pair.first.distance(pair.second) < lowD) {
			return pair;
		}
	}

	return pointPair;
}

int main() {
	string fileName;

	cout << "Enter Filename: " << endl;
	getline(cin, fileName);
	ifstream inFile(fileName);

	vector<Point> array = vector<Point>();
	while (!inFile.eof()) {
		Point p = Point();
		inFile >> p;
		array.push_back(p);
	}

	/*for (Point P : array) {
		cout << P << endl;  USED FOR TESTING
	}*/

	mergeSort(array.size(), array, Point::CompareXCoordinate());

	/*cout << endl;
	cout << "Merge" << endl;
	cout << endl;

	for (Point P : array) {
		cout << P << endl;	USED FOR TESTING
	}*/

	cout << endl;
	pair<Point, Point> pair = closest(array);
	cout << "Closest points are: (" << pair.first << ") and (" << pair.second << ") with distance = " << pair.first.distance(pair.second) << endl;
}