export default class Person{
    constructor({name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,
                films=[],species=[],starships=[],created,edited,url}){

        this._name = name;
        this._height = height;
        this._mass = mass;
        this._hair_color = hair_color;
        this._skin_color = skin_color;
        this._eye_color = eye_color;
        this._birth_year = birth_year;
        this._gender = gender;
        this._homeworld = homeworld;
        this._films = films;
        this._species = species;
        this._starships = starships;
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

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get mass() {
        return this._mass;
    }

    set mass(value) {
        this._mass = value;
    }

    get hair_color() {
        return this._hair_color;
    }

    set hair_color(value) {
        this._hair_color = value;
    }

    get skin_color() {
        return this._skin_color;
    }

    set skin_color(value) {
        this._skin_color = value;
    }

    get eye_color() {
        return this._eye_color;
    }

    set eye_color(value) {
        this._eye_color = value;
    }

    get birth_year() {
        return this._birth_year;
    }

    set birth_year(value) {
        this._birth_year = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get homeworld() {
        return this._homeworld;
    }

    set homeworld(value) {
        this._homeworld = value;
    }

    get films() {
        return this._films;
    }

    set films(value) {
        this._films = value;
    }

    get species() {
        return this._species;
    }

    set species(value) {
        this._species = value;
    }

    get starships() {
        return this._starships;
    }

    set starships(value) {
        this._starships = value;
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