#include <iostream>
#include <iomanip>
#include <vector>
#include "H.h"
using namespace std;
void BOJ4344() {
	double S=0, avg = 0, per, C, N, count=0;
	cin >> C;
	cout << fixed << setprecision(3);
	for (int i = 0; i <= C-1; i++) {
		cin >> N;
		vector<double>score(N);
		for (int j = 0; j <= N - 1; j++) {
			cin >> score[j];
			S = S + score[j];
		}
		avg = S / N;
		for (int j = 0; j <= N - 1; j++) {
			if (score[j] > avg) {
				count++;
			}
		}
		per = count / N * 100;
		cout << per << "%\n";
		score.assign(N,0);
		S = 0;
		avg = 0;
		count = 0;
		N = 0;
	}
	
}