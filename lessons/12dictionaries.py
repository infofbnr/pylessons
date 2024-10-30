# we use dictionaries to store key/value pairs
school = {
    "name": "John Smith",
    "age": 30,
    "is_teacher": True
} # this is a dictionary
school["name"] # returns "John Smith"
# school["type"]  returns an error
school.get("type","silver") # returns "silver"
school["name"] = "new name"
