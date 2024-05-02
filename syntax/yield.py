def fn():
    yield 1
    yield 2
    yield 3


def afn():
    return 1


a = fn()
print(next(a))
print(next(a))
print(next(a))

동기 비동기
