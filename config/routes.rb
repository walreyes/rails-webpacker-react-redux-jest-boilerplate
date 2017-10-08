Rails.application.routes.draw do
  devise_for :users
  root to: "static_pages#react_redux_example"
  get '/react-redux-example', to: 'static_pages#react_redux_example'
end
