#include <iostream>
#include"H.h"
using namespace std;
void BOJ10950()
{
	int T, A, B;
	cin >> T;
	int* C = new int[T];
	for (int i = 1; i <= T; i++)
	{
		cin >> A >> B;
		C[i] = A + B;
	}
	for (int i = 1; i <= T; i++)
	{
		cout << C[i] << "\n";
	}
}