




User.create(username:'Stefanos', password:'abc123')
User.create(username:'Mike', password:'123abc')
User.create(username:'Mus', password:'knicks')
User.create(username:'Amman', password:'brazil')
User.create(username:'Bear', password:'mosby')
User.create(username:'Brian', password:'marvel')



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


Comment.create(text:'JS is weird',post_id:2, user_id:1)
Comment.create(text:'Knicks...',post_id:3, user_id:3)
Comment.create(text:'Bernie Pandas',post_id:1 , user_id:2)
Comment.create(text:'Water',post_id: 1 , user_id:2)
Comment.create(text:'food is good',post_id: 4 , user_id:4)