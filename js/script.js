//1.create data model of the places//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(title, city, zip, address, teaserimg, creationDate) {
        this.title = title;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserimg = teaserimg;
        this.creationDate = creationDate;
    }
    Place.prototype.displaying = function () {
        //The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.//
        document.querySelector('.davinci').innerHTML += "\n\t\t<div class=\"col-lg-4 col-md-6 col-sm-12 d-flex\">\n\t\t\t            <div class=\"card bg-white text-dark shadow-lg\">\n\t\t\t                <div class=\"card-header text-center\">\n\t\t\t                    <h4>Places: <br>" + this.title + "</h4>\n\t\t\t                </div>\n\t\t\t                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n\t\t\t                <div class=\"card-body\">\n\t\t\t                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n\t\t\t                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n\t\t\t                </div>\n\t\t\t            </div>\n        \t\t\t</div>";
    };
    ;
    return Place;
}());
;
//2. fill it with objects that can be overwritten, so use "let"//
var church = new Place('St. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', "charles-church.jpg", new Date('2019-02-02 08:30'));
var zoo = new Place('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'zoo-vienna.jpg', new Date('2019-03-03 13:30'));
//3.create another class that inherits and extends the above one//
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(title, city, zip, address, teaserimg, creationDate, tel, kindof, site) {
        var _this = _super.call(this, title, city, zip, address, teaserimg, creationDate) || this;
        _this.tel = tel;
        _this.kindof = kindof;
        _this.site = site;
        _this.tel = tel,
            _this.kindof = kindof,
            _this.site = site;
        return _this;
    }
    ;
    Restaurants.prototype.displaying = function () {
        document.querySelector('.davinci').innerHTML += "\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-12 d-flex\">\n\t\t\t            <div class=\"card bg-white text-dark shadow-lg\">\n\t\t\t                <div class=\"card-header text-center\">\n\t\t\t                    <h4>Restaurants:<br> " + this.title + "</h4>\n\t\t\t                </div>\n\t\t\t                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n\t\t\t                <div class=\"card-body\">\n\t\t\t                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n\t\t\t                    <p>" + this.tel + "</p>\n\t\t\t                    <p>" + this.site + "</p>\n\t\t\t                    <p>Type: " + this.kindof + "</p>\n\t\t\t                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>";
    };
    ;
    return Restaurants;
}(Place));
;
//4.add objects to the new class//
var thai = new Restaurants('Das Loft', 'Vienna', 1020, 'Praterstrasse1', 'loft.jpg', new Date('2019-05-05 19:00'), '+43(1)906168110', 'special', 'https://www.dasloftwien.at/');
var sixta = new Restaurants('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'sixta.jpg', new Date('2019-06-06 19:00'), '+43 1 58 528 56', 'wienerisch', 'http://www.sixta-restaurant.at/');
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(title, city, zip, address, teaserimg, creationDate, eventDate, eventTime, price) {
        var _this = _super.call(this, title, city, zip, address, teaserimg, creationDate) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.eventDate = eventDate,
            _this.eventTime = eventTime,
            _this.price = price;
        return _this;
    }
    ;
    Events.prototype.displaying = function () {
        document.querySelector('.davinci').innerHTML += "\n\t\t\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-12 d-flex\">\n\t\t\t            <div class=\"card bg-white text-dark shadow-lg\">\n\t\t\t                <div class=\"card-header text-center\">\n\t\t\t                   <h4>Events: <br>" + this.title + "</h4>\n\t\t\t                </div>\n\t\t\t                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n\t\t\t                <div class=\"card-body\">\n\t\t\t                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n\t\t\t                    <p>" + this.eventDate + " " + this.eventTime + "</p>\n\t\t\t                    <p>" + this.price + "</p>\n\t\t\t                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>";
    };
    ;
    return Events;
}(Place));
;
var kris = new Events('Bonusz Festival 2019', 'Budapest', 1150, 'Hungexpo, Albertirsai ut 10.', 'bonusz.jpg', new Date('2019-09-30 19:00'), 'Sat., 16.11.2019', '19:30', '10,000 HUF');
var lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'lenny-kravitz.jpg', new Date('2019-10-19 13:00'), 'Sat, 09.12.2019', '19:30', '€ 47,80');
//7.create the array of all elements//
var blogs = [church, zoo, thai, sixta, kris, lenny];
//make a function that pushes them to the array//
function displayBlog(array) {
    array.forEach(function (blog) {
        blog.displaying();
    });
}
;
//call the function to display//
displayBlog(blogs);
