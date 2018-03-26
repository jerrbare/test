const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})

app.use((request,response,next) => {
	response.render('maintenance.hbs', {

	})
	
});

app.get('/', (request,response) => {
	response.render('menu.hbs', {
		title: "Menu page",
	});

});

app.get('/info', (request,response) => {
	response.render('about.hbs', {
		title: "About Page",
		year: new Date().getFullYear(),
		cat: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?h=350&auto=compress&cs=tinysrgb"
	});
})


app.listen(8080, () => {
	console.log('Server is up on port 8080');
});

