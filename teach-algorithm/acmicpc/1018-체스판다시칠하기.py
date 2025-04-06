# 입력

[N, M] = map(int, input().split())
board = [i for i in range(N)]
for i in board:
    board[i] = input()

# 정답지

answer0 = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
]

answer1 = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
]


def compare_line(line, answer):
    ret = 0
    for index, color in enumerate(line):
        if answer[index] != color:
            ret += 1
    return ret


def check_board(n, m):
    ret = [0, 0]

    for index, height in enumerate(range(n, n + 8)):
        ret[0] += compare_line(board[height][m : m + 8], answer0[index])
    for index, height in enumerate(range(n, n + 8)):
        ret[1] += compare_line(board[height][m : m + 8], answer1[index])
    return min(ret)


def main():
    ret = 9999999999999999999999
    for i in range(0, N - 7):
        for j in range(0, M - 7):
            tmp = check_board(i, j)
            if tmp < ret:
                ret = tmp
    print(ret)


main()
