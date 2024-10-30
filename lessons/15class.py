class Person:
    def __init__(self,name):
        self.name = name
    def talk(self):
        print("Hello!")

person = Person("Manuel")
person.name # returns Manuel
person.talk() # prints Hello!

# Inheritance
class Mammal:
    def walk(self):
        print("walk")

class Dog(Mammal):
    def bark(self):
        print("bark")

dog = Dog()
dog.walk() # even though it isn't in the Dog's class, we inherit it from the Mammal class
dog.bark() # Dog class
