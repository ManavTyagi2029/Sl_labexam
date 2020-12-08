l = [[1,2,3],[2,3,4],[3,4,5],[4,5,6]]
a = [[1,2],[2,3],[9,0]]
print(type(l),type(a))
for i in l:
	if i[:2] in a:
		a.remove(i[:2])
print(a)
