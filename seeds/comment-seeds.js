const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "Kitty😻",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "bow wow wow yippy yo yippy yay 🐕",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text:
      "I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later 😎",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text:
      "My mother always used to say: The older you get, the better you get, unless you’re a banana 🍌",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text:
      "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes 👞",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text:
      "Clothes make the man. Naked people have little or no influence in society 👔",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text:
      "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are 👨🏼‍💻",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text:
      "When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway 🗣",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
