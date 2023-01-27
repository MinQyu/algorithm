#include "programmersL0.h"

vector<int> common = { 1,2,3,4 };

int solution(vector<int> common) {
    int answer = 0;
    if (common[1] - common[0] == common[2] - common[1]) {
        answer = common.back() + common[1] - common[0];
    }
    else if (common[1] / common[0] == common[2] / common[1]) {
        answer = common.back() * common[1] / common[0];
    }
    return answer;
}

void Sequence() {
    cout << solution(common) << endl;
}