n, m = map(int, input().split())
box = list()
for i in range(n):
    box.append(str(0))
for a in range(m):
    i, j, k = map(int, input().split())
    for index in range(i - 1, j):
        box[index] = str(k)
a = ' '.join(box)
print(a)
