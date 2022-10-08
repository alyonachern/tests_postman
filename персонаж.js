get: https://swapi.dev/api/people/10

pm.test("Успешный запрос", function () {
    pm.response.to.have.status(200);
});

pm.test("Поиск имени", function () {
    pm.expect(pm.response.text()).to.include("name");
});
pm.test("Оби Ван - мужчина", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gender).to.eql("male");
});