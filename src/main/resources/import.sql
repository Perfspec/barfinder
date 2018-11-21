INSERT INTO Brewery(logoUrl, name) VALUES("urlsomething1","Brewery1");
INSERT INTO Drink(abv, idBrewery, logoUrl, name) VALUES(3.8, 1, "urlsomething2", "WhiskySour");
INSERT INTO Bar(name,address,postcode,easting,northing,latitude,longitude,local_authority) VALUES("Anglesey Arms","Halnaker, Boxgrove, West Sussex","PO18 0NQ",490846,108134,50.865585,-0.710445,"Chichester");
INSERT INTO Offer(idBar,idBrewery,idDrink,price) VALUES(1,1,1,2.5);