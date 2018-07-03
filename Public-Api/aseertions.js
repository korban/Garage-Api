// если не должны получить результаты
pm.test("Предложений не найдено, онлайн поставщик заблокирован, код 404", function () {
    pm.response.to.have.status(404);
});


// ожидаем ответ только от прайса
var price = pm.globals.get("price_id15331");

pm.test("Есть ответ от Прайсового поставщика", function () {
    var jsonData = pm.response.json();

        var exist = false;
        for (var i = 0; i < jsonData.length; i++) {
            var item = jsonData[i];
            if (item.distributorId == price) {
                exist = true;
                break;
            }
        }
        pm.expect(exist).to.be.true;
});

pm.test("Ответ содержит 1 артикул из прайса", function () {
    var jsonData = pm.response.json();
    var responsHas5Objects = jsonData.length;
    pm.expect(responsHas5Objects).to.eql(1);
});



// ожидаем полный выхлоп на id15331
var favorit = pm.globals.get("extern_favorit_id15331");
var price = pm.globals.get("price_id15331");

pm.test("Есть ответ от внешнего поставщика Фаворит", function () {
    var jsonData = pm.response.json();
        var exist = false;
        for (var i = 0; i < jsonData.length; i++) {
            var item = jsonData[i];
            if (item.distributorId == favorit) {
                exist = true;
                break;
            }
        }
        pm.expect(exist).to.be.true;
});

pm.test("Есть ответ от Прайсового поставщика", function () {
    var jsonData = pm.response.json();

        var exist = false;
        for (var i = 0; i < jsonData.length; i++) {
            var item = jsonData[i];
            if (item.distributorId == price) {
                exist = true;
                break;
            }
        }
        pm.expect(exist).to.be.true;
});

pm.test("Ответ содержит 2 осн. артикула и три аналога", function () {
    var jsonData = pm.response.json();
    var responsHas5Objects = jsonData.length;
    pm.expect(responsHas5Objects).to.eql(5);
});




// ожидаем полный выхлоп на id15562 с тестовым артикулом
var online = pm.globals.get("online_id15331");
var price = pm.globals.get("price_id15562");

pm.test("Есть ответ от онлайн поставщика", function () {
    var jsonData = pm.response.json();
    var exist = false;
    for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        if (item.distributorId == online) {
            exist = true;
            break;
        }
    }
    pm.expect(exist).to.be.true;
});

pm.test("Есть ответ от Прайсового поставщика", function () {
    var jsonData = pm.response.json();

    var exist = false;
    for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        if (item.distributorId == price) {
            exist = true;
            break;
        }
    }
    pm.expect(exist).to.be.true;
});

pm.test("Ответ содержит 2 поставщиков", function () {
    var jsonData = pm.response.json();
    var responsHas5Objects = jsonData.length;
    pm.expect(responsHas5Objects).to.eql(2);
});


// выхлоп с боевым артикулом
var online = pm.globals.get("online_id15331");

pm.test("Есть ответ от онлайн поставщика", function () {
    var jsonData = pm.response.json();
    var exist = false;
    for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        if (item.distributorId == online) {
            exist = true;
            break;
        }
    }
    pm.expect(exist).to.be.true;
});

pm.test("Ответ содержит 2 поставщиков, 5 позиций", function () {
    var jsonData = pm.response.json();
    var responsHas5Objects = jsonData.length;
    pm.expect(responsHas5Objects).to.eql(5);
});


// ЗАпрещен ответ с внешних онлайн поставщиков, по боевому артикулу должен быть 1 ответ

var online = pm.globals.get("online_id15331");

pm.test("Есть ответ от онлайн поставщика", function () {
    var jsonData = pm.response.json();
    var exist = false;
    for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        if (item.distributorId == online) {
            exist = true;
            break;
        }
    }
    pm.expect(exist).to.be.true;
});

pm.test("Ответ содержит только артикул из прайса онлайн поставщика", function () {
    var jsonData = pm.response.json();
    var responsHas5Objects = jsonData.length;
    pm.expect(responsHas5Objects).to.eql(1);
});