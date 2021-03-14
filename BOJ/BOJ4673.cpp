#include <iostream>
#include <algorithm>
#include "H.h"
using namespace std;
int BOJ4673(int n) {
	int NextNum = n;
	while (1) {
		if (n == 0) {
			break;
		}
		NextNum = NextNum + n % 10;
		n = n / 10;
	}
	return NextNum;
}
/*
int main()
{
	bool SN[10001] = { false, };
	int i = 1;
	for (int i = 1; i <= 10000; i++) {
		int k = BOJ4673(i);
		if (k <= 10000) {
			SN[k] = true;
		}
	}
	for (int i = 1; i <= 10000; i++) {
		if (SN[i] == false) {
			cout << i << '\n';
		}
	}
}
메인함수 중복이라 주석처리해서 올림
*/