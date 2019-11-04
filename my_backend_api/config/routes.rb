Rails.application.routes.draw do
  post '/login', to: 'api/v1/sessions#login'
  get '/profile', to: 'api/v1/users#profile'
  post '/signup', to: 'api/v1/users#create'
  get '/subchannels', to: 'api/v1/subchannels#show'

  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :subchannel
      resources :posts
      resources :comments
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
