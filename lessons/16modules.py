"""
A module is a file with some Python code. We use modules to break up our
program into multiple files. This way, our code will be better organized. We won't
have one gigantic file with a million lines of code in it!
There are 2 ways to import modules: we can import the entire module, or specific
objects in a module. 
"""
def convertkgtolbs(kg: float):
    print(int(kg*2.2)) 


convertkgtolbs(10)
# we can do just
import converters # type: ignore
converters.kg_to_lbs(5)
#or
from converters import kg_to_lbs # type: ignore
kg_to_lbs(5)

if convertkgtolbs(5) > 5:
    pass