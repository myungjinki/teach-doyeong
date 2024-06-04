nums = input("Type a b: ").split()
a = int(nums[0])
b = int(nums[1])
if not -10000 <= a <= 10000 and not -10000 <= b <= 10000:
    print("Invalid input")
elif a < b:
    print("<")
elif a > b:
    print(">")
else:
    print("==")
