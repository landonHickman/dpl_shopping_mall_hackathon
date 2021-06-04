Rails.application.routes.draw do
  namespace :api do
    get 'jobs/index'
    get 'jobs/show'
    get 'jobs/create'
    get 'jobs/update'
    get 'jobs/destroy'
  end
  namespace :api do
    get 'items/index'
    get 'items/show'
    get 'items/create'
    get 'items/update'
    get 'items/dstroy'
  end
  namespace :api do
    get 'stores/index'
    get 'stores/show'
    get 'stores/create'
    get 'stores/update'
    get 'stores/destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/tests', to: 'tests#index'
  end
end
