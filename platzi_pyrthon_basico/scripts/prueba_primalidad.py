import math
def es_primo(number):
    for i in range(3, number, 2):
        if number%i==0 or number%2==0 or i > math.sqrt(number):
            print(i)
            return False
    return True

def run(number):
    if es_primo(number):
        return "Es primo"
    
    return "No es primo"

if __name__ == "__main__":
    print("PRIMO O NO PRIMO")
    while True:
        number = int(input("Ingresa un numero: "))
        result = run(number)
        print(result)