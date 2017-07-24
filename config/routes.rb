Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/react-redux-example', to: 'static_pages#react_redux_example'
end
