# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.create(username:'Stefanos', password_digest:'abc123', subchannel_id:1, post_id:1, comment_id:1)

User.create(username:'Stefan', password_digest:'123abc', subchannel_id:2, post_id:2, comment_id:2)


Subchannel.create(channel_name:'Tech', post_id: 1, user_id:1)

Subchannel.create(channel_name:'Food', post_id: 1, user_id:2)


Post.create(title: 'Almost done', text:'first_post', url:'digitalocean.com', comment_id: 1, user_id:1)

Post.create(title: 'African Food', text:'Shiro', url:'massawa.com', comment_id: 1, user_id:2)


Comment.create(text:'JS is weird', user_id:1)

Comment.create(text:'food is good', user_id:2)


