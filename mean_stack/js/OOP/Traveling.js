var eeyore = { character: "Eeyore"}
var heffalumps = { character: "Heffalumps"}
var kanga = { character: "Kanga"}
var owl = { character: "Owl"}
var christopher_robin = { character: "Christopher Robin"}
var rabbit = { character: "Rabbit"}
var gopher = { character: "Gopher"}
var piglet = { character: "Piglet"}
var pooh = { character: "Winnie the Pooh" }
var bees = { character: "Kanga"}
var tigger = { character: "Tigger" }

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