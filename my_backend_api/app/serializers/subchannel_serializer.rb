class SubchannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :posts
end