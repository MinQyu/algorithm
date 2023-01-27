#include "programmersL0.h"

int solution(string A, string B) {
    int i, answer = 0;
    string a;
    a.assign(A);
    for (i = 0; i < a.length(); i++) {
        if (a.compare(B) == 0) break;
        string tmp;
        tmp.push_back(a.back());
        a.insert(0, tmp);
        a.pop_back();
        answer++;
        if (i == a.length() - 1) answer = -1;
    }

    return answer;
}
void stringShift() {
    cout << solution("hello", "ohell") << endl;
}