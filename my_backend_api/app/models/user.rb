class User < ApplicationRecord
    has_many :subchannels
    has_many :posts
    has_many :comments 

    has_secure_password
end
