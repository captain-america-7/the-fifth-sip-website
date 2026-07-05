const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Smoked Old Fashioned",
	country: "",
	detail: "Premium Bourbon | 180 ml",
	price: "₹895",
 },
 {
	name: "Espresso Martini",
	country: "",
	detail: "Vodka • Coffee Liqueur | 180 ml",
	price: "₹795",
 },
 {
	name: "Midnight Velvet",
	country: "",
	detail: "Dark Rum • Blackberry • Citrus | 180 ml",
	price: "₹845",
 },
 {
	name: "Golden Hour Martini",
	country: "",
	detail: "Gin • Passion Fruit • Citrus | 180 ml",
	price: "₹825",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "",
	detail: "Pineapple • Mango • Coconut | 300 ml",
	price: "₹345",
 },
 {
	name: "Passionfruit Mint Cooler",
	country: "",
	detail: "Passion Fruit • Mint • Soda | 300 ml",
	price: "₹365",
 },
 {
	name: "Citrus Glow",
	country: "",
	detail: "Orange • Lime • Honey | 300 ml",
	price: "₹325",
 },
 {
	name: "Lavender Fizz",
	country: "",
	detail: "Lavender • Lemon • Sparkling Water | 300 ml",
	price: "₹385",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Expert Mixologists",
 "Live DJ Nights",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "Road No. 36, Jubilee Hills, Hyderabad 500033",
 contact: {
	phone: "+91 98765 43210",
	email: "reservations@thefifthsip.in",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "5:00pm – 12am" },
 { day: "Fri-Sat", time: "5:00pm – 1am" },
 { day: "Sun", time: "4:00pm – 11pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Midnight Velvet",
	image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
	title: "A Smooth, Dark Experience",
	description:
	 "A rich blend of aged bourbon, blackberry syrup, and chocolate bitters. Served in a smoked glass for the ultimate sensory experience.",
 },
 {
	id: 2,
	name: "Smoked Old Fashioned",
	image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80",
	title: "A Zesty Classic That Never Fails",
	description:
	 "Premium rye whiskey, Angostura bitters, and a touch of maple syrup. Smoked with cherry wood for an unforgettable finish.",
 },
 {
	id: 3,
	name: "Ruby Ember",
	image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
	title: "Bold, Bright, and Beautiful",
	description:
	 "Mezcal, blood orange liqueur, and a dash of habanero tincture. A spicy and smoky delight that lights up the night.",
 },
 {
	id: 4,
	name: "Golden Hour Martini",
	image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Gin, dry vermouth, and a touch of saffron syrup. A luxurious twist on a timeless classic, garnished with an edible gold leaf.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
