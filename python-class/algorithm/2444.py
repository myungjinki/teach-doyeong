#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

n = int(input())
for i in range(n * 2 - 1):
    if i < n - 1:
        for j in range(n - i - 1):
            print(" ", end="")
        for j in range(i * 2 + 1):
            print("*", end="")
    elif i > n - 1:
        for j in range(i - n + 1):
            print(" ", end="")
        for j in range((n * 2 - i - 1) * 2 - 1):
            print("*", end="")
    else:
        for j in range(n * 2 - 1):
            print("*", end="")
    print()
