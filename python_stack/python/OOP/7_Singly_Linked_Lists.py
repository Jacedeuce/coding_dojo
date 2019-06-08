class SList:

    def __init__(self):
        self.head = None

    def print_values(self):
        temp = self.head
        while temp != None:
            print(temp.value)
            temp = temp.next
        return self

    def add_to_front(self, val):	
        new_node = SLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self

    def get_last_node(self):
        next_node = self.head
        ## add length value to store list length
        while next_node != None:
            last_node = next_node
            next_node = next_node.next
        return last_node ## return length value

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_front(val)
            return self
        new_node = SLNode(val)
        last_node = self.get_last_node() ## need to account for length value return in future
        last_node.next = new_node
        return self

    def remove_from_front(self):
        self.head = self.head.next

    def remove_from_back(self):
        node = self.head
        while node.next != None:
            last_node, node  = node, node.next
        last_node.next = None

    def remove_val(self, val):
        node = self.head
        if node.value == val:
            self.head = node.next
        else:
            prev_node, node = node, node.next
            while node.next != None:
                if node.value == val:
                    prev_node.next = node.next
                    return self
                prev_node = node
                node = node.next
                if node.next == None and node.value == val:
                    prev_node.next = None
        return self

    def insert_at(self, val, pos):
        new_node = SLNode(val)
        node = self.head
        if pos == 0: ## case for beginning
            self.head = new_node
            new_node.next = node
            return self
        next_node = node.next
        for i in range(0, pos-1): # traverse list elements
            if next_node == None:
                node.next = new_node
                return self
            node, next_node = next_node, next_node.next
        node.next = new_node
        new_node.next = next_node
        return self

    # def is_loop(self):
    #     walker = self.head
    #     while walker.next != None:
    #         jogger = walker.next
    #         runner = walker.next.next
# https://en.wikipedia.org/wiki/Cycle_detection


    #         jogger = jogger.next
    #         for i in range(2):
    #             runner == jogger
    #             runner = runner.next

class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

singlelist = SList()
singlelist.add_to_front(10).add_to_front(9).add_to_front(8).add_to_front(7).add_to_front(6).add_to_front(5).add_to_front(4).add_to_front(3).add_to_front(2).add_to_front(1)


singlelist.insert_at(-1, 0)
singlelist.insert_at(100, 9)
singlelist.insert_at(99, 5)

print()
singlelist.print_values()

# # singlelist.print_values()
# singlelist.add_to_back(11)
# singlelist.remove_from_front()
# singlelist.print_values()
# print()
# singlelist.remove_from_back()
# singlelist.print_values()

# singlelist.remove_val(7)
# singlelist.print_values()
# singlelist.remove_val(11)
# singlelist.print_values()
# singlelist.remove_val(1)
# singlelist.print_values()
