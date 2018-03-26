class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authorize!
    if session[:token].nil?
      redirect_to "/sessions/new"
      return false
    end
    true
  end
end
