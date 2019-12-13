class Subchannel < ApplicationRecord
    belongs_to :user
    has_many :posts


    validates :name, :user, presence: true 
end
