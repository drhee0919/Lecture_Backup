A, B, C = map(int, input().split())
if A>B and C>A:
    print(A)
elif C>A and B>A:
    print(A)
elif B>C and A>B:
    print(B)
elif B>A and C>B:
    print(B)
elif C>B and A>C:
    print(C)
elif C>A and B>C:
    print(C)
elif A==B and A>C:
    print(A)
elif B==C and B>A:
    print(B)
elif C==A and C>B:
    print(C)