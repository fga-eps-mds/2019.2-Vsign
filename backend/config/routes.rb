Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/graphql", to: "graphql#execute"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  
  namespace :v1 do
    resources :contracts, only: [:create]

    scope :user do
      post "upload_document", to: "users#upload_document"
    end
  end

  devise_for :users
end
