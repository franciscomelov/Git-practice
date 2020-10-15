# imprimir numeros pares no multiplos de 2  hasta el 100
def run():
    contador = 0
    limite = 1000000000000000000000000000000000000000000000000000000000
    
    while contador < limite:
        contador += 1

        if contador %3==0:
            continue

        if contador%2 ==0:
            print(contador)

        if contador ==100:
            break


if __name__ == '__main__':
    run()