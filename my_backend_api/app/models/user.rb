class User < ApplicationRecord
    has_many :subchannels
    has_many :posts 
    has_many :posts, through: :subchannels 
    has_many :comments 
    has_many :comments, through: :posts

end
