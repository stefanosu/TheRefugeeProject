class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :subchannels

  attributes :username, :password_digest, :subchannels
  # has_many  :subchannels

  # attribute  :subchannels do |user| 
  #   {
  #     name: user.subchannels.name 
  # # #     # title: user.posts.title, 
  # # #     # url: user.posts.url,  
  #   }
  # end
end
