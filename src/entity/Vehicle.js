export default class Vehicle {
    constructor({name,model,manufacturer,cost_in_credits,length,max_atmosphering_speed,crew,passengers,
                cargo_capacity,consumables,vehicle_class,pilots=[],films=[],created,edited,url}){
        this._name = name;
        this._model = model;
        this._manufacturer = manufacturer;
        this._cost_in_credits = cost_in_credits;
        this._length = length;
        this._max_atmosphering_speed = max_atmosphering_speed;
        this._crew = crew;
        this._passengers = passengers;
        this._cargo_capacity = cargo_capacity;
        this._consumables = consumables;
        this._vehicle_class = vehicle_class;
        this._pilots = pilots;
        this._films = films;
        this._created = created;
        this._edited = edited;
        this._url = url;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    set manufacturer(value) {
        this._manufacturer = value;
    }

    get cost_in_credits() {
        return this._cost_in_credits;
    }

    set cost_in_credits(value) {
        this._cost_in_credits = value;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get max_atmosphering_speed() {
        return this._max_atmosphering_speed;
    }

    set max_atmosphering_speed(value) {
        this._max_atmosphering_speed = value;
    }

    get crew() {
        return this._crew;
    }

    set crew(value) {
        this._crew = value;
    }

    get passengers() {
        return this._passengers;
    }

    set passengers(value) {
        this._passengers = value;
    }

    get cargo_capacity() {
        return this._cargo_capacity;
    }

    set cargo_capacity(value) {
        this._cargo_capacity = value;
    }

    get consumables() {
        return this._consumables;
    }

    set consumables(value) {
        this._consumables = value;
    }

    get vehicle_class() {
        return this._vehicle_class;
    }

    set vehicle_class(value) {
        this._vehicle_class = value;
    }

    get pilots() {
        return this._pilots;
    }

    set pilots(value) {
        this._pilots = value;
    }

    get films() {
        return this._films;
    }

    set films(value) {
        this._films = value;
    }

    get created() {
        return this._created;
    }

    set created(value) {
        this._created = value;
    }

    get edited() {
        return this._edited;
    }

    set edited(value) {
        this._edited = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }
}