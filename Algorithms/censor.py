def censor_word(string, word):
    i=0
    newstring = ""
    while i < len(string):
        if string[i] == word[0]:
            if string[i:i+len(word)]==word:
                newstring+="*"*len(word)
                i+=(len(word))
            else:
                i+=1
        else:
            newstring+=string[i]
            i+=1
    return newstring

print(censor_word("lsakjdfhellossak", "hello"))