class Pet:
    def __init__(self, name, type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks 
        self.energy = 100
        self.health = 100
        self.noise = noise

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

    def noisecall(self):
        print(self.noise)

class Ninja:
    def __init__ (self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet 

    def walk(self):
        self.pet.play()
        print(f"{self.pet.name} now has {self.pet.health} health!")
        return self

    def feed(self):
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {food} !")
            self.pet.eat()
        else:
            print("You do not currently possess any pet food.")
        return self

    def bathe(self):
        self.pet.noisecall()

victor_treats = ["sunflower seeds"]
victor_pet_food = ["sunflower seeds"]

Hamtaro = Pet("Hamtaro", "Hamster", ["goes on big adventures", "runs on wheel", "acts cute"], "Heke~")
Victor = Ninja("Victor", "Nguyen", victor_treats, victor_pet_food, Hamtaro)

Victor.walk()
Victor.feed()
Victor.feed()
Victor.bathe()