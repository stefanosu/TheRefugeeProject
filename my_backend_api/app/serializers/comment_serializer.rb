class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :post_id, :user_id 
  
end
