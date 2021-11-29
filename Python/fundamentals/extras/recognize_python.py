num1 = 42 #variable declaration, initialize numbers
num2 = 2.3 #same as above
boolean = True #variable declaration, boolean
string = 'Hello World' #varaible declaration, initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, array
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, array
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, list
print(type(fruit)) #log statement, access variable
print(pizza_toppings[1]) #log statement, access array value
pizza_toppings.append('Mushrooms') #add value to variable array
print(person['name']) #log statement, access value
person['name'] = 'George' #change value
person['eye_color'] = 'blue' #change value
print(fruit[2]) #log statement, access value

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

"""
if else statement, log statement, string initialize
"""

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

"""
if else if else statement, log statement, string initialize
"""

for x in range(5):
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1

"""
for loop, sequence?, log statement
"""

pizza_toppings.pop() #variable add value
pizza_toppings.pop(1) #variable add value

print(person)
person.pop('eye_color')
print(person)

"""
log statement, variable add value
"""

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

"""
for loop - continue/break, if statement, log statement
"""

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

"""
function, for loop, log statement
"""

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

"""
function, foor loop, log statement, function argument/parameter
"""

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)

"""
function, function argument, for loop, log statement, function parameter
"""


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)