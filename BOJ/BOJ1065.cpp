#include <iostream>
#include "H.h"
int BOJ1065(int N) {
	int ans=false;
	int A[3] = {0,};
	if (N < 100) {
		ans = true;
	}
	else if(N == 1000){
		ans = false;
	}
	else {
		A[2] = N / 100;
		A[1] = (N / 10) % 10;
		A[0] = N % 10;
		if (A[2] - A[1] == A[1] - A[0]) ans = true;
	}
return ans; // 한수 판별 함수
}
/* 메인함수
int main(){
	int N, C=0;
	cin >> N;
	for (int i = 1; i <= N; i++) {
		if (BOJ1065(i)) C++;
	}
	cout << C;
}
*/