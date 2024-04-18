from copy import deepcopy

a = [1, 2, 3]
# b = a
b = deepcopy(a)

b.append(4)

print(id(a), a)
print(id(b), b)
