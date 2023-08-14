from __future__ import annotations
from typing import Generator


def permuationsOfString(s: str) -> Generator[str, None, None]:
    if len(s) == 1:
        yield s
    else:
        for i in range(len(s)):
            for p in permuationsOfString(s[:i] + s[i + 1:]):
                yield s[i] + p

def vowelsInAlphabeticalOrder(s: str) -> bool:
    vowels = "aeiou"
    lastVowel = ""
    for c in s:
        if c in vowels:
            if c < lastVowel:
                return False
            lastVowel = c
    return True

def countPermutationsWithVowelsInAlphabeticalOrder(s: str) -> tuple[int, int]:
    count = 0
    total = 0
    for p in permuationsOfString(s):
        print(p)
        if vowelsInAlphabeticalOrder(p):
            count += 1
        total += 1
    return count, total

def main() -> None:
    string = "facetious"
    count, total = countPermutationsWithVowelsInAlphabeticalOrder(string)
    print(f"\n\n{count} permutations of {string} have vowels in alphabetical order out of {total} total permutations")


if __name__ == "__main__":
    main()