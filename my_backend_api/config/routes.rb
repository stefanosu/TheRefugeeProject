Rails.application.routes.draw do
  # CRUD REQUESTS FOR USERS LOGIIN/LOGOUT AUTH AND OAUTH#
  post 'api/v1/login', to: 'api/v1/sessions#login'
  get  'api/v1/get_current_user', to: 'api/v1/sessions#get_current_user'
  post 'signup', to: 'api/v1/users#create'
  

  # CRUD REQUESTS FOR USERS SUBCHANNELS#
  post 'api/v1/makeChannel', to: 'api/v1/subchannels#create'
  get  'api/v1/getCurrentChannel', to: 'api/v1/subchannels#show'
  delete 'api/v1/destroyChannel', to: 'api/v1/subchannels#destroy'
  patch 'api/v1/udpateChannel', to: 'api/v1/subchannels#update'

# CRUD REQUESTS FOR USERS POSTS ON SUBCHANNELS#


# CRUD REQUESTS FOR USERS COMMENTS ON POSTS#

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
