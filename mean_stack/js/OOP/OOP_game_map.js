var eeyore = { character: "Eeyore",
                            greet: function() {
                                    console.log("EEEEEYore.....");
                                    },
};
var heffalumps = { character: "Heffalumps",
                            greet: function() {
                                    console.log("Very good honey this, I don't know when I've tasted better!" );
                                    },
};
var kanga = { character: "Kanga",
                            greet: function() {
                                    console.log("Why, hello, Tigger, dear.");
                                    },
};
var owl = { character: "Owl",
                            greet: function() {
                                    console.log("This reminds me of the time when...");
                                    },
};
var christopher_robin = { character: "Christopher Robin",
                            greet: function() {
                                    console.log("Silly ol' bear!");
                                    },
};

var rabbit = { character: "Rabbit",
                            greet: function() {
                                    console.log("Let's pretend it isn't and see what happens");
                                    },
};
var gopher = { character: "Gopher",
                            greet: function() {
                                    console.log("I'm not in the book, you know.");
                                    },
};
var piglet = { character: "Piglet",
                            greet: function() {
                                    console.log("It is hard to be brave, when you're only a very small animal.");
                                    },
};
var pooh = { character: "Winnie the Pooh",
                            greet: function() {
                                    console.log("Oh, bother!");
                                    },
};
var bees = { character: "Bees",
                            greet: function() {
                                    console.log("BZZZZZ!");
                                    },
};
var tigger = { character: "Tigger",
                            greet: function() {
                                    console.log("Once in a while someone amazing comes along, and here I am!");
                                    },
};

eeyore.east = heffalumps
eeyore.south = kanga

heffalumps.west = eeyore

kanga.north = eeyore
kanga.south = christopher_robin

owl.east = christopher_robin
owl.south = piglet

christopher_robin.north = kanga
christopher_robin.east = rabbit
christopher_robin.south = pooh
christopher_robin.west = owl

rabbit.east = gopher
rabbit.south = bees
rabbit.west = christopher_robin

gopher.west = rabbit

piglet.north = owl
piglet.east = pooh

pooh.north = christopher_robin
pooh.east = bees
pooh.south = tigger
pooh.west = piglet

bees.north = rabbit
bees.west = pooh

tigger.north = pooh