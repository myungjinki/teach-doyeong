import tkinter as tk
from tkinter import colorchooser


def choose_color():
    color = colorchooser.askcolor(title="Choose color")
    if color[1]:  # Check if a color was chosen
        color_label.config(text="Selected color: " + color[1])
        color_label.config(bg=color[1])


# Create main window
root = tk.Tk()
root.title("Color Chooser Example")

# Create a label to display the selected color
color_label = tk.Label(root, text="Selected color: ", padx=20, pady=10)
color_label.pack()

# Create a button to open color chooser
choose_button = tk.Button(root, text="Choose Color", command=choose_color)
choose_button.pack()

colorchooser.askcolor(title="hello")

# Run the Tkinter event loop
root.mainloop()
