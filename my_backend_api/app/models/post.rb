class Post < ApplicationRecord
    belongs_to :subchannel 
    has_many :comments 
end
