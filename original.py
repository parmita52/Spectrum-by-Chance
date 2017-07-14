from turtle import *
import random

colors_list = ['#d63942', '#94aab7', '#f4d546', '#9dab4c', '#bc8298', '#67be94', '#e87439', '#e87439', '#EBCA25', '#4B5CA1', '#E98A92', '#6DBA8E', '#275680', '#D64234', '#BF3E39', '#F3D247']
width = 25
def setup():
    speed(0)
    penup()
    setpos((-300,250))
    pendown()

def makeBox(color_name):
    color(color_name, color_name)
    begin_fill()
    for i in range(4):
        forward(width)
        right(90)
    end_fill()

def pickColor():
    rand_int = random.randint(0, 9)
    if rand_int < 7:
        rand_index = random.randint(0, len(colors_list)-1)
        box_color = colors_list[rand_index]
    else:
        box_color = '#000000'
    return box_color


setup()
print len(colors_list)
x = 25
for r in range(x):
    for c in range(x):
        pendown()
        makeBox(pickColor())
        penup()
        forward(width)
        #print r, c
    backward(width*x)
    sety(position()[1]-width)
    #down(width)

done()
