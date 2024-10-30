# A Package is a directory with an __init__.py file inside, it can be made up of lots of modules
from package import program
program.teach_subject() # you write the name of a teacher inside of the paranthesis
from package.program import teach_subject
teach_subject() # write the name of a teacher inside of the paranthesis
