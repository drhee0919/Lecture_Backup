for i in range(20,1000000000,20):
    for a in range(1,20):
        if i%a != 0:
            break
        if a >= 19:
            print(i)


'''
최대공약수 구하는 공식 
def get_gcd(num1,num2):
    i=1
    while i <= num2:
        if num1%i==0 and num2%i==0:
            gcd=i
        i+=1
    return gcd
 
print(get_gcd(12,18))
print(get_gcd(27,63))
'''