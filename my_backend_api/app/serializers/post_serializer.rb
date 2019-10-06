class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :title, :url, :comments
end
