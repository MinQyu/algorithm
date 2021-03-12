#include <iostream>
#include <string>
#include "H.h"
using namespace std;
void BOJ8958() {
	int n, S = 0, score = 0;
	cin >> n;
	string a;
	for (int i = 0; i <= n - 1; i++) {
		cin >> a;
		for (int j = 0; j <= a.length()-1; j++) {
			if (a[j] == 'O') {
				score++;
				S = S + score;
			}
			else if (a[j] == 'X') {
				score = 0;
			}
		}
		cout << S << '\n';
		S = 0;
		score = 0;
	}
}
