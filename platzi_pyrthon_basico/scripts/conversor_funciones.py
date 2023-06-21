menu = """ 
Bienbenido a la tabla de monedas 💰

1 - Pesos colombianos
2 - Pesos Argentinos
3 - Pesos Mexicanos
Elije una opcions: 
"""

opcion = input(menu)

def conversor(valor_dolar, lugar):
    pesos = float(input(f"¿Cuantos pesos {lugar} tienes?: "))
    dolares = pesos / valor_dolar
    dolares = round(dolares,2)
    dolares = str(dolares)
    print(f"Tienes {dolares} dolares")

if opcion == "1":
    dolares = conversor(3875, "colombianos")
    
elif opcion == "2":
    dolares = conversor(65, "Argentinos")

elif opcion == "3":
    dolares = conversor(24, "Mexicanos")
    
else:
    print("Elije una opcion valida")