from tkinter import Tk, Button, Label


root = Tk()


def myClick():
    myLabel = Label(root, text="Look! I clicked a Button!")
    myLabel.pack()


myButton = Button(root, text="Click Me!", padx=50, pady=50, command=myClick)
myButton.pack()

root.mainloop()
