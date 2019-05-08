Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, except: [:new, :edit]
    resources :beers, except: [:new, :edit]
    resources :brewerys, except: [:new, :edit]
    resources :venues, except: [:new, :edit]
  end

end
