import random

def get_words(fname):
    with open(fname) as f:
        words = f.read().split()
        words = [word.lower() for word in words]
        words = [word for word in words if word.isalpha()]
        return words

def get_words_of_len(words, length):
    return [word for word in words if len(word) == length]

def get_random_word(words):
    return random.choice(words)


words = get_words('words.txt')
words_lens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

output = []
for word_len in words_lens:
    words_of_len = get_words_of_len(words, word_len)
    word = get_random_word(words_of_len)
    output.append(word)

print(' '.join(output))