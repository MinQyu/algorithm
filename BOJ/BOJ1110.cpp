#include <iostream>
#include "H.h"
using namespace std;
void BOJ1110()
{
	int N, n;
	int C = 0, S = -1;
	cin >> N;
	n = N;
	while (S != n)
	{
		C++;
		int A = N / 10;
		int B = N % 10;
		S = B * 10 + (A + B) % 10;
		N = S;
	}
	cout << C;
}