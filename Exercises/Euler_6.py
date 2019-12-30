a = list()
b = list()

for i in range(1,101,1):

	a.append(i)
	b.append(i*i)

sum_sq = sum(a[:])*sum(a[:])

sq_sum=sum(b[:])

print(sum_sq-sq_sum)
