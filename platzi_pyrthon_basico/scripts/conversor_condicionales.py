menu = """ 
Bienbenido a la tabla de monedas 💰

1 - Pesos colombianos
2 - Pesos Argentinos
3 - Pesos Mexicanos
Elije una opcions: 
"""

opcion = input(menu)

if opcion == "1":
    pesos = float(input("¿Cuantos pesos colombianos tienes?: "))
    valor_dolar = 3875
    dolares = pesos / valor_dolar
    dolares = round(dolares,2)
    dolares = str(dolares)
    print(f"Tienes {dolares} dolares")
elif opcion == "2":
    pesos = float(input("¿Cuantos pesos Argentinos tienes?: "))
    valor_dolar = 65
    dolares = pesos / valor_dolar
    dolares = round(dolares,2)
    dolares = str(dolares)
    print(f"Tienes {dolares} dolares")
elif opcion == "3":
    pesos = float(input("¿Cuantos pesos mexicanos tienes?: "))
    valor_dolar = 24
    dolares = pesos / valor_dolar
    dolares = round(dolares,2)
    dolares = str(dolares)
    print(f"Tienes {dolares} dolares")
else:
    print("Elije una opcion valida")