# exceptions are errors that let you see whats wrong with your code
try:
    age = int(input("Age: "))
    income = 20000
    risk = income / age
    print(risk)
except ValueError:
    print("Not a valid number")
except ZeroDivisionError:
    print("Age cannot be 0")
# this "Except" things are exceptions
