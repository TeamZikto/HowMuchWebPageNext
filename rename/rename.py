
import os 

def main(): 

    for count, filename in enumerate(os.listdir("out/itemTrendDetail")): 
        data = str(filename).decode()
        print(data)
        

if __name__ == '__main__': 
    main() 