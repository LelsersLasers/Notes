from turtle import *


def koch(size, depth):
    if depth == 0:
        forward(size)
    else:
        for angle in [60, -120, 60, 0]:
            koch(size / 3, depth - 1)
            left(angle)


def main():
    speed(3)
    colormode(255)
    pensize(2)
    bgcolor("black")

    size = 500

    penup()
    backward(size / 2)
    left(90)
    forward(size / 4)
    right(90)
    pendown()

    colors = [
        "red",
        "green",
        "blue",
        "purple",
    ]

    for n in range(4):
        color(colors[n])
        for _i in range(3):
            koch(size, n)
            right(120)

    while True:
        pass


main()
