
def a_n(last: float, amount: float) -> float:
    return last * 1.01 - amount

monthly_options: list[float] = [150, 200, 250, 300, 350, 263.338]
for monthly in monthly_options:
    a = 10_000.00
    for _i in range(48):
        a = a_n(a, monthly)
    print("%f: %f" % (monthly, a))
