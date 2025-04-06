# https://www.acmicpc.net/problem/1051
# 3 5
# 42101
# 22100
# 22101

# 9

N, M = map(int, input().split())
rectangle = []
for line in range(N):
    rectangle.append(input())

min = min([N, M])
result = 1
if min != 1:
    for size in range(2, min + 1):
        for x in range(0, M - size + 1):
            for y in range(0, N - size + 1):
                lu = rectangle[y][x]
                ru = rectangle[y][x + size - 1]
                ll = rectangle[y + size - 1][x]
                rl = rectangle[y + size - 1][x + size - 1]
                if lu == ru == ll == rl:
                    result = size * size
print(result)
