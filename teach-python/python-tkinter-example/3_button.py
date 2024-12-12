from tkinter import Tk, Button, Label, StringVar


class ButtonDemo:
    def __init__(self, master):
        self.master = master
        master.title("A simple GUI")

        self.label_text = StringVar()
        self.label_text.set("No button clicked")

        self.label = Label(master, textvariable=self.label_text)
        self.label.pack()

        self.button_text = StringVar()
        self.button_text.set("Click me!")

        self.button = Button(
            master, textvariable=self.button_text, command=self.update_text
        )
        self.button.pack()

    def update_text(self):
        self.label_text.set("Button clicked")
        self.button_text.set(f"[{self.button_text.get()}]")


root = Tk()
my_button_demo = ButtonDemo(root)
root.mainloop()
