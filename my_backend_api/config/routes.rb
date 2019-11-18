Rails.application.routes.draw do
  # CRUD REQUESTS FOR USERS LOGIIN/LOGOUT AUTH AND OAUTH#
  get  'api/v1/get_current_user', to: 'api/v1/sessions#get_current_user'
  post 'api/v1/login', to: 'api/v1/sessions#login'
  delete 'api/v1/logout', to: 'api/v1/sessions#destroy'
  post 'signup', to: 'api/v1/users#create'
  

  # CRUD REQUESTS FOR USERS SUBCHANNELS#
  get  'api/v1/getCurrentChannel', to: 'api/v1/subchannels#index'
  post 'api/v1/makeChannel', to: 'api/v1/subchannels#create'
  patch 'api/v1/udpateChannel', to: 'api/v1/subchannels#update'
  delete 'api/v1/destroyChannel', to: 'api/v1/subchannels#destroy'


  # CRUD REQUESTS FOR USERS POSTS ON POSTS#
  get 'api/v1/getPosts', to: 'api/v1/posts#show'
  post 'api/v1/makePosts', to: 'api/v1/posts#create'
  patch 'api/v1/updatePosts', to: 'api/v1/posts#update'
  delete 'api/v1/deletePosts', to: 'api/v1/posts#destroy'


  # CRUD REQUESTS FOR USERS COMMENTS ON COMMENTS#
  get 'api/v1/getComments', to: 'api/v1/posts#show'
  post 'api/v1/makeComments', to: 'api/v1/posts#create'
  patch 'api/v1/updateComments', to: 'api/v1/posts#update'
  delete 'api/v1/deleteComments', to: 'api/v1/posts#delete'


  
  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :subchannels
      resources :posts
      resources :comments
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
