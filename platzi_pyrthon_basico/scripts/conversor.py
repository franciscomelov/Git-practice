pesos = float(input("¿Cuantos pesos colombianos tienes?: "))
valor_dolar = 3875
dolares = pesos / valor_dolar
dolares = round(dolares,2)
dolares = str(dolares)
print(f"Tienes {dolares} dolares")
