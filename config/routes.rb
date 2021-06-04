Rails.application.routes.draw do
  namespace :api do
    resources :articles
    resources :jobs
    resources :stores do
      resources :items
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
