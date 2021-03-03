#include <iostream>
#include "H.h"
using namespace std;
void BOJ2884()
{
	int N, H, M;
	cin >> H >> M;
	N = (60 * H) + M - 45;
	if (N >= 0)
	{
		H = N / 60;
		M = N % 60;
	}
	else
	{
		H = (24 * 60 + N) / 60;
		M = (24 * 60 + N) % 60;
	}
	cout << H <<" " <<  M;
}