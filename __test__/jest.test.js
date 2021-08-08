test("principais assentirvas do jest", () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
})

test("trabalhando com objeto",() => {
    const obj = { title: "There's No Disgrace Like Home" };
    expect(obj).toHaveProperty("title", "There's No Disgrace Like Home");
    expect(obj.title).toBe("There's No Disgrace Like Home");

    const obj2 = { title: "There's No Disgrace Like Home" };
    expect(obj).toEqual(obj2);
});

