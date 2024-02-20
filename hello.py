import tkinter as tk

root = tk.Tk("Hello World!")

# Create a label widget
myLabel1 = tk.Label(root, text="Hello World!")
myLabel2 = tk.Label(root, text="My name is John Elder")

myLabel1.grid(row=0, column=0)
myLabel2.grid(row=2, column=3)

root.mainloop()
