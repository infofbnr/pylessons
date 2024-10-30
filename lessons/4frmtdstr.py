# Now we will learn about formatted strings
# what are they?
# Formatted strings are used to avoid using + in a message for example:
name = "John"
print("Hello "+ name)
# this takes up a lot of time and you can do this in a much simpler way
name = "Peter"
print(f"Hello {name}")
# what we do here is we put the letter f before the quotation mark, and instead of doing + name we use squigly brackets
