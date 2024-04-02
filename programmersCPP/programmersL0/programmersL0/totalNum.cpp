#include "programmersL0.h"

vector<int> solution(int num, int total) {
    vector<int> answer;
    int i, midIndex, mid;
    mid = total / num;
    if (total % num == 0) {
        midIndex = num / 2;
    }
    else {
        midIndex = num / 2 - 1;
    }
    for (i = 0; i < num; i++) {
        answer.push_back(mid - midIndex + i);
    }
    return answer;
}

void totalNum() {
    int i;
    vector<int> tmp = solution(2, 12);
    for (i = 0; i < tmp.size(); i++) {
        cout << tmp[i] << ' ';
    }
    cout << endl;
}
