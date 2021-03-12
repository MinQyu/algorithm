#include <iostream>
#include <algorithm>
#include "H.h"
using namespace std;
void BOJ10818(){
	int n;
	cin >> n;
	int* N = new int[n];
	for (int i = 0; i <= n - 1; i++) {
		cin >> N[i];
	}
	int s = N[0];
	int l = N[0];
	for (int i = 0; i <= n - 1; i++) {
		s = min(s, N[i]);
		l = max(l, N[i]);
	}
	cout << s << " " << l;

}