var db = require('./models');

// db.author.findOrCreate({where: {name: "Brian"}}).spread(function(author, created) {
//   author.createPost({title: "A new post", body: "Some text"}).then(function(post) {
//     console.log(post.get());
//   })
// });


//ex post with id = 1
// db.post.find({
//   where: {id:1}
// }).then(function(post) {
//   console.log(post.get())
// });

// db.post.findById(1).then(function(post) {
//   db.tag.findOrCreate({where: {name: "aNewNewTag"}}).spread(function(tag, created) {
//     post.addTag(tag).then(function() {
//       console.log(post.get());
//       console.log('---------');
//       console.log(tag.get());
//       console.log('---------');
//     });
//     // console.log(tag.get());
//   })
// });

db.tag.findOrCreate({where: {name: "aNewNewNewtag"}}).spread(function(tag, created) {
  db.post.findById(1).then(function() {
  console.log(post.get());
      console.log('---------');
      console.log(tag.get());
      console.log('---------');
    });
    })
});






