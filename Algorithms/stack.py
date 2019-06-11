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

    # val_match = {
    #                 ")" : "(",
    #                 "}" : "{",
    #                 "]" : "[", 
    #             }
    for letter in br_string:
        if letter in open_match:
            stk.add(letter)
        elif letter in close_match:
            check = stk.pop()
            if letter != open_match[check]:
                return False
    return stk.is_empty()
    # for letter in br_string:
    #     if letter in val_match.values():
    #         stk.add(letter)
    #     elif letter in val_match.keys():
    #         if val_match[letter] != stk.peek():
    #             return False
    #         else:
    #             stk.pop()
    #     else:
    #         pass

strin = "{{(([[9}]]]))}}"
print(is_valid(strin))

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

if open_match[letter]:
    stk.add(letter)
elif close_match[letter]:
    check = stk.pop()
    if letter is open_match[check]:
        return False
return stk.is_empty()