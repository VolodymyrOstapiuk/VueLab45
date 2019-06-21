export class Planet{

    constructor({name,rotation_period,orbital_period, diameter,climate, gravity,terrain,surface_water,population,
                residents = [],films = [],created,edited,url}) {

        this._name = name;
        this._rotation_period = rotation_period;
        this._orbital_period = orbital_period;
        this._diameter = diameter;
        this._climate = climate;
        this._gravity = gravity;
        this._terrain = terrain;
        this._surface_water = surface_water;
        this._population = population;
        this._residents = residents;
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

    get rotation_period() {
        return this._rotation_period;
    }

    set rotation_period(value) {
        this._rotation_period = value;
    }

    get orbital_period() {
        return this._orbital_period;
    }

    set orbital_period(value) {
        this._orbital_period = value;
    }

    get diameter() {
        return this._diameter;
    }

    set diameter(value) {
        this._diameter = value;
    }

    get climate() {
        return this._climate;
    }

    set climate(value) {
        this._climate = value;
    }

    get gravity() {
        return this._gravity;
    }

    set gravity(value) {
        this._gravity = value;
    }

    get terrain() {
        return this._terrain;
    }

    set terrain(value) {
        this._terrain = value;
    }

    get surface_water() {
        return this._surface_water;
    }

    set surface_water(value) {
        this._surface_water = value;
    }

    get population() {
        return this._population;
    }

    set population(value) {
        this._population = value;
    }

    get residents() {
        return this._residents;
    }

    set residents(value) {
        this._residents = value;
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