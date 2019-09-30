class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :title, :user_id, :url, :comment_id
end
