from tkinter import Tk, Button, Label


root = Tk()
i = 1


def myClick():
    global i

    i += 1
    myLabel = Label(root, text="Look! I clicked a Button!")
    myLabel.grid(column=1, row=i)


myButton = Button(root, text="Click Me!", padx=50, pady=50, command=myClick)
myButton.grid(column=1, row=1)

root.mainloop()
