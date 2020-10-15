import random
import string





def generar_password():
    pass_elements = list(range(10)) + list(string.ascii_letters) + list(range(10))
    random.shuffle(pass_elements)
    new_password = ""

    for i in range(10):
        new_password += str(pass_elements[random.randint(0,61)])
    return new_password

def run():
    password = generar_password()
    print("Tu nueva contraseña es " + password)

if __name__ == "__main__":
    run()