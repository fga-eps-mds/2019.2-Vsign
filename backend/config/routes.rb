# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/graphql', to: 'graphql#execute'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  get '/login/:token', to: redirect('/'), as: :login_by_token

  namespace :v1 do
    resources :contracts, only: [:create]

    scope :user do
      post 'upload_document', to: 'users#upload_document'
    end
  end

  devise_for :user
end
