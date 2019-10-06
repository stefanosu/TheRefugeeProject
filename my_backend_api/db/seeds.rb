# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.create(username:'Stefanos', password_digest:'abc123')
User.create(username:'Mike', password_digest:'123abc')
User.create(username:'Mus', password_digest:'123abc')
User.create(username:'Amman', password_digest:'123abc')
User.create(username:'Bear', password_digest:'123abc')



Subchannel.create(name:'Tech', user_id:1)
Subchannel.create(name:'Food', user_id:2)
Subchannel.create(name:'Basketball', user_id:3)
Subchannel.create(name:'Sports', user_id:2)
Subchannel.create(name:'Politics', user_id:4)
Subchannel.create(name:'Poetry', user_id:5)


Post.create(title: 'Almost done', text:'first_post', url:'digitalocean.com', subchannel_id:1)
Post.create(title: 'Eritrean Food', text:'Shiro', url:'massawa.com', subchannel_id:2)
Post.create(title: 'Sports ', text:'Soccor', url:'espn.com', subchannel_id:3)
Post.create(title: 'Tradgey', text:'Mahmoud Darwish', url:'poetry.com', subchannel_id: 5)
Post.create(title: '2020Race', text:'', url:'nytimes.com', subchannel_id:4)


Comment.create(text:'JS is weird', user_id:1, post_id:2)
Comment.create(text:'Knicks...', user_id:5, post_id:3)
Comment.create(text:'Bernie Pandas', user_id:3, post_id:1)
Comment.create(text:'Water', user_id:1, post_id: 1)
Comment.create(text:'food is good', user_id:3, post_id: 4)


