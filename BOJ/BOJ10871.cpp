#include <iostream>
#include "H.h"
using namespace std;
void BOJ10871()
{
	int N, X;
	cin >> N >> X;
	int* C = new int[N];
	for (int i = 0; i <= N-1; i++)
	{
		cin >> C[i];
	}
	for (int i = 0; i <= N-1; i++)
	{
		if (C[i] >= X)
		{
			cout << "";
		}
		else
		{
			cout << C[i];
			if (i != N - 1)
			{
				cout << " ";
			}
		}
	}
}