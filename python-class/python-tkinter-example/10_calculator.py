from tkinter import Tk, Label, Entry, Button


# 함수 정의
def add():
    # 엔트리 값 가져오기
    num1 = int(entry1.get())
    num2 = int(entry2.get())

    # 합계 계산
    sum = num1 + num2

    # 레이블에 결과 출력
    label3.config(text=str(sum))


def subtract():
    # 엔트리 값 가져오기
    num1 = int(entry1.get())
    num2 = int(entry2.get())

    # 차 계산
    difference = num1 - num2

    # 레이블에 결과 출력
    label3.config(text=str(difference))


def multiply():
    # 엔트리 값 가져오기
    num1 = int(entry1.get())
    num2 = int(entry2.get())

    # 곱 계산
    product = num1 * num2

    # 레이블에 결과 출력
    label3.config(text=str(product))


def divide():
    # 엔트리 값 가져오기
    num1 = int(entry1.get())
    num2 = int(entry2.get())

    # 몫 계산
    quotient = num1 / num2

    # 레이블에 결과 출력
    label3.config(text=str(quotient))


# 창 생성
window = Tk()

# 창 제목 설정
window.title("간단한 계산기")

# 레이블 생성
label1 = Label(window, text="첫 번째 숫자:")
label2 = Label(window, text="두 번째 숫자:")
label3 = Label(window, text="결과:")

# 엔트리 생성
entry1 = Entry(window)
entry2 = Entry(window)

# 버튼 생성
button1 = Button(window, text="+", command=add)
button2 = Button(window, text="-", command=subtract)
button3 = Button(window, text="*", command=multiply)
button4 = Button(window, text="/", command=divide)

# 레이블 배치
label1.grid(row=0, column=0)
label2.grid(row=1, column=0)
label3.grid(row=2, column=1)

# 엔트리 배치
entry1.grid(row=0, column=1)
entry2.grid(row=1, column=1)

# 버튼 배치
button1.grid(row=3, column=0)
button2.grid(row=3, column=1)
button3.grid(row=4, column=0)
button4.grid(row=4, column=1)

# 메인 루프 실행
window.mainloop()
