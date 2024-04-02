#include "programmersL0.h"


vector<string> babbling = { "aya", "yee", "u", "maa", "wyeoo" };

int solution(vector<string> babbling) {
    int answer = 0, i, j;
    string tmp;
    for (i = 0; i < babbling.size(); i++) {
        for (j = 0; j < babbling[i].length(); j++) tmp += 't';
        if (babbling[i].find("aya") != string::npos) {
            babbling[i].replace(babbling[i].find("aya"), 3, "ttt");
        }
        if (babbling[i].find("ye") != string::npos) {
            babbling[i].replace(babbling[i].find("ye"), 2, "tt");
        }
        if (babbling[i].find("woo") != string::npos) {
            babbling[i].replace(babbling[i].find("woo"), 3, "ttt");
        }
        if (babbling[i].find("ma") != string::npos) {
            babbling[i].replace(babbling[i].find("ma"), 2, "tt");
        }
        if (babbling[i].compare(tmp) == 0) {
            answer++;
        }
        tmp.clear();
    }
    return answer;
}
void Babbling() {
    cout << solution(babbling) << endl;
}