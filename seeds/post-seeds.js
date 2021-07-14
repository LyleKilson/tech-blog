const { Post } = require("../models");

const postData = [
  {
    title: "Meow Meow",
    post_content:
      "mmmmmmmmmeeeeeeeeooooooooowwwwwwww, and plan steps for world domination. Pooping rainbow while flying in a toasted bread costume in space bite nose of your human and stare at ceiling kitty power, be superior but push your water glass on the floor and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Taco cat backwards spells taco cat favor packaging over toy pooping rainbow while flying in a toasted bread costume in space for the fat cat sat on the mat bat away with paws. Naughty running cat friends are not food stare at owner accusingly then wink the fat cat sat on the mat bat away with paws and hey! you there, with the hands climb a tree, wait for a fireman jump to fireman then scratch his face. Mewl for food at 4am.",
    user_id: 3,
  },
  {
    title: "Don't go chasin waterfalls",
    post_content:
      "Thug cat purr while eating pet me pet me pet me pet me, bite, scratch, why are you petting me so jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans yet meow meow, i tell my human so curl up and sleep on the freshly laundered towels sleep nap. Meoooow play time, and lick sellotape yet sit in box cat mojo so lick the other cats. Sugar, my siamese, stalks me (in a good way), day and night lick sellotape prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot yet attack feet. Disappear for four days and return home with an expensive injury; bite the vet commence midnight zoomies poop on couch. Tuxedo cats always looking dapper eat grass, throw it back up but sleep everywhere, but not in my bed hunt anything ask for petting yet munch on tasty moths.",
    user_id: 1,
  },
  {
    title: "Dude looks like a lady",
    post_content:
      "Rub my belly hiss murr i hate humans they are so annoying and leave fur on owners clothes sun bathe, so peer out window, chatter at birds, lure them to mouth. Human give me attention meow chew master's slippers, lick left leg for ninety minutes, still dirty bite plants eat plants, meow, and throw up because i ate plants. Scratch me there, elevator butt who's the baby, yet eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter so pee on walls it smells like breakfast.",
    user_id: 2,
  },
  {
    title: "Sometimes its nice to sing songs",
    post_content:
      "So you're just gonna scroll by without saying meowdy?. Intently stare at the same spot roll over and sun my belly. The cat was chasing the mouse spill litter box, scratch at owner, destroy all furniture, especially couch use lap as chair, or the fat cat sat on the mat bat away with paws. Kitten is playing with dead mouse flee in terror at cucumber discovered on floor shake treat bag, yet be superior yet so you're just gonna scroll by without saying meowdy? meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i don’t know i can’t count. Cat ass trophy claws in your leg and get scared by doggo also cucumerro and fight own tail. Catch eat throw up catch eat throw up bad birds i love cuddles i show my fluffy belly but it's a trap! if you pet it i will tear up your hand spill litter box, scratch at owner, destroy all furniture, especially couch lick the other cats. I shall purr myself to sleep plays league of legends so twitch tail in permanent irritation but kitty.",
    user_id: 5,
  },
  {
    title: "Beep, Bop, and of course boop.",
    post_content:
      "Cough hairball, eat toilet paper carefully drink from water glass and then spill it everywhere and proceed to lick the puddle, love fish meow playing with balls of wool lies down . Pretend not to be evil cough furball or making bread on the bathrobe cough hairball, eat toilet paper for chirp at birds but hiss at vacuum cleaner. Flee in terror at cucumber discovered on floor pee on walls it smells like breakfast asdflkjaertvlkjasntvkjn (sits on keyboard) hiiiiiiiiii feed me now or cat snacks. Chew the plant stare at wall turn and meow stare at wall some more meow again continue staring yet dismember a mouse and then regurgitate parts of it on the family room floor yet dont wait for the storm to pass, dance in the rain.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
