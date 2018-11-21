INSERT INTO Brewery(name,logoUrl) VALUES('Harveys','https://pbs.twimg.com/profile_images/859330003103862784/zS4k0gJG.jpg');
INSERT INTO Drink(name,logoUrl,idBrewery,abv) VALUES('Sussex Best Bitter', 'https://d1dh7zebtp17c7.cloudfront.net/20151026093216/Polypin-Best-Bitter-2016.jpg',1,4.0);
INSERT INTO Bar(name,address,postcode,easting,northing,latitude,longitude,local_authority) VALUES('Anglesey Arms','Halnaker, Boxgrove, West Sussex','PO18 0NQ',490846,108134,50.865585,-0.710445,'Chichester');
INSERT INTO Offer(idBar,idBrewery,idDrink,price) VALUES(1,1,1,2.5);