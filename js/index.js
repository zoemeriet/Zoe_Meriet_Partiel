// Sélection des élements HTML "page"
var pageUn = document.querySelector('.un');
var pageDeux = document.querySelector('.deux');
var pageTrois = document.querySelector('.trois');

var btn = document.querySelector('.btn');

var slider = document.querySelector('.slider');
var right = document.querySelector('.right');
var left = document.querySelector('.left');
var arrow = document.querySelectorAll('.deux .arrow');

// Scroll (click + scroll)
// à remplir

// Slider (clicks + effet de slide)
// à remplir

// Chargment des données et création des pages (fetch + appel de fonctions)
// à remplir
fetch('https://dev.drangies.fr/exam').then(function(res) {
	return res.json().then(function(data) {
		console.log(data);
		createPageUn(data);
		createPageDeux(data);
		createPageTrois(data);
	});
});
// page 1
var createPageUn = function(data) {
	// Récupération des données
  var nom = data.identite.nom;
  var prenom = data.identite.prenom;
  var profession = data.identite.profession;
  var age = data.identite.age;
  var loisirs = data.identite.loisirs;
  // Création du container
  var pageUn_container = document.createElement('div');
  pageUn.appendChild(pageUn_container);
  // Ajout du h1
  var texte1 = document.createElement('h1');
  pageUn_container.appendChild(texte1);
  texte1.textContent = 'Bonjour, je suis ' + prenom + ' ' + nom;
  // Ajout du h2
  var texte2 = document.createElement('h2');
  pageUn_container.appendChild(texte2);
  texte2.textContent = profession + ' de ' + age + ' ans';
  // Ajout du h2
  var texte3 = document.createElement('p');
  pageUn_container.appendChild(texte3);
  texte3.textContent = 'Je suis passionnée de : ' + loisirs[0] + ', ' + loisirs[1] + ', ' + loisirs[2] + '.';

  // Animation arrow
  btn.addEventListener('click', function() {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: 'smooth'
    });
  });
};

// page 2
var createPageDeux = function(data) {

  var projets = data.projets;
  for (var i = 0; i < projets.length; i++) {
    // Récupération des données
    var slide_background = 'https://dev.drangies.fr/exam/' + projets[i].image;
    var slide_title = projets[i].titre;
    var slide_description = projets[i].description;

    // Ajout des div slide
    var slide = document.createElement('div');
    slide.classList = 'slide';
    slide.style.backgroundImage = "url('"  + slide_background + "')";
    slider.appendChild(slide);

    // Ajout des div texte
    var slide_text = document.createElement('div');
    slide.appendChild(slide_text);

    // Ajout du h2
    var slide_h2 = document.createElement('h2');
    slide_h2.textContent = slide_title;
    slide_text.appendChild(slide_h2);

    // Ajout du p
    var slide_p = document.createElement('p');
    slide_p.textContent = slide_description;
    slide_text.appendChild(slide_p);
  }

  // Animation du slider
  var total = 0;
  var num = 0;
  total = num + total;
  right.addEventListener('click', function() {
    // slider.style.transform = 'translateX(-100%)';
    num = -100;
    console.log(num);
    console.log(total);
  });
  left.addEventListener('click', function() {
    num = 100;
    console.log(num);
    console.log(total);
    // slider.style.transform = 'translateX(0)';
  });


};

// page 3
var createPageTrois = function(data) {
	// Récupération des données
  var twitter1 = data.identite.contacts[0].reseau;
  var twitter2 = data.identite.contacts[0].id;
  var instagram1 = data.identite.contacts[1].reseau;
  var instagram2 = data.identite.contacts[1].id;
  var mail = data.identite.contacts[2].mail;

  // Création du Container
  var pageTrois_container = document.createElement('div');
  pageTrois_container.classList = 'contacts';
  pageTrois.appendChild(pageTrois_container);

  // Ajout Titre Contactez-moi
  var contact_title = document.createElement('h2');
  pageTrois_container.appendChild(contact_title);
  contact_title.innerHTML = 'Contactez-moi !';

  // Ajout Contact Container
  var contact_container = document.createElement('div');
  contact_container.classList = 'contactsList';
  pageTrois_container.appendChild(contact_container);

  // Ajout Twitter
  var twitter_container = document.createElement('div');
  contact_container.appendChild(twitter_container);

  var twitter_texte1 = document.createElement('h3');
  twitter_container.appendChild(twitter_texte1);
  twitter_texte1.innerHTML = twitter1;

  var twitter_texte2 = document.createElement('p');
  twitter_container.appendChild(twitter_texte2);
  twitter_texte2.innerHTML = twitter2;

  // Ajout Instagram
  var instagram_container = document.createElement('div');
  contact_container.appendChild(instagram_container);

  var instagram_texte1 = document.createElement('h3');
  instagram_container.appendChild(instagram_texte1);
  instagram_texte1.innerHTML = instagram1;

  var instagram_texte2 = document.createElement('p');
  instagram_container.appendChild(instagram_texte2);
  instagram_texte2.innerHTML = instagram2;

  // Ajout Mail
  var mail_container = document.createElement('div');
  contact_container.appendChild(mail_container);

  var mail_texte1 = document.createElement('h3');
  mail_container.appendChild(mail_texte1);
  mail_texte1.innerHTML = 'mail';

  var mail_texte2 = document.createElement('p');
  mail_container.appendChild(mail_texte2);
  mail_texte2.innerHTML = mail;
};
