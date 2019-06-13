class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

    def get_data(self):
        return self.val

    def get_next(self):
        return self.next

    def set_next(self, new_next):
        self.next_node = new_next

###############################

class SLL:
    def __init__(self):
        self.head = None

    def addToFront(self, val):
        new_node = Node(val)
        new_node.set_next(self.head)
        self.head = new_node

    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.get_next()
        return count

    def search(self, val):
    current = self.head
    found = False
    while current and found is False:
        if current.get_data() == val:
            found = True
        else:
            current = current.get_next()
    if current is None:
        raise ValueError("val not in list")
    return current
    
    def delete(self, val):
    current = self.head
    previous = None
    found = False
    while current and found is False:
        if current.get_data() == val:
            found = True
        else:
            previous = current
            current = current.get_next()
    if current is None:
        raise ValueError("Data not in list")
    if previous is None:
        self.head = current.get_next()
    else:
        previous.set_next(current.get_next())

#############################

class Stack:
    def __init__(self):
        self.stack = []

    def add(self, val):
        self.stack.append(val)
        return self

    def pop(self):
        return self.stack.pop()

    def peek(self):
        return self.stack[-1]

    def is_empty(self):
        return True if len(self.stack) < 1 else False

#################################

def is_valid(br_string):
    stk = Stack()
    
    open_match = {
                    "(" : ")",
                    "{" : "}",
                    "[" : "]",
                }

    close_match = {
                    ")" : "(",
                    "}" : "{",
                    "]" : "[",
                }

    for letter in br_string:
        if letter in open_match:
            stk.add(letter)
        elif letter in close_match:
            check = stk.pop()
            if letter != open_match[check]:
                return False
    return stk.is_empty()

### Testing
# strin = "{{(([[9}]]]))}}"
# print(is_valid(strin))

######################################
class Queue:
    def __init__(self):
        self.queue=[]

    def enqueue(self, val):
        self.queue.append(val)
        return self

    def dequeue(self):
        return self.queue.pop([1])


##############
# 
class StackInQueue:
    def __init__():
        self.q1=SLL()
        self.q2=SLL()

    def push(self,val):
        self.q1.enqueue(val)
    
    def pop(self):
        temp=self.q1.dequeue()
        while temp.next:
            self.q2.enqueue(temp)
            temp=self.q1.dequeue()
        temp2 = self.q2.dequeue()
        while temp2.next:
            self.q1.enqueue(temp2)
            temp2 = self.q2.dequeue()
        self.q1.enqueue(temp2)
        return temp