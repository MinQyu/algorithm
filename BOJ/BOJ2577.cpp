#include <iostream>
#include <string>
#include "H.h"
using namespace std;
void BOJ2577() {
	int A, B, C, N, S;
	cin >> A >> B >> C;
	S = A * B * C;
	string strS = to_string(S);
	for (int i = 0; i <= 9; i++) {
		N = 0;
		for (int k = 0; k <= strS.length() - 1; k++) {
			if (strS.at(k) == i +'0')
				N++;
		}
		cout << N << "\n";
	}
}