#include <iostream>
#include <algorithm>
#include "H.h"
using namespace std;
void BOJ2562() {
	int A[9], N;
	for (int i = 0; i <= 8; i++) {
		cin >> A[i];
	}
	int l = A[0];
	for (int i = 0; i <= 8; i++) {
		l = max(l, A[i]);
		if (l == A[i]) {
			N = i+1;
		}
	}
	cout << l << "\n" << N;
}