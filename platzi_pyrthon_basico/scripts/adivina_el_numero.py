import random
def game():
    counter = 1
    number = random.randint(1,100)
    print(number)
    while True:
        user = int(input("Escoje un numero del 1 al 100: "))

        if user > number:
            print("elije un numero mas chico")
        elif user < number:
            print("Elije un numero mas grande")
        else:
            print("Bien echo")
            print(f"lo lograste en {counter} intentos")
            break
        
        counter += 1
        

if __name__ == "__main__":
    game()