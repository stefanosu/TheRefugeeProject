# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.create(username:'Stefanos', password_digest:'abc123', subchannel_id:1, post_id:1, comment_id:1)
User.create(username:'Mike', password_digest:'123abc', subchannel_id:2, post_id:2, comment_id:1)
User.create(username:'Mus', password_digest:'123abc', subchannel_id:1, post_id:2, comment_id:1)
User.create(username:'Amman', password_digest:'123abc', subchannel_id:3, post_id:2, comment_id:1)
User.create(username:'Bear', password_digest:'123abc', subchannel_id:5, post_id:1, comment_id:1)



Subchannel.create(channel_name:'Tech', post_id: 1, user_id:1)
Subchannel.create(channel_name:'Food', post_id: 1, user_id:2)
Subchannel.create(channel_name:'Basketball', post_id: 1, user_id:3)
Subchannel.create(channel_name:'Sports', post_id: 1, user_id:2)
Subchannel.create(channel_name:'Politics', post_id: 1, user_id:4)
Subchannel.create(channel_name:'Poetry', post_id: 1, user_id:5)


Post.create(title: 'Almost done', text:'first_post', url:'digitalocean.com', comment_id: 1, user_id:1)
Post.create(title: 'Eritrean Food', text:'Shiro', url:'massawa.com', comment_id: 1, user_id:3)
Post.create(title: 'Sports ', text:'Soccor', url:'espn.com', comment_id: 1, user_id:3)
Post.create(title: 'Tradgey', text:'Mahmoud Darwish', url:'poetry.com', comment_id: 1, user_id:1)
Post.create(title: '2020Race', text:'', url:'nytimes.com', comment_id: 1, user_id:5)


Comment.create(text:'JS is weird', user_id:1)
Comment.create(text:'Knicks...', user_id:5)
Comment.create(text:'Bernie Pandas', user_id:3)
Comment.create(text:'Water', user_id:1)
Comment.create(text:'food is good', user_id:3)


