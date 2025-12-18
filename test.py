# Calculate trailing zeros for factorial of a given number

def zeros(n):
  count = 0
  while n >= 5:
    n //= 5
    count += n
  return count

print(zeros(25))


numList = [20, 30, 40, 50, 60]

alphaList = ["ai", "ds", "py", "db", "os"]

print(numList is alphaList)  

print(numList == alphaList)

numList = alphaList

print(numList is alphaList) # blank

print(numList ) 