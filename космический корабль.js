get: https://swapi.dev/api/starships/5

pm.test("Модель", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.model).to.eql("Sentinel-class landing craft");
});

pm.test("Сколько в потреблении?", function () {
    pm.expect(pm.response.text()).to.include("consumables");
});

pm.test ("Имя", function () {
pm.response.to.have.jsonBody('name')
});