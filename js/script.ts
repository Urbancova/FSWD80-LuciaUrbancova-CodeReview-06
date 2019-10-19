//1.create data model of the places//

class Place {				
	
	constructor(public title: string, public city: string, public zip: number, public address: string, public teaserimg: string, public creationDate: Date) {}
	displaying(){
		//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.//
	document.querySelector('.davinci').innerHTML += `
		<div class="col-lg-4 col-md-6 col-sm-12 d-flex">
			            <div class="card bg-white text-dark shadow-lg">
			                <div class="card-header text-center">
			                    <h4>Places: <br>${this.title}</h4>
			                </div>
			                <img class="card-img-top img-responsive" src="img/${this.teaserimg}" alt="${this.title}">
			                <div class="card-body">
			                    <p>${this.address}, ${this.zip} ${this.city}</p>
			                    <hr><p><small>Created: ${this.creationDate}</small></p>
			                </div>
			            </div>
        			</div>`
};
};

//2. fill it with objects that can be overwritten, so use "let"//

let church = new Place('St. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', "charles-church.jpg", new Date('2019-02-02 08:30'));
let zoo = new Place('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'zoo-vienna.jpg', new Date('2019-03-03 13:30'));

//3.create another class that inherits and extends the above one//
class Restaurants extends Place {					
	constructor(title: string, city: string, zip: number, address: string, teaserimg: string, creationDate: Date, public tel: string, public kindof: string, public site: string){
	super(title, city, zip, address, teaserimg, creationDate);
	this.tel = tel,
	this.kindof = kindof,
	this.site = site
	};
	displaying(){
		document.querySelector('.davinci').innerHTML += `
				<div class="col-lg-4 col-md-6 col-sm-12 d-flex">
			            <div class="card bg-white text-dark shadow-lg">
			                <div class="card-header text-center">
			                    <h4>Restaurants:<br> ${this.title}</h4>
			                </div>
			                <img class="card-img-top img-responsive" src="img/${this.teaserimg}" alt="${this.title}">
			                <div class="card-body">
			                    <p>${this.address}, ${this.zip} ${this.city}</p>
			                    <p>${this.tel}</p>
			                    <p>${this.site}</p>
			                    <p>Type: ${this.kindof}</p>
			                    <hr><p><small>Created: ${this.creationDate}</small></p>
			                </div>
			            </div>
			        </div>`
	};
};

//4.add objects to the new class//
														
let thai = new Restaurants('Das Loft', 'Vienna', 1020, 'Praterstrasse1', 'loft.jpg', new Date('2019-05-05 19:00'), '+43(1)906168110', 'special', 'https://www.dasloftwien.at/');
let sixta = new Restaurants('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'sixta.jpg', new Date('2019-06-06 19:00'), '+43 1 58 528 56', 'wienerisch', 'http://www.sixta-restaurant.at/');



class Events extends Place {							 
	constructor(title, city, zip, address, teaserimg, creationDate, public eventDate: string, public eventTime: string, public price: string){
		super(title, city, zip, address, teaserimg, creationDate);
		this.eventDate = eventDate,
		this.eventTime = eventTime,
		this.price = price
	};
	displaying(){
		document.querySelector('.davinci').innerHTML += `
		
					<div class="col-lg-4 col-md-6 col-sm-12 d-flex">
			            <div class="card bg-white text-dark shadow-lg">
			                <div class="card-header text-center">
			                   <h4>Events: <br>${this.title}</h4>
			                </div>
			                <img class="card-img-top img-responsive" src="img/${this.teaserimg}" alt="${this.title}">
			                <div class="card-body">
			                    <p>${this.address}, ${this.zip} ${this.city}</p>
			                    <p>${this.eventDate} ${this.eventTime}</p>
			                    <p>${this.price}</p>
			                    <hr><p><small>Created: ${this.creationDate}</small></p>
			                </div>
			            </div>
			        </div>`
	};
};

let kris = new Events('Bonusz Festival 2019', 'Budapest', 1150, 'Hungexpo, Albertirsai ut 10.', 'bonusz.jpg', new Date('2019-09-30 19:00'), 'Sat., 16.11.2019', '19:30', '10,000 HUF');
let lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'lenny-kravitz.jpg', new Date('2019-10-19 13:00'), 'Sat, 09.12.2019', '19:30', '€ 47,80');


//7.create the array of all elements//

let blogs: any[] = [church, zoo, thai, sixta, kris, lenny];	

//make a function that pushes them to the array//

function displayBlog(array: any[]){	
    array.forEach((blog:any)=>{
        blog.displaying();
    });
};

//call the function to display//
displayBlog(blogs);	





