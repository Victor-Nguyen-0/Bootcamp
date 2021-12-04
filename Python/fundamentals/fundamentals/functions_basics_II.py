#1 - function - accepts number input - returns list that countsdown from number (as 0th element) down to 0 (as last)

# def countdown(number):
#     newlist = []
#     for number in range (number, -1, -1):
#         newlist.append(number)
#     return newlist
# print(countdown(20))

#2 - function - receive 2 number list - print 1st + return 2nd

# def print_and_return(number1, number2):
#     print(number1)
#     return(number2)
# x=print_and_return(1,3)
# print(x)

#3 - function - accepts list - returns sum of first value + list length

# def first_plus_length(list):
#     return list[0] + len(list)
# x=first_plus_length([1,2,3,4,5,6,7,6,2,2,5])
# print(x)

#4 - function - accepts list - creates new list containing values > 2nd value of original list - print how many values, return list, if < 2 then return False

# def values_greater_than_second(list):
#     newlist=[]
#     for x in range(0,len(list)):
#         if list[x] > list[1]:
#             newlist.append(list[x])
#         else:
#             continue
#     print("New list has {} indexes" .format(len(newlist)))
#     if len(newlist) >= 2:
#         return(newlist)
#     else:
#         return False
# x=(values_greater_than_second([5,0,3,2,1,4]))
# print(x)

#5 - function - accepts 2 integers as parameter - size + value - crate + return list whose length = given size, values are all given value

def length_and_value(x,y):
    newlist=[]
    for x in range(0,x):
        newlist.append(y)
    return newlist
z = length_and_value(4,7)
print(z)
a = length_and_value(6,2)
print(a)