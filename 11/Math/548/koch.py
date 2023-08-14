import math
from turtle import *


def koch(size, depth):
    if depth == 0:
        forward(size)
    else:
        for angle in [60, -120, 60, 0]:
            koch(size / 3, depth - 1)
            left(angle)


def main():
    speed(0)
    colormode(255)
    pensize(2)
    bgcolor("black")

    size = 150

    colors = [
        "red",
        "green",
        "blue",
        "purple",
    ]

    for n in range(4):

        color(colors[n])


        penup()
        
        s = size * (n + 1)
        b = s / 2 - (size * n) / 2
        f = s / math.sqrt(12) - (size * n) / math.sqrt(12)

        backward(b)
        left(90)
        forward(f)
        right(90)
        pendown()
        
        for _i in range(3):
            koch(s, n)
            right(120)

    while True:
        pass


main()
