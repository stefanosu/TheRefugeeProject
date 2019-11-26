class SubchannelSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :name, :user_id
  has_many :posts
end