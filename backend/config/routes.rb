Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/graphql", to: "graphql#execute"
  
  namespace :v1 do
    resources :contracts, only: [:create]
  end

end
