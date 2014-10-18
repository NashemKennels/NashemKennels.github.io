var nashemDogs = [
  {
    name        : '"Angus"',
    kennelName  : 'He\'s the Man of Woodmoor CD NDD RN CGC',
    credentials : ['Multiple BIS BISS CH'],
    mainImg     : {img: '../images/Angus/Angus.JPG', caption: 'Angus, June 2008'},
    sex         : 'male',
    born        : 'May 16, 2006',
    died        : undefined,
    altImgs     : {},
    pedigreeLink: '../docs/Angus-Ped.pdf'
  },
  {
    name        : '"Taylor"',
    kennelName  : 'Taylor Maid CD NDD',
    credentials : ['All Breed BIS BISS CH', '14 Best in Shows', '2 BoB Westminster Kennel Club 1996, 1997 Group 3', 'BMDCA BoB 1997, 2008 National Specialty'],
    mainImg     : {img: '../images/Taylor/TaylorRibbons.jpg', caption: 'With her ribbons, December 04, 2005'},
    sex         : 'female',
    born        : 'November 29, 1993',
    died        : 'August 7, 2006',
    altImgs     : {},
    pedigreeLink: '../docs/Taylor-ped.pdf'
  }
]

var App = function(){
  var $homeImgs = $('.image-container').children();

  this.homePage = function(){
    $homeImgs.fadeIn();
  };

  this.dogPage = function(){
    initializeDogs();
  }

  var initializeDogs = function(){
    dogCollection = new DogCollection(); //creates empty dog collection

    _.each(nashemDogs, function(dog){ //populates collection with models created from object above
      var dogModel = new Dog(dog);
      dogCollection.add(dogModel);
    });

    dogListView = new DogListView({collection: dogCollection, el: $('.dog-container') });
  }

};


