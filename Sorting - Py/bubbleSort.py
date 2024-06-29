def bubbleSort(arr):
    for i in range(len(arr),0,-1):
        swap = True
        for j in range(0,i-1):
            if arr[j] >arr[j+1]:
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
               swap = False

        if swap:
            break 
    return arr


print(bubbleSort([2,4,3,1,8,5,2]))