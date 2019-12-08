class SubchannelSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :name, :user_id, :posts
  # has_many :posts
end