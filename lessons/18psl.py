# PSL, or Python Standard Library, are modules/packages already installed when you install python.
# one of these modules is the random module.
import random
f = random.random() # returns a float between 0 to 1
s = random.randint(1,6) # returns an int between 1 to 6

members = ["John","Bob","Mary"]
leader = random.choice(members)
print(leader)
