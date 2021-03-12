#include <iostream>
#include <string>
#include "H.h"
using namespace std;
void BOJ3052() {
	int n[10], a, c = 0, count = 1;
	for (int i = 0; i <= 9; i++) {
		cin >> a;
		n[i] = a%42;
	}
	for (int i = 0; i <= 8; i++) {
		for (int j = i + 1; j <= 9; j++) {
			if (n[i] == n[j]) {
				c++;
			}
		}
		if (c == 0) {
			count++;
		}
		c = 0;
	}
	cout << count;
}