# variables
# m = 5
# g = 9.8
# name = "Kev"
# home_city = "Sydney"
# is_admin = False

# print(m)

m = 156

# type casting
m = float(m)  # int() and str()

# list
list = [1, 2, 3, 4, "x", False, 7]
# print(len(list))

# list.append("last")
# print(list)

# list.insert(1, "second")
# print(list)

# list.pop()
# print(list)

# del list[2]
# print(list)

# sort
# sort_this = [5, 32, 6, 2, 1, 4, 56556]
# sort_this.sort()
# print(sort_this)

# conditionals
b = "50"
c = 22

# if b == "50" or c == 21:
# if b == "50" and c == 21:
#   print("yay")
# elif c == 20:
#   print("no yay")
# else:
#   print(f"the value of c is {c}")
#   print("no" + " way")

# loops
# for (let i = 0; i < 3; i++)
# from 0 to 10 (exclusive) with a step of 2
# for i in range(0, 10, 2):
#   print(i)

# # for (let i = 0; i < array.length; i++) {}
# array = [1, 2, 3, 4, 4242]
# for i in array:
#   print(i)

# i = 0
# while i < 5:
#   print(i)
#   i +=1

# # functions
# x = 5
# def my_sum_function(num1, num2 = 2):
#   x = num1 + num2
#   return x

# print(f"the answer is {my_sum_function(4, 6)}")
# print(x)

# a_dict = {"brand": "Audi", "model": "RS6", "year": 2018}
# print(a_dict["brand"])

# a_dict = dict(brand="Audi", model="RS6", year=2018)
# print(a_dict)

# from datetime import *
# print(datetime.now())

class School:
  def __init__(self, name):
    self.name = name
    self.data = dict()
  
  def add(self, name, grade):
    if grade in self.data.keys():
      self.data[grade].append(name)
    else:
      self.data[grade] = [name]

  def grade(self, grade):
    return self.data[grade]

school = School("Best school")

if school.grade in school.data.keys():
  print(school.grade(1))
else:
  print("no grade")


school.add("carl", 1)
school.add("akram", 2)
school.add("tales", 12)
school.add("amal", 1)

print(school.grade(1))
print(school.grade(2))
print(school.grade(12))