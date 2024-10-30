name = "mano hag"
nameupdated = name[0].upper()
i = 0
while i < len(name):
    if name[i] == " ":
        nameupdated = " " + name[i+1].upper()
        i += 2
    else:
        nameupdated += " "+ name[i]
        i += 1

print(nameupdated)
