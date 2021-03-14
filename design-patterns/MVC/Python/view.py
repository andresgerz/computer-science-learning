

class View:
    
    def __init__(self):
        self.option1 = "Show"
        self.option2 = "Update"
        self.option3 = "Add"
        self.option4 = "Search"
        self.option5 = "Delete"
        self.option6 = "Exit"


    def menu(self):
        print("\nMenu: \n")
        print(f"1) {self.option1}")
        print(f"2) {self.option1}")
        print(f"3) {self.option1}")
        print(f"4) {self.option1}")
        print(f"5) {self.option1}")
        print(f"6) {self.option1}")  

        return int(input())

    def results(self, res):
        print("Results: ")

        for i in res:
            print(i)

    def put-data(self, *args):        


view1 = View()
view1.menu()