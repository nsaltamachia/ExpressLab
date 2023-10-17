const cars = [
    { car: "Ford Mustang", production: true },
    { car: "Dodge Dart", production: true },
    { car: "Mercury Cougar", production: false }
];

module.exports = {
    getAll: function () {
        return cars;
    }
};
