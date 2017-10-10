const mongoose = require('mongoose');
const BeerModel = require('../models/beer-model.js');

mongoose.connect('mongodb://localhost/beer-express');

const beerArray = [
{
"name": "Fuller’s London Pride",
"location": "London, England",
"style": "Bitter",
"ibu": 30,
"abv": 4.1,
"description": "London Pride is a smooth and astonishingly complex beer, which has a distinctive malty base complemented by a rich balance of well developed hop flavours from the Target, Challenger and Northdown varieties in the brew.",
"image": "../assets/Beer-Photos/fuller-london-pride.png"
},
{
"name": "Firestone Walker Double Barrel Ale",
"location": "Paso Robles, CA",
"style": "Bitter",
"ibu": 32,
"abv": 5,
"description": "A British Pale Ale never tasted so fresh. We challenge our good friends across the pond to match this one. Can’t be done. We’ve honored the traditions of the great British Pale brewers of Burton-on-Trent using our patented Firestone Union oak barrels. You’re left with a mild blend of vanilla and toasted oak flavor touched with an elegant hint of English noble hops. DBA is the flagship of our company and wildly popular",
"image": "../assets/Beer-Photos/firestone-walker-double-barrel.png"
},
{
"name": "Adnams Bitter",
"location": "Southwold, England",
"style": "Bitter",
"ibu": 33,
"abv": 3.7,
"description": "Southwold Bitter is a beautiful copper-coloured beer, late and dry-hopped with Fuggles for a distinctive, lingering hoppiness. Brewed with the finest East Anglian Pale Ale malt barley, sourced locally to the brewery. We use Fuggles hops which we add late in the boil to preserve the herbal flavours of this traditional English hop. We add more Fuggles to each cask so that the flavour of the hops infuses into the beer.",
"image": "../assets/Beer-Photos/adnams-bitter.png"
},
{
"name": "Deschutes Mirror Pond",
"location": "Bend, OR",
"style": "Pale Ale",
"ibu": 40,
"abv": 5,
"description": "This is base camp, where any craft brew exploration begins. A distinct hop nose and hop-forward flavor make Mirror Pond the quintessential Pale Ale. It is aromatically complex, multi-layered, and unmistakably right.",
"image": "../assets/Beer-Photos/Deschutes-Mirror-Pond.png"
},
{
"name": "Three Floyds Alpha King",
"location": "Munster, IN",
"style": "Pale Ale",
"ibu": 66,
"abv": 6.7,
"description": "Three Floyds Alpha King. Big American Pale Ale with citrusy aroma- a hop lover\'s cult beer and Three Floyds\" flagship beer Brewed with Cenntennial, Cascade & Warrior Hops. Alpha King is an American Pale Ale with a bold citrus hop character. We brew all our beers for our own demanding tastes.",
"image": "../assets/Beer-Photos/three-floyds-alpha-king.png"
},
{
"name": "Summit Extra Pale Ale",
"location": "St. Paul, MN",
"style": "Pale Ale",
"ibu": 45,
"abv": 5.3,
"description": "Summit Extra Pale Ale. Summit Extra Pale Ale is not a beer brewed only for beer snobs. ... Its light bronze color and distinctly hoppy flavor have made it a favorite in St. Paul, Minneapolis and the rest of the Upper Midwest ever since we first brewed it back in 1986.",
"image": "../assets/Beer-Photos/summit-extra-pale-ale.png"
},
{
"name": "Odell St. Lupulin",
"location": "Fort Collins, CO",
"style": "Pale Ales",
"ibu": 46,
"abv": 6.5,
"description": "A mystic legend echoes in our brewhouse - that of St. Lupulin the archetypal hophead. He devoted endless summers to endless rows of hops, tending to the flowers and the beloved resin within - lupulin. Extraordinary oils in this yellow resin provide this dry-hopped extra pale ale with an undeniably pleasing floral aroma and clean, crisp finish. One sip of this seasonal summer ale and you, too, will believe.",
"image": "../assets/Beer-Photos/odell-StLupulin.png"
},
{
"name": "Bell’s Two Hearted Ale",
"location": "Kalamazoo, MI",
"style": "India Pale Ale",
"ibu": 55,
"abv": 7,
"description": "Bells Two Hearted Ale. India Pale Ale style well suited for Hemingway-esque trips to the Upper Peninsula. American malts and enormous hop additions give this beer a crisp finish and incredible floral hop aroma.",
"image": "../assets/Beer-Photos/bells-two-hearted-ale.png"
},
{
"name": "Dogfish Head 60 Minute IPA",
"location": "Rehoboth Beach, DE",
"style": "India Pale Ale",
"ibu": 60,
"abv": 6,
"description": "Our flagship beer. A session India Pale Ale brewed with Warrior, Amarillo & ’Mystery Hop X.’ A powerful East Coast I.P.A. with a lot of citrusy hop character. THE session beer for beer geeks like us!",
"image": "../assets/Beer-Photos/dogfish-head-60-minute-IPA.png"
},
{
"name": "Ninkasi Total Domination",
"location": "Eugene, OR",
"style": "India Pale Ale",
"ibu": 65,
"abv": 6.7,
"description": "Total Domination IPA has a citrusy, floral hop aroma, and big hop flavor balanced with a richness imparted by Carahell and Munich malts. This beer is a big, flavorful Northwest IPA that maintains its drinkability, and as such, has garnered great admiration from the novice craft drinker and the seasoned hop-head alike.",
"image": "../assets/Beer-Photos/Ninkasi-Total-Domination.png"
},
{
"name": "Bear Republic Racer 5",
"location": "Healdsburg, CA",
"style": "India Pale Ale",
"ibu": 75,
"abv": 7,
"description": "Bear Republic Racer 5 IPA is a true India Pale Ale. ... Here is how Bear Republic describes the beer: This hoppy American IPA is a full bodied beer brewed with American pale and crystal malts, and heavily hopped with Chinook, Cascade, Columbus and Centennial.",
"image": "../assets/Beer-Photos/Bear-Republic-Racer-5.png"
},
{
"name": "Meantime IPA",
"location": "London, England",
"style": "India Pale Ale",
"ibu": 70,
"abv": 7.5,
"description": "Meantime are Britain’s only brewers of authentic India Pale Ale. Small batch production allows us to apply the attention to detail and care we require to produce an authentic IPA especially for you. Pound upon pound of Fuggles & Goldings hops are needed to enable us to achieve the dry hopping rates necessary to recreate this great beer style. Enjoy with hot foods and spicy friends, or vice versa.",
"image": "../assets/Beer-Photos/meantime_london_pale_ale.png"
},
{
"name": "Deschutes Black Butte",
"location": "Bend, OR",
"style": "Porter",
"ibu": 30,
"abv": 5.2,
"description": "Deschutes Black Butte Porter. With a dark beer as our first and flagship brand, Black Butte defined Deschutes as a radical player. A slight hop bitterness up front enhances the distinctive chocolate and roasted finish. It\"s prized for its creamy mouthfeel and intense complex flavors.",
"image": "../assets/Beer-Photos/Deschutes-Black-Butte.png"
},
{
"name": "Anchor Porter",
"location": "San Francisco, CA",
"style": "Porter",
"ibu": "",
"abv": 5.6,
"description": "With deep black color, a thick, creamy head, rich chocolate, toffee and coffee flavors, and full-bodied smoothness, Anchor Porter is the epitome of a handcrafted dark beer.",
"image": "../assets/Beer-Photos/Anchor-Porter.png"
},
{
"name": "Geary’s London Porter",
"location": "Portland, ME",
"style": "Porter",
"ibu": "",
"abv": 4.2,
"description": "Faithfully recreated by Geary’s, this classic English style has a deep mahogany color and a restrained roasted malt flavor. The result is rich and complex, yet smooth and refreshing.",
"image": "../assets/Beer-Photos/gearys-london-porter.png"
},
{
"name": "Fuller’s London Porter",
"location": "London, England",
"style": "Porter",
"ibu": 37,
"abv": 5.4,
"description": "Fullers London Porter is an award-winning example of this historic English style; smooth and creamy with delicious chocolate and coffee flavors derived from the roasted malt.",
"image": "../assets/Beer-Photos/Fullers-London-Porter.png"
},
{
"name": "Porterhouse Plain Porter",
"location": "Dublin, Ireland",
"style": "Stout",
"ibu": "",
"abv": 4.2,
"description": "A classic modern light stout with the added complexity of a late kettle hop. Aromatic character. Rich roast, dry, clean and bitter without any sourness.",
"image": "../assets/Beer-Photos/Porterhouse-Plain-Porter.png"
},
{
"name": "Guinness Foreign Extra Stout",
"location": "Dublin, Ireland",
"style": "Stout",
"ibu": "",
"abv": "",
"description": "First brewed by Guinness in 1801, FES was designed for export, and is more heavily hopped than Guinness Draught and Extra Stout, and typically has a higher alcohol content, which gives it a more bitter taste.",
"image": "../assets/Beer-Photos/Guinness-Foreign-Extra-Stout.jpg"
},
{
"name": "Guinness Extra Stout",
"location": "Dublin, Ireland",
"style": "Stout",
"ibu": "",
"abv": "",
"description": "Guinness Extra Stout is crafted from finest quality malt, hops and Irish barley. Sharp and crisp to the taste, it\"s an entirely different experience from the smooth, creamy Guinness Draught and punchier Foreign Extra Stout, but the trademark Guinness flavors preside.",
"image": "../assets/Beer-Photos/GuinnessExtraStout.png"
},
{
"name": "Left Hand Milk Stout",
"location": "Longmont, CO",
"style": "Stout",
"ibu": 25,
"abv": 6,
"description": "This English style of beer, also known as Sweet Stout or Cream Stout, first appeared in London in the late 1800\"s. The milk sugar adds a well rounded sweetness to this dark beer and makes it an outstanding, year round stout.",
"image": "../assets/Beer-Photos/Left-Hand-Milk-Stout.png"
},
{
"name": "Young’s Double Chocolate Stout",
"location": "Bedford, England",
"style": "Stout",
"ibu": "",
"abv": 5.2,
"description": "Chocolate malt and real dark chocolate are combined with Young\"s award winning rich, full flavoured dark beer to craft a satisfyingly indulgent, but never overly sweet experience.",
"image": "../assets/Beer-Photos/Youngs-Double-Chocolate-Stout.png"
},
{
"name": "Rogue Shakespeare Stout",
"location": "Newport, OR",
"style": "Stout",
"ibu": 69,
"abv": 6.1,
"description": "Rogue Shakespeare Oatmeal Stout. Rogue\"s Shakespeare Stout is ebony in color, a rich creamy head and a mellow chocolate aftertaste. It is made from Northwest Harrington, Crystal, and Chocolate malts, roasted barley and rolled oats, along with Cascade hop.",
"image": "../assets/Beer-Photos/Rogue-Shakespeare-Stout.png"
},
{
"name": "The Duck-Rabbit Milk Stout",
"location": "Farmville, NC",
"style": "Stout",
"ibu": "",
"abv": 5.7,
"description": "The Duck-Rabbit Milk Stout is a traditional full-bodied stout brewed with lactose (milk sugar). Because lactose is unfermentable by brewer\"s yeast, it remains in the beer.",
"image": "../assets/Beer-Photos/The-Duck-Rabbit-Milk-Stout.png"
},
{
"name": "North Coast Old Rasputin",
"location": "Fort Bragg, CA",
"style": "Stout",
"ibu": 75,
"abv": 9,
"description": "Produced in the tradition of 18th Century English brewers who supplied the court of Russia\"s Catherine the Great, Old Rasputin seems to develop a cult following wherever it goes.",
"image": "../assets/Beer-Photos/North-Coast-Old-Rasputin.png"
},
{
"name": "Great Divide Yeti",
"location": "Fort Bragg, CA",
"style": "Stout",
"ibu": "",
"abv": "",
"description": "Yeti is an onslaught of the senses. It starts with big, roasty malt flavor that gives way to rich caramel and toffee notes. YETI gets its bold hop character from an enormous quantity of American hops.",
"image": "../assets/Beer-Photos/Great-Divide-Yeti.png"
},
{
"name": "Firestone Walker Parabola",
"location": "Paso Robles, CA",
"style": "Stout",
"ibu": 82,
"abv": 13,
"description": "This Russian imperial oatmeal stout is aged for a full year in a blend of bourbon barrels from Elijah Craig, Four Roses, Pappy Van Winkle, Woodford Reserve, and Buﬀalo Trace.",
"image": "../assets/Beer-Photos/Firestone-Walker-Parabola.png"
},
{
"name": "Avery Ellie’s Brown Ale",
"location": "Boulder, CO",
"style": "Brown Ale",
"ibu": 17,
"abv": 5.5,
"description": "This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Averys late (1992-2002) Chocolate Lab, for which it is named. Crystal and chocolate malts give this beer a brown sugar maltiness with hints of vanilla and nuts, while subtle hopping gives it an overall drinkability that is second to none, just like Ellie!",
"image": "../assets/Beer-Photos/Avery-Ellies-Brown-Ale.jpg"
},
{
"name": "Sierra Nevada Tumbler Autumn Brown Ale",
"location": "Chico, CA",
"style": "Brown Ale",
"ibu": 37,
"abv": 5.5,
"description": "Tumbler is our take on the classic brown ale – full of roasted malt flavor but delicate on the palate and perfect for crisp fall days. Layered with notes of chocolate and toasted bread and a hint of smoke, Tumbler is the ultimate autumn beer, so grab a seat and watch as the leaves come tumbling down.",
"image": "../assets/Beer-Photos/Sierra-Nevada-Tumbler-Autumn.png"
},
{
"name": "Brooklyn Brown Ale",
"location": "Brooklyn, NY",
"style": "Brown Ale",
"ibu": "",
"abv": 5.6,
"description": "A blend of six malts, some of them roasted, give this beer its deep russet-brown color and complex malt flavor, fruity, smooth and rich, with a caramel, chocolate and coffee background.",
"image": "../assets/Beer-Photos/Brooklyn-Brown-Ale.png"
},
{
"name": "Samuel Smith Nut Brown Ale",
"location": "Tadcaster, England",
"style": "Brown Ale",
"ibu": 30,
"abv": 5,
"description": "Brewed at Samuel Smith\"s small, traditional British brewery with well water (the original well sunk in 1758 is still in use), best barley malt, roasted barley, yeast and aromatic hops. Nut Brown Ale is relatively dry with a rich amber-brown colour and nutty flavour derived exclusively from small amounts of dark malt.",
"image": "../assets/Beer-Photos/Samuel-Smith-Nut.png"
},
{
"name": "Lazy Magnolia Southern Pecan Nut Brown Ale",
"location": "Kiln, MS",
"style": "Brown Ale",
"ibu": 19,
"abv": 4.4,
"description": "Southern Pecan Nut Brown Ale is the first beer in the world, to our knowledge, made with whole roasted pecans. The pecans are used just like grain and provide a nutty characteristic and a delightful depth to the flavor profile. This beer is very lightly hopped to allow the malty, caramel, and nutty flavors shine through. The color is dark mahogany. Southern Pecan won a Bronze Medal in the 2006 World Beer Cup in the Specialty Beer category.",
"image": "../assets/Beer-Photos/Lazy-Magnolia-Southern-Pecan-Nut.png"
},
{
"name": "Abita Turbodog",
"location": "Abita Springs, LA",
"style": "Brown Ale",
"ibu": 20,
"abv": 5.6,
"description": "Turbodog is a dark brown ale brewed with Willamette hops and a combination of pale, crystal and chocolate malts. This combination gives Turbodog its rich body and color and a sweet chocolate toffee-like flavor.",
"image": "../assets/Beer-Photos/abita-turbo-dog.png"
},
{
"name": "Smuttynose Old Brown Dog",
"location": "Portsmouth, NH",
"style": "Brown Ale",
"ibu": 18,
"abv": 6.7,
"description": "Old Brown Dog has been cited as a classic example of the “American Brown Ale” style of beer. Compared to a typical English Brown Ale, Old Brown Dog is fuller-bodied and more strongly hopped.",
"image": "../assets/Beer-Photos/Smuttynose-Old-Brown-Dog.png"
},
{
"name": "Sierra Nevada Kellerweis",
"location": "Chico, CA",
"style": "Wheat",
"ibu": 15,
"abv": 4.8,
"description": "Kellerweis is one of the only American Hefeweizens made using the traditional Bavarian style of open fermentation. This difficult and labor-intensive technique adds uncommon depth and flavor complexity. Our hazy-golden hefeweizen is deeply flavorful, refreshing and perfect for a sunny day. To serve, pour two-thirds into a glass, swirl and pour the rest.",
"image": "../assets/Beer-Photos/Sierra-Nevada-Kellerweis.png"
},
{
"name": "Allagash White",
"location": "Portland, ME",
"style": "Wheat",
"ibu": 21,
"abv": 5,
"description": "Our interpretation of a traditional Belgian wheat beer. Brewed with a generous portion of wheat and spiced with coriander and Curacao orange peel, this beer is fruity, refreshing and slightly cloudy in appearance.",
"image": "../assets/Beer-Photos/Allagash-White.png"
},
{
"name": "St. Bernardus Wit",
"location": "Watou, Belgium",
"style": "Wheat",
"ibu": "",
"abv": 5.5,
"description": "This traditional witbier has been developed under supervision of the father of Hoegaarden and Celis White, master brewer Pierre Celis. This beer has been bottle-refermented, which lent it its specific taste.",
"image": "../assets/Beer-Photos/st-bernardus-wit.png"
},
{
"name": "Ommegang Witte",
"location": "Cooperstown, NY",
"style": "Wheat",
"ibu": 11,
"abv": 5.2,
"description": "Witte, which is actually Flemish for white, is brewed with malted and unmalted wheat, orange peel, and coriander - offering a refreshing style that showcases the Belgian talent for brewing full-flavored ales that are also light and balanced. It is pale straw in color, slightly hazy from the yeast, and topped with a huge white, fluffy head.",
"image": "../assets/Beer-Photos/Ommegang-Witte.png"
},
{
"name": "Jolly Pumpkin Calabaza Blanca",
"location": "Dexter, MI",
"style": "Wheat",
"ibu": 15,
"abv": 4.9,
"description": "An artisan white ale brewed in the classic biere blanche tradition. Spiced with orange peel and coriander, you\"ll find it refreshingly tart, with a wonderful dry finish.",
"image": "../assets/Beer-Photos/Jolly-Pumpkin-Calabaza-Blanca.png"
},
{
"name": "Augustiner Dunkel",
"location": "Munich, Germany",
"style": "Dark Lager",
"ibu": "",
"abv": 5.6,
"description": "It is a dark lager, in which most of the grist (and sometimes the whole) is a Munich malt. It is this malt gives the beer a darker, reddish-amber colour and noticeable malty notes. ... In the offer of the brewery Augustiner we find beer in Munich Dunkel style, and that it is the subject of my today\"s tasting.",
"image": "../assets/Beer-Photos/Augustiner-Dunkel.png"
},
{
"name": "Mother Earth Dark Cloud",
"location": "Kinston, NC",
"style": "Dark Lager",
"ibu": "",
"abv": 5.1,
"description": "Steeped in a long history dating back hundreds of years, this old-fashioned beer is again in vogue. Lager is the German word meaning to store, so this beer ages three times longer than our ales do. Dunkel means dark in German, but do not let the color fool you, it is by no means heavy, overbearing or bitter. In fact, it proves to be a very drinkable session beer.",
"image": "../assets/Beer-Photos/Mother-Earth-Dark-Cloud.png"
},
{
"name": "Full Sail Session Black",
"location": "Hood River, OR",
"style": "Dark Lager",
"ibu": 18,
"abv": 5.4,
"description": "Most beers this dark are so heavy-duty, you could eat them with a fork. Not Session Dark. You’ve heard of tall, dark and handsome? Well, this black lager is short, dark and drinkable. With notes of roasty chocolate, it’s the perfect complement to original Session – a dark beer that doesn’t drink like a meal.",
"image": "../assets/Beer-Photos/Full-Sail-Session-Black.png"
},
{
"name": "Xingu Black Beer",
"location": "Santa Maria, Brazil",
"style": "Dark Lager",
"ibu": 20,
"abv": 4.6,
"description": "Xingu. Xingu is a line of exotic beers dedicated to bring awareness to the Amazon Rainforest. Xingu Black Beer is very smooth and drinkable and is a two time winner of the Beverage Taste Institute of Chicago\"s Gold Medal as the best dark lager in the world.",
"image": "../assets/Beer-Photos/Xingu-Black.png"
},
{
"name": "Pilsner Urquell",
"location": "Pilsen, Czech Republic",
"style": "Pale Lager",
"ibu": 35,
"abv": 4.4,
"description": "It is called the model of meter among beers. All other pilsners are a better or worse attempt to copy the original - the first ever Pilsner Urquell. Its unparalleled exceptionality is guaranteed by the same recipe dating from 1842.",
"image": "../assets/Beer-Photos/Pilsner-Urquell.png"
},
{
"name": "Jever Pilsner",
"location": "Jever, Germany",
"style": "Pale Lager",
"ibu": 40,
"abv": 4.9,
"description": "Founded in the 1840s, Jever typifies the very dry style of pilsener from Friesland in the north-west corner of Germany and this remarkable beer is lagered for an impressive 90 days. Unique in taste, Jever is one of the finest German pilseners out there.",
"image": "../assets/Beer-Photos/Jever-Pilsner.png"
},
{
"name": "Victory Prima Pils",
"location": "Downington, PA",
"style": "Pale Lager",
"ibu": "",
"abv": 5.3,
"description": "With heaps of whole flower European hops and fine German malts, we achieved the bracing herbal bite and smooth malt flavor that we sought. Prima… an exclamation of Victory!",
"image": "../assets/Beer-Photos/Victory-Prima-Pils.png"
},
{
"name": "Sly Fox Pikeland Pils",
"location": "Pottstown, PA",
"style": "Pale Lager",
"ibu": 44,
"abv": 4.9,
"description": "A northern German-style Pilsner brewed with imported German pils malt and hopped with German and Czech hops. Light in body, light straw in color and dry.",
"image": "../assets/Beer-Photos/Sly-Fox-Pikeland-Pils.png"
},
{
"name": "Stoudts Gold Lager",
"location": "Adamstown, PA",
"style": "Pale Lager",
"ibu": 25,
"abv": 4.7,
"description": "This golden-colored, smooth-bodied Munich-style Helles is brewed with a Two-Row base malt and 3 types of aroma specialty malts. A quaffable lager, with a subtle balance of sweet malt and clean crisp hops.",
"image": "../assets/Beer-Photos/Stoudts-Gold-Lager.png"
},
{
"name": "Great Lakes Dortmunder Gold",
"location": "Cleveland, OH",
"style": "Pale Lager",
"ibu": 30,
"abv": 5.8,
"description": "This smooth lager strikes a delicate balance between malt and hops in the aroma, palate, finish and body. It has more body and less hops than a Pilsner, and less malt and more hops than a Munich style lager.",
"image": "../assets/Beer-Photos/Great-Lakes-Dortmunder-Gold.png"
},
{
"name": "Paulaner Oktoberfest",
"location": "Munich, Germany",
"style": "Amber",
"ibu": 20,
"abv": 6,
"description": "This full bodied golden Oktoberfest lager is the only beer served in Paulaner Oktoberfest tents today. It is the pinnacle of German brewing: wonderfully mellow with a balanced harmonious taste. It has a strong note of malt and the pleasant fragrance of hops.",
"image": "../assets/Beer-Photos/Paulaner-Oktoberfest.png"
},
{
"name": "Sly Fox Oktoberfest",
"location": "Pottstown, PA",
"style": "Amber",
"ibu": 25,
"abv": 5.8,
"description": "This traditional Oktoberfest beer celebrates the arrival of Fall. It is a medium-bodied, smooth and malty brew made with German Vienna malts and noble German hops.",
"image": "../assets/Beer-Photos/Sly-Fox-Oktoberfest.png"
},
{
"name": "Free State Oktoberfest",
"location": "Lawrence, KS",
"style": "Amber",
"ibu": 25,
"abv": 5.4,
"description": "This is a smooth, malty lager fashioned after the famous Octoberfest beers in Munich. Each year around this time, the Germans celebrate the anniversary of the marriage, in 1810, of the Crown Prince of Bavaria. Huge crowds pile into Munich to imbibe the pride of the cities breweries by the stein full.",
"image": "../assets/Beer-Photos/Free-State-Oktoberfest.png"
},
{
"name": "Great Lakes Eliot Ness",
"location": "Cleveland, OH",
"style": "Amber",
"ibu": 27,
"abv": 6.2,
"description": "An amber lager with rich, fragrant malt flavors balanced by crisp noble hops.",
"image": "../assets/Beer-Photos/Great-Lakes-Eliot-Ness.png"
},
{
"name": "Einbecker Mai-Ur-Bock",
"location": "Einbeck, Germany",
"style": "Bock",
"ibu": 32,
"abv": 6.5,
"description": "Einbecker Mai-Ur-Bock is a traditional springtime beer with a pale orange color, a fluffy off-white head, and a honeyed, toffeeish malt aroma. This is a delicious beer in which hops and malt vie for dominance on the palate.",
"image": "../assets/Beer-Photos/Einbecker-Mai-Ur-Bock.png"
},
{
"name": "Pennsylvania St Nikolaus Bock",
"location": "Pittsburgh, PA",
"style": "Bock",
"ibu": 25,
"abv": 6.5,
"description": "Munich and various roasted malts give it a very malty, rich flavor with a hint of burnt flavor. 100% imported Hallertau hops, moderate bitterness and aroma.",
"image": "../assets/Beer-Photos/st-nikolaus-bock-bier.png"
},
{
"name": "Ayinger Celebrator Doppelbock",
"location": "Aying, Germany",
"style": "Bock",
"ibu": 24,
"abv": 6,
"description": "Celebrator has a creamy head of tight bubbles contrasting beautifully with its profound dark robe. It is full-bodied and velvety from half a year’s aging. Although it is strong, it is not overpowering. There is a wonderful and complex balance between the various malts, the alcohol and the subtle hops. A complex fruitiness of roasted malt and whole hop flowers make Celebrator great as a party drink with friends and family at celebrations. Despite its richness, it has a faintly smoky dryness in the finish.",
"image": "../assets/Beer-Photos/Ayinger-Celebrator-Doppelbock.png"
},
{
"name": "Capital Autumnal Fire",
"location": "Madison, WI",
"style": "Bock",
"ibu": 30,
"abv": 7.8,
"description": "A blazing rich beer, this is a doppelbock based on an Oktoberfest personality. Warm and intriguing, the perfect Brandy Snifter beer. Available September and October.",
"image": "../assets/Beer-Photos/capital-autumnal-fire.png"
}
];

BeerModel.create(
  // 1st argument -> array of products to save
  beerArray,

  // 2nd argument -> callback
  (err, beersAfterSave) => {
      if (err) {
          console.log('Create error 😅');
          console.log(err);
          return;
      }

      beersAfterSave.forEach((oneBeer) => {
          console.log('New Product ---> ' + oneBeer.name);
      });
  }
);
