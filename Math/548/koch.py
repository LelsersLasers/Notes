from turtle import *


def random_color():
    from random import randint

    return (randint(0, 255), randint(0, 255), randint(0, 255))


def koch(size, depth):
    if depth == 0:
        color(random_color())
        forward(size)
    else:
        for angle in [60, -120, 60, 0]:
            koch(size / 3, depth - 1)
            left(angle)


def main():
    speed(1)
    colormode(255)
    pensize(4)
    bgcolor("black")

    size = 600

    penup()

    backward(size / 2)
    left(90)
    forward(size / 4)
    right(90)

    pendown()
    for _i in range(3):
        koch(size, 2)
        right(120)

    while True:
        pass


main()
