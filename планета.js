get: https://swapi.dev/api/planets/7

pm.test("Климат", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.climate).to.eql("temperate");
});

pm.test("Есть ли жизнь", function () {
    pm.expect(pm.response.text()).to.include("population");
});

pm.test("Диаметр", function () {
    pm.response.to.have.jsonBody("diameter")
});