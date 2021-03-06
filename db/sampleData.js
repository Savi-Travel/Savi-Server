module.exports = {
	cities: [
		{
			name: 'Paris',
			mainImage: 'paris_city.jpg'
		},
		{
			name: 'London',
			mainImage: 'london_city.jpg'
		},
		{
			name: 'Amsterdam',
			mainImage: 'amsterdam_city.jpg'
		},
		{
			name: 'Rio de Janeiro',
			mainImage: 'rio-de-janiero_city.jpg'
		},
		{
			name: 'Shanghai',
			mainImage: 'shanghai_city.jpg'
		},
		{
			name: 'New York',
			mainImage: 'new-york_city.jpg'
		}
	],

	tours: [
		{
			city: 'Paris',
			title: 'Eiffel Tower',
			description: 'See the outside and inside of the famous Eiffel Tower. Learn the ins and outs of this historical building, eat in the restaurant, and leave with an experience you\'ll never forget!',
			mainImage: 'paris_tour_eiffel-tower.jpg',
			price: 45.99
		},
		{
			city: 'Paris',
			title: 'The Riever Seine',
			description: 'Take a boat down the River Seine for a beautiful view of Paris right as the sun sets, then get dropped off just in time to visit some of the world\'s finest restaurants',
			mainImage: 'paris_tour_seine.jpg',
			price: 30.99
		},
		{
			city: 'Paris',
			title: 'Restaurant Scene',
			description: 'For the foodie tourist, this guided walkthrough will introduce you to some of the finest places to eat in the heart of Paris. By the time the tour is over you will be ready to dine like royalty!',
			mainImage: 'paris_tour_restaurants.jpg',
			price: 43.99
		},
		{
			city: 'London',
			title: 'See the City',
			description: 'See London from a different perspective on the London Eye and enjoy the new 4D Experience, a groundbreaking 3D film with spectacular in-theater effects that include wind, bubbles, and mist. Fast-track admission is also available.',
			mainImage: 'london_tour_city.jpg',
			price: 52.99
		},
		{
			city: 'London',
			title: 'Big Ben',
			description: 'Visit London\s most iconic building, the clock tower Big Ben and get the inside scoop on its historical significance, how it was built, and more',
			mainImage: 'london_tour_big-ben.jpg',
			price: 35.99
		},
		{
			city: 'London',
			title: 'Buckingham Palace',
			description: 'This guided tour of Buckingham Palace will give you insight like no other into the inner workings of the royal family\'s famous abode',
			mainImage: 'london_tour_buckingham-palace.jpg',
			price: 65.99
		},
		{
			city: 'Amsterdam',
			title: 'Canal Boat Tour',
			description: 'Enjoy a marvellous canal cruise in Amsterdam on board of a semi-open electric boat with zero emissions, and benefit from an audioguide in 19 different languages!',
			mainImage: 'amsterdam_tour_canal.jpg',
			price: 35.99
		},
		{
			city: 'Amsterdam',
			title: 'Amsterdam Night Life',
			description: 'Get an end-to-end tour of Amsterdam\'s greatest party spots. Come tour the night life during the day so you know where to go once the sun sets. These guides are experienced in having a great time!',
			mainImage: 'amsterdam_tour_night-life.jpg',
			price: 38.99
		},
		{
			city: 'Rio de Janeiro',
			title: 'Rio de Janeiro Highlights',
			description: 'See 2 of the most iconic sights of Rio de Janeiro on a 4-hour guided tour of Corcovado and the Selarón Steps. Add-on Sugar Loaf Mountain on a 6-hour tour, and see Rio from different perspectives. Marvel at Chilean artist Jorge Selarón’s ceramic art steps!',
			mainImage: 'rio-de-janiero_tour_city.jpg',
			price: 31.99
		},
		{
			city: 'Shanghai',
			title: 'Shanghai in a Hurry',
			description: 'For tourists who only have a short layover in Shanghai, taking sightseeing bus to explore the beauty of the city undoubtedly is a good idea. In this way, visitors can squeeze limited time to tour around more must-sees during their one or two day(s) trip.',
			mainImage: 'shanghai_tour_layover.jpg',
			price: 32.99
		},
		{
			city: 'New York',
			title: 'NYC Bus Tour',
			description: 'The open-top Big Bus sightseeing tour is the most enjoyable and convenient way to see New York! You’ll see famous landmarks such as the iconic Empire State Building to the new One World Trade Center.',
			mainImage: 'new-york_tour_bus.jpg',
			price: 41.99
		}
	],

	languages: [
		'English',
		'Spanish',
		'French',
		'Italian',
		'Portuguese',
		'German',
		'Mandarin',
		'Japanese'
	],

	users: [ { userName: 'Kristopher Giovanni',
    userEmail: 'kristophergiovanni@savi-travel.com',
    mdn: '573-555-2820',
    city: 'Paris',
    country: 'China',
    userAuthId: 'I2yN9KIxleG3uK4M',
    photo: 'kristopher-giovanni.jpg',
    languages: [ 'English', 'German', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 3.73, seats: 9 } },
  { userName: 'Adan Jordon',
    userEmail: 'adanjordon@savi-travel.com',
    mdn: '130-555-3068',
    city: 'Paris',
    country: 'France',
    userAuthId: 'a9msur1thzjTV05g',
    photo: 'adan-jordon.jpg',
    languages: [ 'Italian', 'Japanese', 'English' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 5.9, seats: 13 } },
  { userName: 'Felton Willard',
    userEmail: 'feltonwillard@savi-travel.com',
    mdn: '952-555-1742',
    city: 'Paris',
    country: 'China',
    userAuthId: '762LhOmeudnJNEM7',
    photo: 'felton-willard.jpg',
    languages: [ 'Italian', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.77, seats: 7 } },
  { userName: 'Victor Dwight',
    userEmail: 'victordwight@savi-travel.com',
    mdn: '932-555-8116',
    city: 'Paris',
    country: 'Netherlands',
    userAuthId: 'CuWZMwyrmuU5NAYL',
    photo: 'victor-dwight.jpg',
    languages: [ 'Portuguese', 'Italian', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.29, seats: 11 } },
  { userName: 'Luigi Jody',
    userEmail: 'luigijody@savi-travel.com',
    mdn: '798-555-1981',
    city: 'Paris',
    country: 'Brazil',
    userAuthId: 'N8mmu1wcC5JVRyuo',
    photo: 'luigi-jody.jpg',
    languages: [ 'German', 'Spanish' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.35, seats: 10 } },
  { userName: 'Simon Eugenio',
    userEmail: 'simoneugenio@savi-travel.com',
    mdn: '806-555-9433',
    city: 'Paris',
    country: 'Netherlands',
    userAuthId: 'tCahIWpvDf3sHDnl',
    photo: 'simon-eugenio.jpg',
    languages: [ 'Portuguese', 'English', 'Mandarin' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2, seats: 0 } },
  { userName: 'Claude Cary',
    userEmail: 'claudecary@savi-travel.com',
    mdn: '693-555-8501',
    city: 'Paris',
    country: 'UK',
    userAuthId: '0K5qrpZ5e9cYkMU5',
    photo: 'claude-cary.jpg',
    languages: [ 'Portuguese', 'German' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2.48, seats: 0 } },
  { userName: 'Matthew Freeman',
    userEmail: 'matthewfreeman@savi-travel.com',
    mdn: '360-555-3822',
    city: 'Paris',
    country: 'Netherlands',
    userAuthId: 'pvBvAjLoOaddvdBV',
    photo: 'matthew-freeman.jpg',
    languages: [ 'Spanish', 'French', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 3.72, seats: 0 } },
  { userName: 'Robin Steve',
    userEmail: 'robinsteve@savi-travel.com',
    mdn: '367-555-2905',
    city: 'Paris',
    country: 'Netherlands',
    userAuthId: 'gB8byuK9GGnyUUm7',
    photo: 'robin-steve.jpg',
    languages: [ 'Portuguese', 'French', 'German' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.51, seats: 0 } },
  { userName: 'Lauren Damon',
    userEmail: 'laurendamon@savi-travel.com',
    mdn: '335-555-2739',
    city: 'Paris',
    country: 'China',
    userAuthId: '91UaJuEKjemSVJyY',
    photo: 'lauren-damon.jpg',
    languages: [ 'English', 'Japanese', 'French' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2.85, seats: 0 } },
  { userName: 'Gerardo Andreas',
    userEmail: 'gerardoandreas@savi-travel.com',
    mdn: '669-555-7307',
    city: 'London',
    country: 'Brazil',
    userAuthId: 'JDcTF2jC6OblepCY',
    photo: 'gerardo-andreas.jpg',
    languages: [ 'Mandarin', 'Portuguese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4, seats: 8 } },
  { userName: 'Jimmy Nolan',
    userEmail: 'jimmynolan@savi-travel.com',
    mdn: '719-555-8448',
    city: 'London',
    country: 'UK',
    userAuthId: 'rWZM5zMgomG6gIzq',
    photo: 'jimmy-nolan.jpg',
    languages: [ 'Mandarin', 'Spanish', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.77, seats: 10 } },
  { userName: 'Chet Whitney',
    userEmail: 'chetwhitney@savi-travel.com',
    mdn: '801-555-5684',
    city: 'London',
    country: 'UK',
    userAuthId: 'ro9R5QlfIOlTQj30',
    photo: 'chet-whitney.jpg',
    languages: [ 'English' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.84, seats: 5 } },
  { userName: 'Jesse Kip',
    userEmail: 'jessekip@savi-travel.com',
    mdn: '872-555-6991',
    city: 'London',
    country: 'Netherlands',
    userAuthId: 'LFEagQlOKNVy3C6o',
    photo: 'jesse-kip.jpg',
    languages: [ 'Japanese', 'English', 'Italian' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 3.22, seats: 7 } },
  { userName: 'Blair Herschel',
    userEmail: 'blairherschel@savi-travel.com',
    mdn: '610-555-4348',
    city: 'London',
    country: 'Brazil',
    userAuthId: 'SybDRP0yhS6tvmEt',
    photo: 'blair-herschel.jpg',
    languages: [ 'English', 'Spanish', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.53, seats: 6 } },
  { userName: 'Toby Wilber',
    userEmail: 'tobywilber@savi-travel.com',
    mdn: '261-555-4802',
    city: 'London',
    country: 'USA',
    userAuthId: 'FF35g2EG1UeBI0j6',
    photo: 'toby-wilber.jpg',
    languages: [ 'Spanish', 'Italian', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2.4, seats: 0 } },
  { userName: 'Toby Jerrod',
    userEmail: 'tobyjerrod@savi-travel.com',
    mdn: '367-555-3447',
    city: 'London',
    country: 'USA',
    userAuthId: '1qtlHVQpivXJBAP2',
    photo: 'toby-jerrod.jpg',
    languages: [ 'French', 'Japanese', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.47, seats: 0 } },
  { userName: 'Emery Kelvin',
    userEmail: 'emerykelvin@savi-travel.com',
    mdn: '480-555-5122',
    city: 'London',
    country: 'Brazil',
    userAuthId: 'calh9x9ZoPFZV5bn',
    photo: 'emery-kelvin.jpg',
    languages: [ 'French', 'Mandarin', 'Italian' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.53, seats: 0 } },
  { userName: 'Hubert Melvin',
    userEmail: 'hubertmelvin@savi-travel.com',
    mdn: '415-555-6274',
    city: 'London',
    country: 'Brazil',
    userAuthId: 'xXYK4L2UdyZxm0Dh',
    photo: 'hubert-melvin.jpg',
    languages: [ 'French' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 3.32, seats: 0 } },
  { userName: 'Scotty Jacques',
    userEmail: 'scottyjacques@savi-travel.com',
    mdn: '214-555-1195',
    city: 'London',
    country: 'USA',
    userAuthId: 'xbGcsD9TjWJj7drJ',
    photo: 'scotty-jacques.jpg',
    languages: [ 'Mandarin', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.69, seats: 0 } },
  { userName: 'Royce Tommy',
    userEmail: 'roycetommy@savi-travel.com',
    mdn: '742-555-5418',
    city: 'Amsterdam',
    country: 'Brazil',
    userAuthId: 'R4xUUaBxvLoXgVEI',
    photo: 'royce-tommy.jpg',
    languages: [ 'Japanese', 'English', 'Spanish' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.75, seats: 10 } },
  { userName: 'Barney Andrea',
    userEmail: 'barneyandrea@savi-travel.com',
    mdn: '442-555-3671',
    city: 'Amsterdam',
    country: 'China',
    userAuthId: 'SZFwG73V1f1kplcT',
    photo: 'barney-andrea.jpg',
    languages: [ 'Spanish', 'German' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 3.79, seats: 6 } },
  { userName: 'Zachary Napoleon',
    userEmail: 'zacharynapoleon@savi-travel.com',
    mdn: '477-555-1621',
    city: 'Amsterdam',
    country: 'UK',
    userAuthId: 'aZWTdArXDYRGwksp',
    photo: 'zachary-napoleon.jpg',
    languages: [ 'Portuguese', 'Mandarin', 'Italian' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 5.7, seats: 14 } },
  { userName: 'Emory Waldo',
    userEmail: 'emorywaldo@savi-travel.com',
    mdn: '593-555-3600',
    city: 'Amsterdam',
    country: 'UK',
    userAuthId: 'xe8WjXYuK6sc5q10',
    photo: 'emory-waldo.jpg',
    languages: [ 'French', 'German', 'Italian' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.85, seats: 10 } },
  { userName: 'Jae Jeffry',
    userEmail: 'jaejeffry@savi-travel.com',
    mdn: '328-555-7673',
    city: 'Amsterdam',
    country: 'UK',
    userAuthId: 'YSIQYdBvcKgduDac',
    photo: 'jae-jeffry.jpg',
    languages: [ 'Japanese', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.61, seats: 10 } },
  { userName: 'Rey Johnathan',
    userEmail: 'reyjohnathan@savi-travel.com',
    mdn: '133-555-7783',
    city: 'Amsterdam',
    country: 'China',
    userAuthId: 'Nq28ZTS2UsWPlsqU',
    photo: 'rey-johnathan.jpg',
    languages: [ 'Mandarin', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.19, seats: 0 } },
  { userName: 'Werner Garret',
    userEmail: 'wernergarret@savi-travel.com',
    mdn: '125-555-8794',
    city: 'Amsterdam',
    country: 'Netherlands',
    userAuthId: '74rAWG8p2rm6mzuI',
    photo: 'werner-garret.jpg',
    languages: [ 'German', 'Mandarin', 'Spanish' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2.75, seats: 0 } },
  { userName: 'Wally Erick',
    userEmail: 'wallyerick@savi-travel.com',
    mdn: '153-555-9541',
    city: 'Amsterdam',
    country: 'China',
    userAuthId: 'oB1ECFDSrUvzt3o8',
    photo: 'wally-erick.jpg',
    languages: [ 'Italian', 'French', 'Spanish' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 4.92, seats: 0 } },
  { userName: 'Basil Carter',
    userEmail: 'basilcarter@savi-travel.com',
    mdn: '118-555-3759',
    city: 'Amsterdam',
    country: 'Netherlands',
    userAuthId: '5VQ3V40SVt7AKCRW',
    photo: 'basil-carter.jpg',
    languages: [ 'German', 'French', 'Italian' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.51, seats: 0 } },
  { userName: 'Ronny Fernando',
    userEmail: 'ronnyfernando@savi-travel.com',
    mdn: '932-555-5790',
    city: 'Amsterdam',
    country: 'Brazil',
    userAuthId: '1smzTv0COteaHwqk',
    photo: 'ronny-fernando.jpg',
    languages: [ 'Portuguese', 'German' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 2.05, seats: 0 } },
  { userName: 'Berry Elden',
    userEmail: 'berryelden@savi-travel.com',
    mdn: '872-555-7349',
    city: 'Rio de Janeiro',
    country: 'China',
    userAuthId: 'ynkWnwkMxQsA4TfD',
    photo: 'berry-elden.jpg',
    languages: [ 'German', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.8, seats: 14 } },
  { userName: 'James Bernardo',
    userEmail: 'jamesbernardo@savi-travel.com',
    mdn: '267-555-7504',
    city: 'Rio de Janeiro',
    country: 'France',
    userAuthId: 'xixWjYw6ndyz21o2',
    photo: 'james-bernardo.jpg',
    languages: [ 'German', 'Japanese', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.93, seats: 5 } },
  { userName: 'Coy Riley',
    userEmail: 'coyriley@savi-travel.com',
    mdn: '260-555-9517',
    city: 'Rio de Janeiro',
    country: 'UK',
    userAuthId: 'UkyafLQ06QrmizQW',
    photo: 'coy-riley.jpg',
    languages: [ 'Spanish', 'Portuguese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.37, seats: 10 } },
  { userName: 'Basil John',
    userEmail: 'basiljohn@savi-travel.com',
    mdn: '702-555-3466',
    city: 'Rio de Janeiro',
    country: 'Netherlands',
    userAuthId: 'Azr79uqe97jZQAmz',
    photo: 'basil-john.jpg',
    languages: [ 'Italian', 'French' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 5.06, seats: 11 } },
  { userName: 'Heath Demarcus',
    userEmail: 'heathdemarcus@savi-travel.com',
    mdn: '708-555-4570',
    city: 'Rio de Janeiro',
    country: 'Netherlands',
    userAuthId: '2MDMc2iYqGRz6s49',
    photo: 'heath-demarcus.jpg',
    languages: [ 'French', 'German', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.24, seats: 7 } },
  { userName: 'Gerardo Chas',
    userEmail: 'gerardochas@savi-travel.com',
    mdn: '784-555-5178',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    userAuthId: 'UfMUNKJE82cIBmR3',
    photo: 'gerardo-chas.jpg',
    languages: [ 'Italian', 'English', 'Mandarin' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.95, seats: 0 } },
  { userName: 'Ben Spencer',
    userEmail: 'benspencer@savi-travel.com',
    mdn: '787-555-2963',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    userAuthId: 'qOuBlb3cQsYzwc3a',
    photo: 'ben-spencer.jpg',
    languages: [ 'English', 'Mandarin', 'Portuguese' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.31, seats: 0 } },
  { userName: 'Noel Sung',
    userEmail: 'noelsung@savi-travel.com',
    mdn: '737-555-4165',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    userAuthId: 'RvnRuXDOClWnJREN',
    photo: 'noel-sung.jpg',
    languages: [ 'Italian', 'Portuguese', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 4.01, seats: 0 } },
  { userName: 'Edgar Bryon',
    userEmail: 'edgarbryon@savi-travel.com',
    mdn: '450-555-4372',
    city: 'Rio de Janeiro',
    country: 'UK',
    userAuthId: 'zxKWdrfLPwMX5ZQX',
    photo: 'edgar-bryon.jpg',
    languages: [ 'Italian', 'Portuguese' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.75, seats: 0 } },
  { userName: 'Louis Elliot',
    userEmail: 'louiselliot@savi-travel.com',
    mdn: '352-555-5253',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    userAuthId: 'HZRwIyGRBhfGWHJ3',
    photo: 'louis-elliot.jpg',
    languages: [ 'Italian', 'German', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.93, seats: 0 } },
  { userName: 'Antony Clement',
    userEmail: 'antonyclement@savi-travel.com',
    mdn: '938-555-8733',
    city: 'Shanghai',
    country: 'China',
    userAuthId: 'sMEuU2sk6hIEut0O',
    photo: 'antony-clement.jpg',
    languages: [ 'Portuguese', 'Spanish', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.7, seats: 12 } },
  { userName: 'Rodrigo Tyler',
    userEmail: 'rodrigotyler@savi-travel.com',
    mdn: '280-555-1630',
    city: 'Shanghai',
    country: 'Netherlands',
    userAuthId: 'jNy2vcp5LX1XlTmi',
    photo: 'rodrigo-tyler.jpg',
    languages: [ 'French', 'English' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.95, seats: 8 } },
  { userName: 'Leland Zachariah',
    userEmail: 'lelandzachariah@savi-travel.com',
    mdn: '426-555-9755',
    city: 'Shanghai',
    country: 'UK',
    userAuthId: '1ZiZHewLLqWlhbwA',
    photo: 'leland-zachariah.jpg',
    languages: [ 'Portuguese', 'Spanish', 'Mandarin' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 3.07, seats: 13 } },
  { userName: 'Jamal Norberto',
    userEmail: 'jamalnorberto@savi-travel.com',
    mdn: '460-555-8180',
    city: 'Shanghai',
    country: 'Netherlands',
    userAuthId: '0zEc3kzuLI7CK4xa',
    photo: 'jamal-norberto.jpg',
    languages: [ 'Spanish', 'German', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.47, seats: 13 } },
  { userName: 'Tommie Joesph',
    userEmail: 'tommiejoesph@savi-travel.com',
    mdn: '126-555-8800',
    city: 'Shanghai',
    country: 'France',
    userAuthId: '4vcxqwSUO4X9yBAn',
    photo: 'tommie-joesph.jpg',
    languages: [ 'French', 'Spanish', 'Italian' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 2.58, seats: 12 } },
  { userName: 'Clint Johnny',
    userEmail: 'clintjohnny@savi-travel.com',
    mdn: '960-555-5214',
    city: 'Shanghai',
    country: 'UK',
    userAuthId: '8UkzkVfnXkjx1t77',
    photo: 'clint-johnny.jpg',
    languages: [ 'English', 'Japanese' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.09, seats: 0 } },
  { userName: 'Vito Jody',
    userEmail: 'vitojody@savi-travel.com',
    mdn: '678-555-3818',
    city: 'Shanghai',
    country: 'France',
    userAuthId: 'nhMwFPAubTLZF2kx',
    photo: 'vito-jody.jpg',
    languages: [ 'Italian', 'Mandarin', 'Japanese' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 3.36, seats: 0 } },
  { userName: 'Percy Collin',
    userEmail: 'percycollin@savi-travel.com',
    mdn: '712-555-2590',
    city: 'Shanghai',
    country: 'UK',
    userAuthId: 'EELczzoErpZnt98q',
    photo: 'percy-collin.jpg',
    languages: [ 'Japanese', 'Italian' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.58, seats: 0 } },
  { userName: 'Winford Nelson',
    userEmail: 'winfordnelson@savi-travel.com',
    mdn: '597-555-1841',
    city: 'Shanghai',
    country: 'China',
    userAuthId: 'jsYfMi2OS9W1lTec',
    photo: 'winford-nelson.jpg',
    languages: [ 'English', 'French', 'Mandarin' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 4.16, seats: 0 } },
  { userName: 'Emmitt Brady',
    userEmail: 'emmittbrady@savi-travel.com',
    mdn: '826-555-8165',
    city: 'Shanghai',
    country: 'Brazil',
    userAuthId: 'KI95KW6cm2vPLbFH',
    photo: 'emmitt-brady.jpg',
    languages: [ 'German', 'French', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 4.66, seats: 0 } },
  { userName: 'Renaldo Monte',
    userEmail: 'renaldomonte@savi-travel.com',
    mdn: '366-555-2771',
    city: 'New York',
    country: 'UK',
    userAuthId: 'VpDr1UA5HzJwBkkv',
    photo: 'renaldo-monte.jpg',
    languages: [ 'English', 'German', 'French' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 5.77, seats: 9 } },
  { userName: 'Mervin Tommy',
    userEmail: 'mervintommy@savi-travel.com',
    mdn: '732-555-5350',
    city: 'New York',
    country: 'France',
    userAuthId: 'ALqUcWnnl0mkrwOI',
    photo: 'mervin-tommy.jpg',
    languages: [ 'English', 'Italian', 'Japanese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.02, seats: 10 } },
  { userName: 'Alan Jon',
    userEmail: 'alanjon@savi-travel.com',
    mdn: '525-555-5061',
    city: 'New York',
    country: 'Netherlands',
    userAuthId: 'jL6PwIiw6xHhCFen',
    photo: 'alan-jon.jpg',
    languages: [ 'Italian', 'Spanish', 'German' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 1.27, seats: 5 } },
  { userName: 'Cordell Gino',
    userEmail: 'cordellgino@savi-travel.com',
    mdn: '270-555-1052',
    city: 'New York',
    country: 'China',
    userAuthId: 'm1fBLH8SgI0bV4NQ',
    photo: 'cordell-gino.jpg',
    languages: [ 'Italian', 'Mandarin', 'French' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 3.89, seats: 10 } },
  { userName: 'Buddy Buck',
    userEmail: 'buddybuck@savi-travel.com',
    mdn: '223-555-4500',
    city: 'New York',
    country: 'China',
    userAuthId: '9J0HTDubIFCAAg1i',
    photo: 'buddy-buck.jpg',
    languages: [ 'Italian', 'English', 'Portuguese' ],
    type: 'Driver',
    employeeData: { type: 'Driver', rating: 4.93, seats: 6 } },
  { userName: 'Quentin Wally',
    userEmail: 'quentinwally@savi-travel.com',
    mdn: '986-555-8529',
    city: 'New York',
    country: 'UK',
    userAuthId: 'YFbBeICschVbyWRt',
    photo: 'quentin-wally.jpg',
    languages: [ 'Japanese', 'Italian', 'Mandarin' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.71, seats: 0 } },
  { userName: 'Jude Bryce',
    userEmail: 'judebryce@savi-travel.com',
    mdn: '347-555-3784',
    city: 'New York',
    country: 'UK',
    userAuthId: 'THKUwtjo2OK7ZBk7',
    photo: 'jude-bryce.jpg',
    languages: [ 'Italian', 'German', 'French' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 1.25, seats: 0 } },
  { userName: 'Bennett Reinaldo',
    userEmail: 'bennettreinaldo@savi-travel.com',
    mdn: '341-555-8946',
    city: 'New York',
    country: 'Netherlands',
    userAuthId: 'SEkoWOHt6V4XqEFH',
    photo: 'bennett-reinaldo.jpg',
    languages: [ 'Italian', 'Spanish' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 5.64, seats: 0 } },
  { userName: 'Dee Colton',
    userEmail: 'deecolton@savi-travel.com',
    mdn: '196-555-4884',
    city: 'New York',
    country: 'Netherlands',
    userAuthId: 'eqIDyXlKDvndQxF2',
    photo: 'dee-colton.jpg',
    languages: [ 'Spanish', 'English' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 4.17, seats: 0 } },
  { userName: 'Irwin Kelvin',
    userEmail: 'irwinkelvin@savi-travel.com',
    mdn: '150-555-9937',
    city: 'New York',
    country: 'China',
    userAuthId: 'LsHzqwO8phvotTS0',
    photo: 'irwin-kelvin.jpg',
    languages: [ 'English', 'Spanish', 'Mandarin' ],
    type: 'Tour Guide',
    employeeData: { type: 'Tour Guide', rating: 3.82, seats: 0 } },
  { userName: 'Noah Isreal',
    userEmail: 'noahisreal@savi-travel.com',
    mdn: '313-555-4240',
    city: 'London',
    country: 'Netherlands',
    userAuthId: '53gKY2QWg7jT5i2T',
    photo: 'noah-isreal.jpg',
    languages: [ 'Portuguese', 'Italian', 'German' ],
    type: 'Tourist' },
  { userName: 'Mathew Sid',
    userEmail: 'mathewsid@savi-travel.com',
    mdn: '848-555-9550',
    city: 'Shanghai',
    country: 'UK',
    userAuthId: 'aaFjZVe58nwQHsKZ',
    photo: 'mathew-sid.jpg',
    languages: [ 'German', 'English' ],
    type: 'Tourist' },
  { userName: 'Romeo Tim',
    userEmail: 'romeotim@savi-travel.com',
    mdn: '416-555-1728',
    city: 'London',
    country: 'Brazil',
    userAuthId: '9AZtPL4ojva8aK1W',
    photo: 'romeo-tim.jpg',
    languages: [ 'Portuguese', 'French' ],
    type: 'Tourist' },
  { userName: 'Caleb Jamel',
    userEmail: 'calebjamel@savi-travel.com',
    mdn: '175-555-2992',
    city: 'New York',
    country: 'Brazil',
    userAuthId: 'iNX9UAD8tZZJqPls',
    photo: 'caleb-jamel.jpg',
    languages: [ 'Spanish', 'Japanese' ],
    type: 'Tourist' },
  { userName: 'Lon Modesto',
    userEmail: 'lonmodesto@savi-travel.com',
    mdn: '345-555-9295',
    city: 'New York',
    country: 'Brazil',
    userAuthId: 'RBzSHk1FuD1SEmGD',
    photo: 'lon-modesto.jpg',
    languages: [ 'Portuguese', 'Spanish', 'French' ],
    type: 'Tourist' },
  { userName: 'Frances Waylon',
    userEmail: 'franceswaylon@savi-travel.com',
    mdn: '195-555-6290',
    city: 'Amsterdam',
    country: 'France',
    userAuthId: '8rFaTTWUxllTGJbp',
    photo: 'frances-waylon.jpg',
    languages: [ 'Spanish', 'Mandarin', 'German' ],
    type: 'Tourist' },
  { userName: 'Wilfredo Darius',
    userEmail: 'wilfredodarius@savi-travel.com',
    mdn: '303-555-7881',
    city: 'Paris',
    country: 'Brazil',
    userAuthId: 'gTtPRI9vKIB7UM1x',
    photo: 'wilfredo-darius.jpg',
    languages: [ 'English', 'French' ],
    type: 'Tourist' },
  { userName: 'Don Isaiah',
    userEmail: 'donisaiah@savi-travel.com',
    mdn: '876-555-2213',
    city: 'Paris',
    country: 'Brazil',
    userAuthId: 'PA45VTOBy3BxQCsO',
    photo: 'don-isaiah.jpg',
    languages: [ 'French', 'Mandarin', 'Japanese' ],
    type: 'Tourist' },
  { userName: 'Ian Rafael',
    userEmail: 'ianrafael@savi-travel.com',
    mdn: '602-555-2745',
    city: 'Rio de Janeiro',
    country: 'USA',
    userAuthId: 'g8RvEJy5BghWJjvQ',
    photo: 'ian-rafael.jpg',
    languages: [ 'Japanese', 'Portuguese', 'Mandarin' ],
    type: 'Tourist' },
  { userName: 'Marcus Buddy',
    userEmail: 'marcusbuddy@savi-travel.com',
    mdn: '136-555-1524',
    city: 'New York',
    country: 'China',
    userAuthId: 'pnA2zK9KKC1W1itz',
    photo: 'marcus-buddy.jpg',
    languages: [ 'Japanese', 'Italian', 'French' ],
    type: 'Tourist' },
  { userName: 'Valentin Nolan',
    userEmail: 'valentinnolan@savi-travel.com',
    mdn: '672-555-7098',
    city: 'Rio de Janeiro',
    country: 'France',
    userAuthId: 'me6nWZZK4rhXVyKx',
    photo: 'valentin-nolan.jpg',
    languages: [ 'Spanish', 'Italian' ],
    type: 'Tourist' },
  { userName: 'Virgil Moses',
    userEmail: 'virgilmoses@savi-travel.com',
    mdn: '555-555-4780',
    city: 'Rio de Janeiro',
    country: 'China',
    userAuthId: 'FSpnw6Ie4vDII0Or',
    photo: 'virgil-moses.jpg',
    languages: [ 'Spanish', 'Mandarin', 'Italian' ],
    type: 'Tourist' },
  { userName: 'Sung Billie',
    userEmail: 'sungbillie@savi-travel.com',
    mdn: '895-555-6706',
    city: 'Amsterdam',
    country: 'UK',
    userAuthId: 'fCCQNhMBAuk38yHy',
    photo: 'sung-billie.jpg',
    languages: [ 'Mandarin', 'Portuguese', 'Spanish' ],
    type: 'Tourist' },
  { userName: 'Felipe Del',
    userEmail: 'felipedel@savi-travel.com',
    mdn: '730-555-1959',
    city: 'Rio de Janeiro',
    country: 'China',
    userAuthId: 'xrwwcwBFqxIINwbx',
    photo: 'felipe-del.jpg',
    languages: [ 'English', 'Portuguese', 'Italian' ],
    type: 'Tourist' },
  { userName: 'Porter Garret',
    userEmail: 'portergarret@savi-travel.com',
    mdn: '131-555-8812',
    city: 'Amsterdam',
    country: 'UK',
    userAuthId: 'm8Ps7VQ3EXbO3ZRS',
    photo: 'porter-garret.jpg',
    languages: [ 'Italian', 'Japanese', 'Mandarin' ],
    type: 'Tourist' },
  { userName: 'Darrin Ty',
    userEmail: 'darrinty@savi-travel.com',
    mdn: '375-555-6770',
    city: 'Rio de Janeiro',
    country: 'USA',
    userAuthId: 'Fl2Nf0uIm91EPDfF',
    photo: 'darrin-ty.jpg',
    languages: [ 'Japanese', 'Italian', 'Portuguese' ],
    type: 'Tourist' },
  { userName: 'Darin Isaias',
    userEmail: 'darinisaias@savi-travel.com',
    mdn: '884-555-6372',
    city: 'Shanghai',
    country: 'France',
    userAuthId: '3oaXrBbb7l41Nxxw',
    photo: 'darin-isaias.jpg',
    languages: [ 'Italian', 'English' ],
    type: 'Tourist' },
  { userName: 'Sung Andres',
    userEmail: 'sungandres@savi-travel.com',
    mdn: '910-555-9422',
    city: 'Paris',
    country: 'Netherlands',
    userAuthId: 'ZQRPtRjJt7LQLhWq',
    photo: 'sung-andres.jpg',
    languages: [ 'Portuguese', 'Mandarin' ],
    type: 'Tourist' },
  { userName: 'Vicente Barton',
    userEmail: 'vicentebarton@savi-travel.com',
    mdn: '936-555-4301',
    city: 'Amsterdam',
    country: 'China',
    userAuthId: 'kPbi6lOoTEU0IiMB',
    photo: 'vicente-barton.jpg',
    languages: [ 'Portuguese', 'Mandarin' ],
    type: 'Tourist' },
  { userName: 'Lazaro Dorian',
    userEmail: 'lazarodorian@savi-travel.com',
    mdn: '800-555-5466',
    city: 'New York',
    country: 'Netherlands',
    userAuthId: 'D4qVbImbMdgmOSaN',
    photo: 'lazaro-dorian.jpg',
    languages: [ 'Portuguese', 'Japanese', 'Italian' ],
    type: 'Tourist' } ],

  offerings: [ [ '04-03-2017',
    '04-04-2017',
    '04-05-2017',
    '04-06-2017',
    '04-07-2017',
    '04-10-2017',
    '04-11-2017',
    '04-12-2017',
    '04-13-2017',
    '04-14-2017',
    '04-17-2017',
    '04-18-2017',
    '04-19-2017',
    '04-20-2017',
    '04-21-2017',
    '04-24-2017',
    '04-25-2017',
    '04-26-2017',
    '04-27-2017',
    '04-28-2017',
    '05-01-2017',
    '05-02-2017',
    '05-03-2017',
    '05-04-2017',
    '05-05-2017',
    '05-08-2017',
    '05-09-2017',
    '05-10-2017',
    '05-11-2017',
    '05-12-2017',
    '05-15-2017',
    '05-16-2017',
    '05-17-2017',
    '05-18-2017',
    '05-19-2017',
    '05-22-2017',
    '05-23-2017',
    '05-24-2017',
    '05-25-2017',
    '05-26-2017',
    '05-29-2017',
    '05-30-2017',
    '05-31-2017',
    '06-01-2017',
    '06-02-2017',
    '06-05-2017',
    '06-06-2017',
    '06-07-2017',
    '06-08-2017',
    '06-09-2017',
    '06-12-2017',
    '06-13-2017',
    '06-14-2017',
    '06-15-2017',
    '06-16-2017',
    '06-19-2017',
    '06-20-2017',
    '06-21-2017',
    '06-22-2017',
    '06-23-2017',
    '06-26-2017',
    '06-27-2017',
    '06-28-2017',
    '06-29-2017',
    '06-30-2017' ],
  [ '04-01-2017',
    '04-02-2017',
    '04-08-2017',
    '04-09-2017',
    '04-15-2017',
    '04-16-2017',
    '04-22-2017',
    '04-23-2017',
    '04-29-2017',
    '04-30-2017',
    '05-06-2017',
    '05-07-2017',
    '05-13-2017',
    '05-14-2017',
    '05-20-2017',
    '05-21-2017',
    '05-27-2017',
    '05-28-2017',
    '06-03-2017',
    '06-04-2017',
    '06-10-2017',
    '06-11-2017',
    '06-17-2017',
    '06-18-2017',
    '06-24-2017',
    '06-25-2017' ],
  [ '04-03-2017',
    '04-05-2017',
    '04-07-2017',
    '04-10-2017',
    '04-12-2017',
    '04-14-2017',
    '04-17-2017',
    '04-19-2017',
    '04-21-2017',
    '04-24-2017',
    '04-26-2017',
    '04-28-2017',
    '05-01-2017',
    '05-03-2017',
    '05-05-2017',
    '05-08-2017',
    '05-10-2017',
    '05-12-2017',
    '05-15-2017',
    '05-17-2017',
    '05-19-2017',
    '05-22-2017',
    '05-24-2017',
    '05-26-2017',
    '05-29-2017',
    '05-31-2017',
    '06-02-2017',
    '06-05-2017',
    '06-07-2017',
    '06-09-2017',
    '06-12-2017',
    '06-14-2017',
    '06-16-2017',
    '06-19-2017',
    '06-21-2017',
    '06-23-2017',
    '06-26-2017',
    '06-28-2017',
    '06-30-2017' ],
  [ '04-01-2017',
    '04-02-2017',
    '04-04-2017',
    '04-06-2017',
    '04-08-2017',
    '04-09-2017',
    '04-11-2017',
    '04-13-2017',
    '04-15-2017',
    '04-16-2017',
    '04-18-2017',
    '04-20-2017',
    '04-22-2017',
    '04-23-2017',
    '04-25-2017',
    '04-27-2017',
    '04-29-2017',
    '04-30-2017',
    '05-02-2017',
    '05-04-2017',
    '05-06-2017',
    '05-07-2017',
    '05-09-2017',
    '05-11-2017',
    '05-13-2017',
    '05-14-2017',
    '05-16-2017',
    '05-18-2017',
    '05-20-2017',
    '05-21-2017',
    '05-23-2017',
    '05-25-2017',
    '05-27-2017',
    '05-28-2017',
    '05-30-2017',
    '06-01-2017',
    '06-03-2017',
    '06-04-2017',
    '06-06-2017',
    '06-08-2017',
    '06-10-2017',
    '06-11-2017',
    '06-13-2017',
    '06-15-2017',
    '06-17-2017',
    '06-18-2017',
    '06-20-2017',
    '06-22-2017',
    '06-24-2017',
    '06-25-2017',
    '06-27-2017',
    '06-29-2017' ],
  [ '04-01-2017',
    '04-02-2017',
    '04-03-2017',
    '04-04-2017',
    '04-05-2017',
    '04-06-2017',
    '04-07-2017',
    '04-08-2017',
    '04-09-2017',
    '04-10-2017',
    '04-11-2017',
    '04-12-2017',
    '04-13-2017',
    '04-14-2017',
    '04-15-2017',
    '04-16-2017',
    '04-17-2017',
    '04-18-2017',
    '04-19-2017',
    '04-20-2017',
    '04-21-2017',
    '04-22-2017',
    '04-23-2017',
    '04-24-2017',
    '04-25-2017',
    '04-26-2017',
    '04-27-2017',
    '04-28-2017',
    '04-29-2017',
    '04-30-2017',
    '05-01-2017',
    '05-02-2017',
    '05-03-2017',
    '05-04-2017',
    '05-05-2017',
    '05-06-2017',
    '05-07-2017',
    '05-08-2017',
    '05-09-2017',
    '05-10-2017',
    '05-11-2017',
    '05-12-2017',
    '05-13-2017',
    '05-14-2017',
    '05-15-2017',
    '05-16-2017',
    '05-17-2017',
    '05-18-2017',
    '05-19-2017',
    '05-20-2017',
    '05-21-2017',
    '05-22-2017',
    '05-23-2017',
    '05-24-2017',
    '05-25-2017',
    '05-26-2017',
    '05-27-2017',
    '05-28-2017',
    '05-29-2017',
    '05-30-2017',
    '05-31-2017',
    '06-01-2017',
    '06-02-2017',
    '06-03-2017',
    '06-04-2017',
    '06-05-2017',
    '06-06-2017',
    '06-07-2017',
    '06-08-2017',
    '06-09-2017',
    '06-10-2017',
    '06-11-2017',
    '06-12-2017',
    '06-13-2017',
    '06-14-2017',
    '06-15-2017',
    '06-16-2017',
    '06-17-2017',
    '06-18-2017',
    '06-19-2017',
    '06-20-2017',
    '06-21-2017',
    '06-22-2017',
    '06-23-2017',
    '06-24-2017',
    '06-25-2017',
    '06-26-2017',
    '06-27-2017',
    '06-28-2017',
    '06-29-2017',
    '06-30-2017' ] ]
};