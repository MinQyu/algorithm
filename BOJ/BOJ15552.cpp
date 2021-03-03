#include <iostream>
#include "H.h"
using namespace std;
void BOJ15552()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	int A, B, T;
	cin >> T;
	for (int i = 1; i <= T; i++)
	{
		cin >> A >> B;
		cout << A + B<<"\n";
	}
}
// 속도 관련 문제라 백준에는 main 함수로 바꿔서 제출함(시간제한 1초)