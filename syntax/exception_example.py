while True:
    try:
        raise Exception('HiThere')
        1 / 0
        x = int(input("Please enter a number: "))
        break
    except (ValueError, ZeroDivisionError, NameError):
        print("Oops!  That was no valid number.  Try again...")
