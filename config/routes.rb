Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :update, :show, :destroy]
    resources :beers, only: [:create, :update, :show, :destroy]
    resources :brewerys, only: [:create, :update, :show, :destroy]
    resources :venues, only: [:create, :update, :show, :destroy]
  end

end
