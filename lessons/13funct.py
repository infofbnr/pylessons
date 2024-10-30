def greet_user(name):
    print(f"Hi {name}")

greet_user("John") # would print "Hi John"

# There are 2 types of arguments
# 1. Positional arguments = greet_user("John","Smith"), positional arguments have to be in order
# 2. Keyword arguments = calculate_total(order=50,shipping=5,tax=0.1), keyword arguments dont have to be in order

def square(number):
    return number * number
result = square(2) # prints 4

