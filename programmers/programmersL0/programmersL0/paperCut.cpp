#include "programmersL0.h"


int solution(int M, int N) {
    int a = 0, b = 0, answer = 0;
    if (M < N) {
        answer = M - 1 + M * (N - 1);
    }
    else {
        answer = N - 1 + N * (M - 1);
    }
    return answer;
}

void paperCut() {
    cout << solution(2, 2) << endl;
}