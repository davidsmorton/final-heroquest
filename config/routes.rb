Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'
    
    post '/signup', to: 'users#create'

    ## routes are for showing users a login form, logging them in, and logging them out.
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'

    # resources :dogs
    # get '/', action: :index, controller: 'test'
    post '/characters/create' => 'characters#create'
    get 'users/:id/characters' => 'characters#index'
    get 'characters/:id' => 'characters#show'
    post '/weapons/purchase' => 'weapons#purchase'
    get '/weapons' => 'weapons#index'
    get 'quests/:id' => 'quests#index'
    put 'character/:id' => 'characters#update'
    get '/lobby/:id/users' => 'lobbies#users'
    get '/lobby/:id/characters' => 'lobbies#characters'
    post 'lobby/characters' => 'lobbies#add_characters'
    get '/character/weapons/:id' => 'characters#weapons'
    post '/characters/:id/destroy' => 'characters#destroy'
    
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
