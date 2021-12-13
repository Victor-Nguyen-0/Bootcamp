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

# print(__name__)