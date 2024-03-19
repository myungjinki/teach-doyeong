import tkinter as tk

root = tk.Tk("Hello World!")

# Create a label widget
myLabel1 = tk.Label(root, text="Hello World!")
myLabel2 = tk.Label(root, text="My name is John Elder")
myLabel3 = tk.Label(root, text="My name is John Elder")
myLabel4 = tk.Label(root, text="My name is John Elder")
myLabel5 = tk.Label(root, text="My name is John Elder")

myLabel1.grid(row=0, column=0)
myLabel2.grid(row=1, column=1)
myLabel3.grid(row=2, column=2)
myLabel4.grid(row=3, column=3)
myLabel5.grid(row=100, column=1000)

root.mainloop()
