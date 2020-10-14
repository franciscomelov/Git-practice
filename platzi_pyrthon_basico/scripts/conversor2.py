to_peso = 21.29
to_dollar = 0.047 
m_user = 0

user = int(input(
'''       
            Conversor 
        Pesos mxn <--> DOLLAR
Elije "1" o "2"
( 1 ) Pesos a Dolares
( 2 ) Dolares a Pesos
: '''))
 
if user == 1:
    money_user = float(input("¿Cuantos pesos tienes?: "))
    money_user = money_user * to_dollar
    money_user = round(money_user,2)
    print(f"Tienes {money_user} dolares")
else:
    money_user = float(input("¿Cuantos dolares tienes?: "))
    money_user = money_user * to_peso
    money_user = round(money_user,2)
    print(f"Tienes {money_user} dolares")

   