l = []
for i in range(100):
  s = input("word \n")
  a = input("アルファベット\n")
  l.append([i, s, a])

for x in l:
  print("{id: " + str(x[0]) + ', word: "' + x[1] + '", alphabet: "' + x[2] + '"},')