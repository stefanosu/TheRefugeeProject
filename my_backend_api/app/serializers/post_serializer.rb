class PostSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :text, :title, :url, :comments  
end
