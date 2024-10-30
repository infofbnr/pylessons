string = "double quotes"
string2 = 'or single quotes'
"""
for a multi-line string we use 3 quotes
like this!
"""

# we can get individual characters using square brackets
strings = "Hello how are you?"
print(strings[0]) # in Python, numbers start from 0. So here it would return H
print(strings[1]) # Here it would return e
print(strings[-1]) # Here it would return the first character from the end, so in this case it would be the question mark
print(strings[-2]) # Here it would return the second character from the end, in this case the letter u
print(strings[::-1])
# We can also slice a string for example
slice = "I will slice this message"
print(slice[1:5]) # returns characters 1 to 5 (remember python starts at 0) excluding the fifth character, in this case " wil"