# There are a lot of things you can do to strings, such as:
text = "I love school"
print(text.upper()) # capitalizes all the letters in the message
print(text.lower()) # lowercases all the letters in the message
print(text.title()) # capitalizes the first letter of every word in the sentence
print(text.find("v")) # returns index of first occurence of the letter v (in this case it would be 4)
print(text.replace("v","b")) # replaces a letter with another letter (can also replace a word)
# We can also see if a string contains a character
contains = "school" in text # returns True
print(contains)
