export class Species {
    constructor({name,classification,designation,average_height,skin_colors,hair_colors,eye_colors,average_lifespan,homeworld,
                language,people=[],films=[],created,edited,url}){

        this._name = name;
        this._classification = classification;
        this._designation = designation;
        this._average_height = average_height;
        this._skin_colors = skin_colors;
        this._hair_colors = hair_colors;
        this._eye_colors = eye_colors;
        this._average_lifespan = average_lifespan;
        this._homeworld = homeworld;
        this._language = language;
        this._people = people;
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

    get classification() {
        return this._classification;
    }

    set classification(value) {
        this._classification = value;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    get average_height() {
        return this._average_height;
    }

    set average_height(value) {
        this._average_height = value;
    }

    get skin_colors() {
        return this._skin_colors;
    }

    set skin_colors(value) {
        this._skin_colors = value;
    }

    get hair_colors() {
        return this._hair_colors;
    }

    set hair_colors(value) {
        this._hair_colors = value;
    }

    get eye_colors() {
        return this._eye_colors;
    }

    set eye_colors(value) {
        this._eye_colors = value;
    }

    get average_lifespan() {
        return this._average_lifespan;
    }

    set average_lifespan(value) {
        this._average_lifespan = value;
    }

    get homeworld() {
        return this._homeworld;
    }

    set homeworld(value) {
        this._homeworld = value;
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }

    get people() {
        return this._people;
    }

    set people(value) {
        this._people = value;
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