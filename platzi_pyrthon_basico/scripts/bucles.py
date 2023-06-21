# def run():
#     power_of_to = [x**2 for x in range(1,11)]
#     print(power_of_to)

# if __name__ == "__main__":
#     run()

# WHILE
# def run():
#     LIMITE = 11
#     contador = 0
#     potencia = 2 ** contador

#     while contador < LIMITE:
#         print(f"2 elevado a {contador} es igual a {potencia}")
#         contador += 1
#         potencia = 2 ** contador


# if __name__ == "__main__":
#     run()


# FOR
# for contador in range(1000):
#     print(contador)

# Recorrer 

def run():
    # nombre = input("Escribe tu nombre: ")
    # for letra in nombre:
    #     print(letra)

    frase = input("Escribe una frase: ")
    for caracter in frase:
        print(caracter.upper())

if __name__ == "__main__":
    run()