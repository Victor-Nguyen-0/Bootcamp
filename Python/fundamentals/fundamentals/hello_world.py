# 1. TASK: print "Hello World"
print("Print 1: Hello World")
# 2. print "Hello Noelle!" with the name in a variable
name = "Victor"
print("Print 2: Hello", name)	# with a comma
print("Print 3: Hello " + name)	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 9
print("Print 4: Hello" , name)	# with a comma
print("Print 5: Hello " + str(name))	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print("Print 6: I love to eat {} and {}." .format(fave_food1, fave_food2)) # with .format()
print(f"Print 7: I love to eat {fave_food1} and {fave_food2}.") # with an f string

