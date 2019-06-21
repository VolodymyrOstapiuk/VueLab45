export default class Film {
    constructor({title,episode_id,opening_crawl,director,producer,release_date,characters=[],
                    planets=[],starships=[],vehicles=[],species=[],created,edited,url}){
        this._title = title;
        this._episode = episode_id;
        this._opening_crawl = opening_crawl;
        this._director = director;
        this._producer = producer;
        this._release_date = release_date;
        this._characters = characters;
        this._planets = planets;
        this._starships = starships;
        this._vehicles = vehicles;
        this._species = species;
        this._created = created;
        this._edited = edited;
        this._url = url;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get episode() {
        return this._episode;
    }

    set episode(value) {
        this._episode = value;
    }

    get opening_crawl() {
        return this._opening_crawl;
    }

    set opening_crawl(value) {
        this._opening_crawl = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get producer() {
        return this._producer;
    }

    set producer(value) {
        this._producer = value;
    }

    get release_date() {
        return this._release_date;
    }

    set release_date(value) {
        this._release_date = value;
    }

    get characters() {
        return this._characters;
    }

    set characters(value) {
        this._characters = value;
    }

    get planets() {
        return this._planets;
    }

    set planets(value) {
        this._planets = value;
    }

    get starships() {
        return this._starships;
    }

    set starships(value) {
        this._starships = value;
    }

    get vehicles() {
        return this._vehicles;
    }

    set vehicles(value) {
        this._vehicles = value;
    }

    get species() {
        return this._species;
    }

    set species(value) {
        this._species = value;
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