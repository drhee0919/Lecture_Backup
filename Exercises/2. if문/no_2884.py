import datetime
from datetime import time  
H, M = map(int, input().split())
input_time = datetime(H, M)
output_time = input_time - datetime.timedelta(minutes=45)
print(output_time)
