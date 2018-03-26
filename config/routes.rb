Rails.application.routes.draw do

  root to: 'home#index'

  resources :sessions

  get "twitts/:tags", to: "home#get_twitts", as: :get_twitts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
