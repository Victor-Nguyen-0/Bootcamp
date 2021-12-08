#1. Basic Integer Prints

for x in range(151):
    print(x)

#2. Multiples of Five

for x in range (5,1001,5):
    print(x)

#3. Counting with divisible string replacements

for x in range (1,101):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)

#4. Odd Integer Sums

sum = 0
for x in range(1,500000,2):
    sum += x

print(sum)

#5. Countdown by Fours

for x in range (2018,0,-4):
    print(x)

#6. Flexible Counter

lowNum = 2
highNum = 9
mult = 3
for x in range (lowNum, highNum+1):
    if x % mult == 0:
        print(x)
    else:
        continue