import sys

def std_input(): 
    return sys.stdin.readline().strip()

if __name__ == "__main__":
    num = int(std_input()) 
    num_list = list(map(int, std_input()))


    result = [0, 0, 0, 0]
    for index, _ in enumerate(num_list): 
        result[2 - index] = num * _
        result[3] += result[2 - index] * pow(10, 2 - index)
    for _ in result:
        print(_)



'''
A, B = map(int, input().split())
b1 = list(str(B))[-1]
b2 = list(str(B))[1]
b3 = list(str(B))[0]
print(A*int(b1))
print(A*int(b2))
print(A*int(b3))
print(A*B)
'''